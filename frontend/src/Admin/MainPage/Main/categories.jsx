
import React, { Component } from 'react';
import {  USER, USER_1,USER_2,USER_3,USER_4,USER_5,USER_8,USER_9,USER_11,USER_12 } from "../../imagepath"
import { Modal, ModalBody } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iseditmodal : false ,
      isdeletemodal : false,
      data : [
        {id:1,image:USER,name:"Jonathan Doe",date:"3 Apr 2020"},
        {id:2,image:USER_1,name:"Julie Pennington",date:"3 Apr 2020"},
        {id:3,image:USER_2,name:"Tyrone Roberts",date:"4 Jun 2020"},
        {id:4,image:USER_3,name:"Allen Davis",date:"3 Apr 2020"},
        {id:5,image:USER_4,name:"Patricia Manzi",date:"3 Apr 2020"},
        {id:6,image:USER_5,name:"Elsie Gilley",date:"3 Apr 2020"},
        {id:7,image:USER_8,name:"Joan Gardner",date:"11 Jul 2020"},
        {id:8,image:USER_9,name:"Daniel Griffing",date:"3 Apr 2020"},
        {id:9,image:USER_11,name:"Walter Roberson",date:"3 Apr 2020"},
        {id:10,image:USER_12,name:"Robert Rhodes",date:"21 Dec 2020"}
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
        title: '#',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: 'Category',
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
        title: 'Date',
        dataIndex: 'date',
        sorter: (a, b) => a.date.length - b.date.length,
      },
      {
        title: 'Reviews',
        dataIndex: 'reviews',
        render: (text, record) => (
          <div>
            <i className="fe fe-star text-warning" />
            <i className="fe fe-star text-warning" />
            <i className="fe fe-star text-warning" />
            <i className="fe fe-star text-warning" />
            <i className="fe fe-star-o text-secondary" />
          </div>
          ),
        sorter: (a, b) => a.reviews.length - b.reviews.length,
      },
      {
        title: 'Actions',
        render: (text, record) => (
          <div className="actions">
            <a className="btn btn-sm bg-success-light mr-1" data-toggle="modal" onClick={()=>this.setState({iseditmodal : true})} href="#edit_modal">
              <i className="fe fe-pencil" />Edit
            </a>
            <a data-toggle="modal" href="#delete_modal" onClick={()=>this.setState({isdeletemodal : true})} className="btn btn-sm bg-danger-light">
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
                <h3 className="page-title">Categories</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/admin/index">Dashboard</a></li>
                  <li className="breadcrumb-item active">Categories</li>
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
         {/* Edit Modal */}
         <Modal className="modal-dialog-centered" isOpen={this.state.iseditmodal} toggle={() => this.editModalClose()}>
              <ModalBody>
              <div className="form-content p-2">
                  <div className="modal-header border-0">
                    <h4 className="modal-title">Edit</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <form id="update_category" method="post" autoComplete="off" encType="multipart/form-data" noValidate="novalidate" className="bv-form"><button type="submit" className="bv-hidden-submit" style={{display: 'none', width: '0px', height: '0px'}} />
                        <input type="hidden" name="csrf_token_name" defaultValue="104dbdaf79d7d8e21e4ae9991d166669" />
                        <div className="form-group">
                          <label>Category Name</label>
                          <input className="form-control" type="text" defaultValue="Painting" name="category_name" id="category_name" data-bv-field="category_name" />
                          <input className="form-control" type="hidden" defaultValue={8} name="category_id" id="category_id" />
                          <small className="help-block" data-bv-validator="remote" data-bv-for="category_name" data-bv-result="NOT_VALIDATED" style={{display: 'none'}}>This category name is already exist</small><small className="help-block" data-bv-validator="notEmpty" data-bv-for="category_name" data-bv-result="NOT_VALIDATED" style={{display: 'none'}}>Please enter category name</small></div>
                        <div className="form-group">
                          <label>Category Image</label>
                          <input className="form-control" type="file" name="category_image" id="category_image" />
                        </div>
                        <div className="form-group">
                          <div className="avatar">
                            <img className="avatar-img rounded" src={USER} alt="" />
                          </div>
                        </div>
                        <div className="mt-4">
                          <button className="btn btn-primary mr-1" name="form_submit" value="submit" type="submit">Save Changes</button>
                          <button type="button" className="btn btn-danger" data-dismiss="modal"  onClick={()=>this.editModalClose()}>Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>	
                </div>             
              </ModalBody>
         </Modal> 
        {/* /Edit Modal */}
        {/* Delete Model */}
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
        {/* Delete Model */}			
      </div> 
      );
   }
}

export default Clients;
