
import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
import Sidebar from "./sidebar"
import { Modal,ModalHeader, ModalBody } from 'reactstrap';
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';

class ScheduleTiming extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            isnewmodal : false ,
            iseditModal : false,
            addnewtimeslot:[],
            edittimeslot:["placeholder","placeholder"]
        }
    }
    newModalClose() {
      this.setState({ isnewmodal: false })
   }
   editModalClose() {
     this.setState({ iseditModal: false })
  }
  addnewtimeschedule(){
    const{addnewtimeslot} = this.state
    var addnewrow = addnewtimeslot
    addnewrow.push('placeholder')
    this.setState({addnewtimeslot:addnewrow })
  }
  removenewtimeschedule(index){
    var contacts = [...this.state.addnewtimeslot];
    contacts.splice(index, 1);
    this.setState({addnewtimeslot : contacts});
  }
  edittimeschedule(){
    const{edittimeslot} = this.state
    var addnewrow = edittimeslot
    addnewrow.push('placeholder')
    this.setState({edittimeslot:addnewrow })
  }
  removeedittimeschedule(index){
    var contacts = [...this.state.edittimeslot];
    contacts.splice(index, 1);
    this.setState({edittimeslot : contacts});
  }
   render() {
     const{addnewtimeslot,edittimeslot} = this.state
      return ( 
        <div>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/index">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Schedule Timings</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Schedule Timings</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3">
                {/* Sidebar */}
                <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar/></StickyBox>
                {/* /Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Schedule Timings</h4>
                        <div className="profile-box">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group">               
                                <label>Timing Slot Duration</label>
                                <select className="select form-control">
                                  <option>Select</option>
                                  <option>15 mins</option>
                                  <option >30 mins</option>  
                                  <option>45 mins</option>
                                  <option>1 Hour</option>
                                </select>
                              </div>
                            </div>
                          </div>     
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card schedule-widget mb-0">
                                {/* Schedule Header */}
                                <div className="schedule-header">
                                  {/* Schedule Nav */}
                                  <div className="schedule-nav">
                                    <ul className="nav nav-tabs nav-justified">
                                      <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#slot_sunday">Sunday</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#slot_monday">Monday</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#slot_tuesday">Tuesday</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#slot_wednesday">Wednesday</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#slot_thursday">Thursday</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#slot_friday">Friday</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#slot_saturday">Saturday</a>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* /Schedule Nav */}
                                </div>
                                {/* /Schedule Header */}
                                {/* Schedule Content */}
                                <div className="tab-content schedule-cont">
                                  {/* Sunday Slot */}
                                  <div id="slot_sunday" className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" onClick={()=>this.setState({isnewmodal : true})} data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle" /> Add Slot</a>
                                    </h4>
                                    <p className="text-muted mb-0">Not Available</p>
                                  </div>
                                  {/* /Sunday Slot */}
                                  {/* Monday Slot */}
                                  <div id="slot_monday" className="tab-pane fade show active">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" onClick={()=>this.setState({iseditModal : true})} data-toggle="modal" href="#edit_time_slot"><i className="fa fa-edit mr-1" />Edit</a>
                                    </h4>
                                    {/* Slot List */}
                                    <div className="user-times">
                                      <div className="user-slot-list">
                                        8:00 pm - 11:30 pm
                                        <a href="" className="delete_schedule">
                                          <i className="fa fa-times" />
                                        </a>
                                      </div>
                                      <div className="user-slot-list">
                                        11:30 pm - 1:30 pm
                                        <a href="" className="delete_schedule">
                                          <i className="fa fa-times" />
                                        </a>
                                      </div>
                                      <div className="user-slot-list">
                                        3:00 pm - 5:00 pm
                                        <a href="" className="delete_schedule">
                                          <i className="fa fa-times" />
                                        </a>
                                      </div>
                                      <div className="user-slot-list">
                                        6:00 pm - 11:00 pm
                                        <a href="" className="delete_schedule">
                                          <i className="fa fa-times" />
                                        </a>
                                      </div>
                                    </div>
                                    {/* /Slot List */}
                                  </div>
                                  {/* /Monday Slot */}
                                  {/* Tuesday Slot */}
                                  <div id="slot_tuesday" className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" onClick={()=>this.setState({isnewmodal : true})} data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle" /> Add Slot</a>
                                    </h4>
                                    <p className="text-muted mb-0">Not Available</p>
                                  </div>
                                  {/* /Tuesday Slot */}
                                  {/* Wednesday Slot */}
                                  <div id="slot_wednesday" className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" onClick={()=>this.setState({isnewmodal : true})} data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle" /> Add Slot</a>
                                    </h4>
                                    <p className="text-muted mb-0">Not Available</p>
                                  </div>
                                  {/* /Wednesday Slot */}
                                  {/* Thursday Slot */}
                                  <div id="slot_thursday" className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" onClick={()=>this.setState({isnewmodal : true})} data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle" /> Add Slot</a>
                                    </h4>
                                    <p className="text-muted mb-0">Not Available</p>
                                  </div>
                                  {/* /Thursday Slot */}
                                  {/* Friday Slot */}
                                  <div id="slot_friday" className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" onClick={()=>this.setState({isnewmodal : true})} data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle" /> Add Slot</a>
                                    </h4>
                                    <p className="text-muted mb-0">Not Available</p>
                                  </div>
                                  {/* /Friday Slot */}
                                  {/* Saturday Slot */}
                                  <div id="slot_saturday" className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span> 
                                      <a className="edit-link" onClick={()=>this.setState({isnewmodal : true})} data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle" /> Add Slot</a>
                                    </h4>
                                    <p className="text-muted mb-0">Not Available</p>
                                  </div>
                                  {/* /Saturday Slot */}
                                </div>
                                {/* /Schedule Content */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
        {/* Add Time Slot Modal */}
        <Modal className="modal-dialog-centered" isOpen={this.state.isnewmodal} toggle={() => this.newModalClose()}>
            <ModalHeader toggle={() => this.newModalClose()}> Add Time Slots
            </ModalHeader>
            <ModalBody>
                <form>
                  <div className="hours-info">
                    <div className="row form-row hours-cont">
                      <div className="col-12 col-md-10">
                        <div className="row form-row">
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Start Time</label>
                              <select className="form-control">
                                <option>Select</option>
                                <option>12.00 am</option>
                                <option>1.00 am</option>  
                                <option>2.00 am</option>
                                <option>3.00 am</option>
                                <option>4.00 am</option>
                                <option>5.00 am</option>
                                <option>6.00 am</option>
                                <option>7.00 am</option>
                                <option>8.00 am</option>
                                <option>9.00 am</option>
                                <option>10.00 am</option>
                                <option>11.00 am</option>
                                <option>12.00 pm</option>
                                <option>1.00 pm</option> 
                                <option>2.00 pm</option> 
                                <option>3.00 pm</option> 
                                <option>4.00 pm</option> 
                                <option>5.00 pm</option> 
                                <option>6.00 pm</option> 
                                <option>7.00 pm</option> 
                                <option>8.00 pm</option> 
                                <option>9.00 pm</option> 
                                <option>10.00 pm</option> 
                                <option>11.00 pm</option> 
                              </select>
                            </div> 
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>End Time</label>
                              <select className="form-control">
                                <option>Select</option>
                                <option>12.00 am</option>
                                <option>1.00 am</option>  
                                <option>2.00 am</option>
                                <option>3.00 am</option>
                                <option>4.00 am</option>
                                <option>5.00 am</option>
                                <option>6.00 am</option>
                                <option>7.00 am</option>
                                <option>8.00 am</option>
                                <option>9.00 am</option>
                                <option>10.00 am</option>
                                <option>11.00 am</option>
                                <option>12.00 pm</option>
                                <option>1.00 pm</option> 
                                <option>2.00 pm</option> 
                                <option>3.00 pm</option> 
                                <option>4.00 pm</option> 
                                <option>5.00 pm</option> 
                                <option>6.00 pm</option> 
                                <option>7.00 pm</option> 
                                <option>8.00 pm</option> 
                                <option>9.00 pm</option> 
                                <option>10.00 pm</option> 
                                <option>11.00 pm</option> 
                              </select>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {addnewtimeslot && addnewtimeslot.map((newrow,index) => (
                      <div className="hours-info">
                      <div className="row form-row hours-cont">
                        <div className="col-12 col-md-10">
                          <div className="row form-row">
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Start Time</label>
                                <select className="form-control">
                                  <option>Select</option>
                                  <option>12.00 am</option>
                                  <option>1.00 am</option>  
                                  <option>2.00 am</option>
                                  <option>3.00 am</option>
                                  <option>4.00 am</option>
                                  <option>5.00 am</option>
                                  <option>6.00 am</option>
                                  <option>7.00 am</option>
                                  <option>8.00 am</option>
                                  <option>9.00 am</option>
                                  <option>10.00 am</option>
                                  <option>11.00 am</option>
                                  <option>12.00 pm</option>
                                  <option>1.00 pm</option> 
                                  <option>2.00 pm</option> 
                                  <option>3.00 pm</option> 
                                  <option>4.00 pm</option> 
                                  <option>5.00 pm</option> 
                                  <option>6.00 pm</option> 
                                  <option>7.00 pm</option> 
                                  <option>8.00 pm</option> 
                                  <option>9.00 pm</option> 
                                  <option>10.00 pm</option> 
                                  <option>11.00 pm</option> 
                                </select>
                              </div> 
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>End Time</label>
                                <select className="form-control">
                                  <option>Select</option>
                                  <option>12.00 am</option>
                                  <option>1.00 am</option>  
                                  <option>2.00 am</option>
                                  <option>3.00 am</option>
                                  <option>4.00 am</option>
                                  <option>5.00 am</option>
                                  <option>6.00 am</option>
                                  <option>7.00 am</option>
                                  <option>8.00 am</option>
                                  <option>9.00 am</option>
                                  <option>10.00 am</option>
                                  <option>11.00 am</option>
                                  <option>12.00 pm</option>
                                  <option>1.00 pm</option> 
                                  <option>2.00 pm</option> 
                                  <option>3.00 pm</option> 
                                  <option>4.00 pm</option> 
                                  <option>5.00 pm</option> 
                                  <option>6.00 pm</option> 
                                  <option>7.00 pm</option> 
                                  <option>8.00 pm</option> 
                                  <option>9.00 pm</option> 
                                  <option>10.00 pm</option> 
                                  <option>11.00 pm</option> 
                                </select>
                              </div> 
                            </div>
                          </div>
                        </div>                        
                        <div className="col-12 col-md-2"><label className="d-md-block d-sm-none d-none">&nbsp;
                            </label><a  className="btn btn-danger trash" style={{cursor:"pointer"}} onClick={()=>this.removenewtimeschedule(index)}>
                              <i style={{color:'#fff'}} className="far fa-trash-alt" /></a>
                        </div>
                      </div>
                    </div>
                    ))}
                  <div className="add-more mb-3">
                    <a style={{cursor:'pointer',color:"#1e88e5"}} onClick={()=>this.addnewtimeschedule()}><i className="fa fa-plus-circle" /> Add More</a>
                  </div>
                  <div className="submit-section text-center">
                    <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                  </div>
                </form>
            </ModalBody>               
        </Modal>
        {/* Edit Time Slot Modal */}
        <Modal className="modal-dialog-centered" isOpen={this.state.iseditModal} toggle={() => this.editModalClose()}>
            <ModalHeader toggle={() => this.editModalClose()}> Edit Time Slots</ModalHeader>
            <ModalBody>
                <form>
                  <div className="hours-info">
                    <div className="row form-row hours-cont">
                      <div className="col-12 col-md-10">
                        <div className="row form-row">
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Start Time</label>
                              <select className="form-control">
                                <option>Select</option>
                                <option>12.00 am</option>
                                <option>1.00 am</option>  
                                <option>2.00 am</option>
                                <option>3.00 am</option>
                                <option>4.00 am</option>
                                <option>5.00 am</option>
                                <option>6.00 am</option>
                                <option>7.00 am</option>
                                <option>8.00 am</option>
                                <option>9.00 am</option>
                                <option>10.00 am</option>
                                <option>11.00 am</option>
                                <option>12.00 pm</option>
                                <option>1.00 pm</option> 
                                <option>2.00 pm</option> 
                                <option>3.00 pm</option> 
                                <option>4.00 pm</option> 
                                <option>5.00 pm</option> 
                                <option>6.00 pm</option> 
                                <option>7.00 pm</option> 
                                <option>8.00 pm</option> 
                                <option>9.00 pm</option> 
                                <option>10.00 pm</option> 
                                <option>11.00 pm</option> 
                              </select>
                            </div> 
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>End Time</label>
                              <select className="form-control">
                                <option>Select</option>
                                <option>12.00 am</option>
                                <option>1.00 am</option>  
                                <option>2.00 am</option>
                                <option>3.00 am</option>
                                <option>4.00 am</option>
                                <option>5.00 am</option>
                                <option>6.00 am</option>
                                <option>7.00 am</option>
                                <option>8.00 am</option>
                                <option>9.00 am</option>
                                <option>10.00 am</option>
                                <option>11.00 am</option>
                                <option>12.00 pm</option>
                                <option>1.00 pm</option> 
                                <option>2.00 pm</option> 
                                <option>3.00 pm</option> 
                                <option>4.00 pm</option> 
                                <option>5.00 pm</option> 
                                <option>6.00 pm</option> 
                                <option>7.00 pm</option> 
                                <option>8.00 pm</option> 
                                <option>9.00 pm</option> 
                                <option>10.00 pm</option> 
                                <option>11.00 pm</option> 
                              </select>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                    {edittimeslot && edittimeslot.map((timeslot,index)=>
                      <div className="row form-row hours-cont">
                      <div className="col-12 col-md-10">
                        <div className="row form-row">
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Start Time</label>
                              <select className="form-control">
                                <option>Select</option>
                                <option>12.00 am</option>
                                <option>1.00 am</option>  
                                <option>2.00 am</option>
                                <option>3.00 am</option>
                                <option>4.00 am</option>
                                <option>5.00 am</option>
                                <option>6.00 am</option>
                                <option>7.00 am</option>
                                <option>8.00 am</option>
                                <option>9.00 am</option>
                                <option>10.00 am</option>
                                <option>11.00 am</option>
                                <option>12.00 pm</option>
                                <option>1.00 pm</option> 
                                <option>2.00 pm</option> 
                                <option>3.00 pm</option> 
                                <option>4.00 pm</option> 
                                <option>5.00 pm</option> 
                                <option>6.00 pm</option> 
                                <option>7.00 pm</option> 
                                <option>8.00 pm</option> 
                                <option>9.00 pm</option> 
                                <option>10.00 pm</option> 
                                <option>11.00 pm</option> 
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>End Time</label>
                              <select className="form-control">
                                <option>Select</option>
                                <option>12.00 am</option>
                                <option>1.00 am</option>  
                                <option>2.00 am</option>
                                <option>3.00 am</option>
                                <option>4.00 am</option>
                                <option>5.00 am</option>
                                <option>6.00 am</option>
                                <option>7.00 am</option>
                                <option>8.00 am</option>
                                <option>9.00 am</option>
                                <option>10.00 am</option>
                                <option>11.00 am</option>
                                <option>12.00 pm</option>
                                <option>1.00 pm</option> 
                                <option>2.00 pm</option> 
                                <option>3.00 pm</option> 
                                <option>4.00 pm</option> 
                                <option>5.00 pm</option> 
                                <option>6.00 pm</option> 
                                <option>7.00 pm</option> 
                                <option>8.00 pm</option> 
                                <option>9.00 pm</option> 
                                <option>10.00 pm</option> 
                                <option>11.00 pm</option> 
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-2"><label className="d-md-block d-sm-none d-none">&nbsp;</label>
                      <a className="btn btn-danger trash" onClick={()=>this.removeedittimeschedule(index)}><i style={{color:"#fff"}} className="far fa-trash-alt" /></a></div>
                    </div>
                    )}
                    
                  </div>
                  <div className="add-more mb-3">
                    <a className="add-hours" style={{cursor:'pointer',color:"#1e88e5"}} onClick={()=>this.edittimeschedule()}><i className="fa fa-plus-circle" /> Add More</a>
                  </div>
                  <div className="submit-section text-center">
                    <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                  </div>
                </form>
            </ModalBody>               
        </Modal>
      </div>
      );
   }
}

export default ScheduleTiming;
