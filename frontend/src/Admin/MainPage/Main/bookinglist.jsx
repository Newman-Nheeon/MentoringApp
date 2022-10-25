
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {  AVATAR_07, AVATAR_08,USER,USER_1 } from "../../imagepath"
import { withRouter, Link } from 'react-router-dom';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,image:AVATAR_07,name:"James Amen",course:"Maths",mentee_name:"Jonathan Doe",mentee_image:USER,booking_date:"9 Nov 2019",booking_time:"11.00 AM - 11.15 AM",amount :"$200.00"},
         {id:2,image:AVATAR_08,name:"Jessica Fogarty",course:"Business Maths",mentee_name:"Julie Pennington",mentee_image:USER_1,booking_date:"5 Nov 2019",booking_time:"11.00 AM - 11.35 AM",amount :"$300.00"}
       ],          
    };
  }
   render() {
    const{data} = this.state
    const columns = [
      
      {
        title: 'Mentor Name',
        dataIndex: 'name',
        render: (text, record) => (            
            <h2 className="table-avatar">
                <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={record.image} alt="User Image" /></Link>
        <Link to="/admin/profile">{text}</Link>
            </h2>
          ), 
          sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: 'Course',
        dataIndex: 'course',
        sorter: (a, b) => a.course.length - b.course.length,
      },
    
      {
        title: 'Mentee Name',
        dataIndex: 'mentee_name',
        render: (text, record) => (            
            <h2 className="table-avatar">
                <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={record.mentee_image} alt="User Image" /></Link>
                <Link to="/admin/profile">{text}</Link>
            </h2>
          ), 
          sorter: (a, b) => a.mentee_name.length - b.mentee_name.length,
      },
      {
        title: 'Booking Time',
        dataIndex: 'booking_date',
        render: (text, record) => (
            <div>{text}
                <span className="text-primary d-block">{record.booking_time}</span>
          </div>
          ),
        sorter: (a, b) => a.booking_date.length - b.booking_date.length,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => (
            <div className="status-toggle d-flex">
                <input type="checkbox" id="status_6" className="check" defaultChecked />
                <label htmlFor="status_6" className="checktoggle">checkbox</label>
          </div>
          ),
      }, 
      {
        title: 'Amount',
        dataIndex: 'amount',
        sorter: (a, b) => a.amount.length - b.amount.length,
      },
  
    ]
      return ( 
        <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Bookings</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/admin/index">Dashboard</Link></li>
                  <li className="breadcrumb-item active">Bookings</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                  <Table className="table-hover table-center mb-0"
                        pagination= { {total : data.length,
                          showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
                        style = {{overflowX : 'auto'}}
                        columns={columns}                 
                        // bordered
                        dataSource={data}
                        rowKey={record => record.id}
                        onChange={this.handleTableChange}
                      />
                    
                  </div>
                </div>
              </div>
            </div>			
          </div>
        </div>			
      </div> 
      );
   }
}

export default Clients;
