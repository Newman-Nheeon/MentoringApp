
import React, { Component } from 'react';
import {  USER, USER_1,USER_2,USER_3,USER_4,USER_5,USER_8,USER_9,USER_11,USER_12 } from "../../imagepath"
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

class InvoiceReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iseditmodal : false ,
      isdeletemodal : false,
       data : [
         {id:1,invoicenumber:"#IN0001",mentee_id:"#01",image:USER,name:"Jonathan Doe",status:"Paid",total_amnt :"$100.00",created_date:"9 Sep 2019"},
         {id:2,invoicenumber:"#IN0002",mentee_id:"#02",image:USER_1,name:"Julie Pennington",status:"Paid",total_amnt :"$200.00",created_date:"29 Oct 2019"},
         {id:3,invoicenumber:"#IN0003",mentee_id:"#03",image:USER_2,name:"Tyrone Roberts",status:"Paid",total_amnt :"$250.00",created_date:"25 Sep 2019"},
         {id:4,invoicenumber:"#IN0004",mentee_id:"#04",image:USER_3,name:"Allen Davis",status:"Paid",total_amnt :"$150.00",created_date:"9 Oct 2019"},
         {id:5,invoicenumber:"#IN0005",mentee_id:"#05",image:USER_4,name:"Patricia Manzi",status:"Paid",total_amnt :"$350.00",created_date:"19 Nov 2019"},
         {id:6,invoicenumber:"#IN0006",mentee_id:"#06",image:USER_5,name:"Elsie Gilley",status:"Paid",total_amnt :"$300.00",created_date:"9 Sep 2019"},
         {id:7,invoicenumber:"#IN0007",mentee_id:"#07",image:USER_8,name:"Joan Gardner",status:"Paid",total_amnt :"$250.00",created_date:"25 Oct 2019"},
         {id:8,invoicenumber:"#IN0008",mentee_id:"#08",image:USER_9,name:"Daniel Griffing",status:"Paid",total_amnt :"$150.00",created_date:"30 Oct 2019"},
         {id:9,invoicenumber:"#IN0009",mentee_id:"#09",image:USER_11,name:"Walter Roberson",status:"Paid",total_amnt :"$120.00",created_date:"5 Nov 2019"},
         {id:10,invoicenumber:"#IN0010",mentee_id:"#10",image:USER_12,name:"Robert Rhodes",status:"Paid",total_amnt :"$100.00",created_date:"7 Nov 2019"}
       ],          
    };
  }
  editModalClose() {
    this.setState({ iseditmodal: false })
  }
  deleteModalClose() {
    this.setState({ isdeletemodal: false })
  }
   render() {
    const{data} = this.state
    const columns = [
      
      {
        title: 'Invoice Number',
        dataIndex: 'invoicenumber',
        render: (text, record) => ( 
          <Link to="/admin/invoice">{text}</Link>
          ), 
          sorter: (a, b) => a.invoicenumber.length - b.invoicenumber.length,
      },
      {
        title: 'Mentee ID',
        dataIndex: 'mentee_id',
        // render: (text, record) => ( 
        //   console.log('sreevi '+ typeof(record.mentee_id))           
        //   ), 
        sorter: (a, b) => a.mentee_id.length - b.mentee_id.length,
      },
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
        title: 'Total Amount',
        dataIndex: 'total_amnt',
        sorter: (a, b) => a.total_amnt.length - b.total_amnt.length,
      },
      {
        title: 'Created Date',
        dataIndex: 'created_date',
        sorter: (a, b) => a.created_date.length - b.created_date.length,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => (            
          <span className="badge badge-pill bg-success inv-badge">{text}</span>
          ), 
        sorter: (a, b) => a.member_since_date.length - b.member_since_date.length,
      },
      {
        title: 'Actions',
        render: (text, record) => (
          <div className="actions">
            <a data-toggle="modal" href="#edit_invoice_report" onClick={()=>this.setState({iseditmodal : true})} className="btn btn-sm bg-success-light mr-2">
              <i className="fe fe-pencil" /> Edit
            </a>
            <a className="btn btn-sm bg-danger-light" data-toggle="modal" onClick={()=>this.setState({isdeletemodal : true})} href="#delete_modal">
              <i className="fe fe-trash" /> Delete
            </a>
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
                <h3 className="page-title">Invoice Report</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/admin/index">Dashboard</Link></li>
                  <li className="breadcrumb-item active">Invoice Report</li>
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
         {/* Edit Details Modal */}
         <Modal className="modal-dialog-centered" isOpen={this.state.iseditmodal} toggle={() => this.editModalClose()}>
              <ModalHeader toggle={() => this.editModalClose()}>Edit Invoice Report</ModalHeader>
              <ModalBody>
                <form>
                  <div className="row form-row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Invoice Number</label>
                        <input type="text" className="form-control" defaultValue="#INV-0001" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Mentee ID</label>
                        <input type="text" className="form-control" defaultValue="	#01" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Mentee Name</label>
                        <input type="text" className="form-control" defaultValue="Jonathan Doe" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Mentee Image</label>
                        <input type="file" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Total Amount</label>
                        <input type="text" className="form-control" defaultValue="$200.00" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Created Date</label>
                        <input type="text" className="form-control" defaultValue="29th Oct 2019" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
                </form>
              </ModalBody>
          </Modal>
        {/* /Edit Details Modal */}
        {/* Delete Modal */}
        <Modal className="modal-dialog-centered" isOpen={this.state.isdeletemodal} toggle={() => this.deleteModalClose()}>
            <ModalBody>
              <div align="center" className="form-content p-2">
                  <h4 className="modal-title">Delete</h4>
                  <p className="mb-4">Are you sure want to delete?</p>
                  <button type="button" className="btn btn-primary mr-1">Delete </button>
                  <button type="button" className="btn btn-danger" onClick={()=>this.deleteModalClose()} data-dismiss="modal">Close</button>
              </div>
            </ModalBody>
         </Modal>    
        {/* /Delete Modal */}
      </div> 
      );
   }
}

export default InvoiceReport;
