
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {  AVATAR_07, AVATAR_08 } from "../../imagepath"
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,image:AVATAR_07,name:"James Amen",course:"Maths",member_since_date:"14 Jan 2019",member_since_time:"02.59 AM",earned :"$3100.00"},
         {id:2,image:AVATAR_08,name:"Jessica Fogarty",course:"Business Maths",member_since_date:"11 Jun 2019",member_since_time:"04.50 AM",earned :"$5000.00"}
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
        title: 'Member Since',
        dataIndex: 'member_since_date',
        render: (text, record) => (            
        <span>{text}<br/><small>{record.member_since_time}</small></span>
          ), 
        sorter: (a, b) => a.member_since_date.length - b.member_since_date.length,
      },
      {
        title: 'Earned',
        dataIndex: 'earned',
        sorter: (a, b) => a.earned.length - b.earned.length,
      },
      {
        title: 'Account Status',
        dataIndex: 'status',
        render: (text, record) => (
            <div className="status-toggle d-flex">
                <input type="checkbox" id="status_6" className="check" defaultChecked />
                <label htmlFor="status_6" className="checktoggle">checkbox</label>
          </div>
          ),
      }, 
  
    ]
      return ( 
        <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
            <div className="col-sm-12">
                <h3 className="page-title">List of Mentee</h3>
                <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admin/index">Dashboard</Link></li>
                <li className="breadcrumb-item"><a href="">Users</a></li>
                <li className="breadcrumb-item active">Mentee</li>
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
