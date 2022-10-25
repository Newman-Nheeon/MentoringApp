
import React, { Component } from 'react';
import Sidebar from "./sidebar"
import {USER_1,USER_2,USER_3,USER_4,USER_5,USER_6,USER_7,USER_8,USER_9,USER_10,USER_11} from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
import { Modal,ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';

class Appointments extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            isviewmodal : false ,
        }
    }
    viewModalClose() {
      this.setState({ isviewmodal: false })
   }
   render() {
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
                        <li className="breadcrumb-item active" aria-current="page">Appointments</li>
                        </ol>
                    </nav>
                    <h2 className="breadcrumb-title">Appointments</h2>
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
              <div className="appointments">
                {/* Appointment List */}
                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link to="/app/Mentor/profile-mentee" className="booking-user-img">
                      <img src={USER_2} alt="User Image" />
                    </Link>
                    <div className="profile-det-info">
                      <h3><Link to="/app/Mentor/profile-mentee">Tyrone Roberts</Link></h3>
                      <div className="mentee-details">
                        <h5><i className="far fa-clock" /> 14 Nov 2019, 10.00 AM</h5>
                        <h5><i className="fas fa-map-marker-alt" /> Newyork, United States</h5>
                        <h5><i className="fas fa-envelope" /> tyroneroberts@example.com</h5>
                        <h5 className="mb-0"><i className="fas fa-phone" /> +1 923 782 4575</h5>
                      </div>
                    </div>
                  </div>
                  <div className="appointment-action">
                    <a href="#" className="btn btn-sm bg-info-light" onClick={()=>this.setState({isviewmodal : true})} data-toggle="modal" data-target="#appt_details">
                      <i className="far fa-eye" /> View
                    </a>
                    <a href="" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check" /> Accept
                    </a>
                    <a href="" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times" /> Cancel
                    </a>
                  </div>
                </div>
                {/* /Appointment List */}
                {/* Appointment List */}
                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link to="/app/Mentor/profile-mentee" className="booking-user-img">
                      <img src={USER_1} alt="User Image" />
                    </Link>
                    <div className="profile-det-info">
                      <h3><Link to="/app/Mentor/profile-mentee">Julie Pennington </Link></h3>
                      <div className="mentee-details">
                        <h5><i className="far fa-clock" /> 12 Nov 2019, 5.00 PM</h5>
                        <h5><i className="fas fa-map-marker-alt" /> North Carolina, United States</h5>
                        <h5><i className="fas fa-envelope" /> juliepennington@example.com</h5>
                        <h5 className="mb-0"><i className="fas fa-phone" /> +1 828 632 9170</h5>
                      </div>
                    </div>
                  </div>
                  <div className="appointment-action">
                    <a href="#" className="btn btn-sm bg-info-light" onClick={()=>this.setState({isviewmodal : true})} data-toggle="modal" data-target="#appt_details">
                      <i className="far fa-eye" /> View
                    </a>
                    <a href="" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check" /> Accept
                    </a>
                    <a href="" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times" /> Cancel
                    </a>
                  </div>
                </div>
                {/* /Appointment List */}
                {/* Appointment List */}
                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link to="/app/Mentor/profile-mentee" className="booking-user-img">
                      <img src={USER_3} alt="User Image" />
                    </Link>
                    <div className="profile-det-info">
                      <h3><Link to="/app/Mentor/profile-mentee">Allen Davis</Link></h3>
                      <div className="mentee-details">
                        <h5><i className="far fa-clock" /> 9 Nov 2019, 9.00 AM</h5>
                        <h5><i className="fas fa-map-marker-alt" /> Newyork, United States</h5>
                        <h5><i className="fas fa-envelope" /> allendavis@example.com</h5>
                        <h5 className="mb-0"><i className="fas fa-phone" /> +1 260 724 7769</h5>
                      </div>
                    </div>
                  </div>
                  <div className="appointment-action">
                    <a href="#" className="btn btn-sm bg-info-light" onClick={()=>this.setState({isviewmodal : true})} data-toggle="modal" data-target="#appt_details">
                      <i className="far fa-eye" /> View
                    </a>
                    <a href="" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check" /> Accept
                    </a>
                    <a href="" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times" /> Cancel
                    </a>
                  </div>
                </div>
                {/* /Appointment List */}
                {/* Appointment List */}
                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link to="/app/Mentor/profile-mentee" className="booking-user-img">
                      <img src={USER_4} alt="User Image" />
                    </Link>
                    <div className="profile-det-info">
                      <h3><Link to="/app/Mentor/profile-mentee">Patricia Manzi</Link></h3>
                      <div className="mentee-details">
                        <h5><i className="far fa-clock" /> 9 Nov 2019, 1.00 PM</h5>
                        <h5><i className="fas fa-map-marker-alt" /> Indiana, United States</h5>
                        <h5><i className="fas fa-envelope" /> patriciamanziexample.com</h5>
                        <h5 className="mb-0"><i className="fas fa-phone" /> +1 504 368 6874</h5>
                      </div>
                    </div>
                  </div>
                  <div className="appointment-action">
                    <a href="#" className="btn btn-sm bg-info-light" onClick={()=>this.setState({isviewmodal : true})} data-toggle="modal" data-target="#appt_details">
                      <i className="far fa-eye" /> View
                    </a>
                    <a href="" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check" /> Accept
                    </a>
                    <a href="" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times" /> Cancel
                    </a>
                  </div>
                </div>
                {/* /Appointment List */}
                {/* Appointment List */}
                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link to="/app/Mentor/profile-mentee" className="booking-user-img">
                      <img src={USER_5} alt="User Image" />
                    </Link>
                    <div className="profile-det-info">
                      <h3><Link to="/app/Mentor/profile-mentee">Olive Lawrence</Link></h3>
                      <div className="mentee-details">
                        <h5><i className="far fa-clock" /> 8 Nov 2019, 3.00 PM</h5>
                        <h5><i className="fas fa-map-marker-alt" /> Florida, United States</h5>
                        <h5><i className="fas fa-envelope" /> olivelawrence@example.com</h5>
                        <h5 className="mb-0"><i className="fas fa-phone" /> +1 954 820 7887</h5>
                      </div>
                    </div>
                  </div>
                  <div className="appointment-action">
                    <a href="#" className="btn btn-sm bg-info-light" onClick={()=>this.setState({isviewmodal : true})} data-toggle="modal" data-target="#appt_details">
                      <i className="far fa-eye" /> View
                    </a>
                    <a href="" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check" /> Accept
                    </a>
                    <a href="" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times" /> Cancel
                    </a>
                  </div>
                </div>
                {/* /Appointment List */}
                {/* Appointment List */}
                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link to="/app/Mentor/profile-mentee" className="booking-user-img">
                      <img src={USER_6} alt="User Image" />
                    </Link>
                    <div className="profile-det-info">
                      <h3><Link to="/app/Mentor/profile-mentee">Frances Foster</Link></h3>
                      <div className="mentee-details">
                        <h5><i className="far fa-clock" /> 6 Nov 2019, 9.00 AM</h5>
                        <h5><i className="fas fa-map-marker-alt" /> Kentucky, United States</h5>
                        <h5><i className="fas fa-envelope" /> francesfoster@example.com</h5>
                        <h5 className="mb-0"><i className="fas fa-phone" /> +1 315 384 4562</h5>
                      </div>
                    </div>
                  </div>
                  <div className="appointment-action">
                    <a href="#" className="btn btn-sm bg-info-light" onClick={()=>this.setState({isviewmodal : true})} data-toggle="modal" data-target="#appt_details">
                      <i className="far fa-eye" /> View
                    </a>
                    <a href="" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check" /> Accept
                    </a>
                    <a href="" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times" /> Cancel
                    </a>
                  </div>
                </div>
                {/* /Appointment List */}
                {/* Appointment List */}
                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link to="/app/Mentor/profile-mentee" className="booking-user-img">
                      <img src={USER_7} alt="User Image" />
                    </Link>
                    <div className="profile-det-info">
                      <h3><Link to="/app/Mentor/profile-mentee">Deloris Briscoe </Link></h3>
                      <div className="mentee-details">
                        <h5><i className="far fa-clock" /> 5 Nov 2019, 12.00 PM</h5>
                        <h5><i className="fas fa-map-marker-alt" /> California, United States</h5>
                        <h5><i className="fas fa-envelope" /> delorisbriscoe@example.com</h5>
                        <h5 className="mb-0"><i className="fas fa-phone" /> +1 707 2202 603</h5>
                      </div>
                    </div>
                  </div>
                  <div className="appointment-action">
                    <a href="#" className="btn btn-sm bg-info-light" onClick={()=>this.setState({isviewmodal : true})} data-toggle="modal" data-target="#appt_details">
                      <i className="far fa-eye" /> View
                    </a>
                    <a href="" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check" /> Accept
                    </a>
                    <a href="" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times" /> Cancel
                    </a>
                  </div>
                </div>
                {/* /Appointment List */}
                {/* Appointment List */}
                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link to="/app/Mentor/profile-mentee" className="booking-user-img">
                      <img src={USER_8} alt="User Image" />
                    </Link>
                    <div className="profile-det-info">
                      <h3><Link to="/app/Mentor/profile-mentee">Daniel Griffing</Link></h3>
                      <div className="mentee-details">
                        <h5><i className="far fa-clock" /> 5 Nov 2019, 7.00 PM</h5>
                        <h5><i className="fas fa-map-marker-alt" /> New Jersey, United States</h5>
                        <h5><i className="fas fa-envelope" /> danielgriffing@example.com</h5>
                        <h5 className="mb-0"><i className="fas fa-phone" /> +1 973 773 9497</h5>
                      </div>
                    </div>
                  </div>
                  <div className="appointment-action">
                    <a href="#" className="btn btn-sm bg-info-light" onClick={()=>this.setState({isviewmodal : true})} data-toggle="modal" data-target="#appt_details">
                      <i className="far fa-eye" /> View
                    </a>
                    <a href="" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check" /> Accept
                    </a>
                    <a href="" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times" /> Cancel
                    </a>
                  </div>
                </div>
                {/* /Appointment List */}
                {/* Appointment List */}
                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link to="/app/Mentor/profile-mentee" className="booking-user-img">
                      <img src={USER_9} alt="User Image" />
                    </Link>
                    <div className="profile-det-info">
                      <h3><Link to="/app/Mentor/profile-mentee">Walter Roberson</Link></h3>
                      <div className="mentee-details">
                        <h5><i className="far fa-clock" /> 4 Nov 2019, 10.00 AM</h5>
                        <h5><i className="fas fa-map-marker-alt" /> Florida, United States</h5>
                        <h5><i className="fas fa-envelope" /> walterroberson@example.com</h5>
                        <h5 className="mb-0"><i className="fas fa-phone" /> +1 850 358 4445</h5>
                      </div>
                    </div>
                  </div>
                  <div className="appointment-action">
                    <a href="#" className="btn btn-sm bg-info-light" onClick={()=>this.setState({isviewmodal : true})} data-toggle="modal" data-target="#appt_details">
                      <i className="far fa-eye" /> View
                    </a>
                    <a href="" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check" /> Accept
                    </a>
                    <a href="" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times" /> Cancel
                    </a>
                  </div>
                </div>
                {/* /Appointment List */}
                {/* Appointment List */}
                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link to="/app/Mentor/profile-mentee" className="booking-user-img">
                      <img src={USER_10} alt="User Image" />
                    </Link>
                    <div className="profile-det-info">
                      <h3><Link to="/app/Mentor/profile-mentee">Robert Rhodes</Link></h3>
                      <div className="mentee-details">
                        <h5><i className="far fa-clock" /> 4 Nov 2019, 11.00 AM</h5>
                        <h5><i className="fas fa-map-marker-alt" /> California, United States</h5>
                        <h5><i className="fas fa-envelope" /> robertrhodes@example.com</h5>
                        <h5 className="mb-0"><i className="fas fa-phone" /> +1 858 259 5285</h5>
                      </div>
                    </div>
                  </div>
                  <div className="appointment-action">
                    <a href="#" className="btn btn-sm bg-info-light" onClick={()=>this.setState({isviewmodal : true})} data-toggle="modal" data-target="#appt_details">
                      <i className="far fa-eye" /> View
                    </a>
                    <a href="" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check" /> Accept
                    </a>
                    <a href="" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times" /> Cancel
                    </a>
                  </div>
                </div>
                {/* /Appointment List */}
                {/* Appointment List */}
                <div className="appointment-list">
                  <div className="profile-info-widget">
                    <Link to="/app/Mentor/profile-mentee" className="booking-user-img">
                      <img src={USER_11} alt="User Image" />
                    </Link>
                    <div className="profile-det-info">
                      <h3><Link to="/app/Mentor/profile-mentee">Harry Williams</Link></h3>
                      <div className="mentee-details">
                        <h5><i className="far fa-clock" /> 3 Nov 2019, 6.00 PM</h5>
                        <h5><i className="fas fa-map-marker-alt" /> Colorado, United States</h5>
                        <h5><i className="fas fa-envelope" /> harrywilliams@example.com</h5>
                        <h5 className="mb-0"><i className="fas fa-phone" /> +1 303 607 7075</h5>
                      </div>
                    </div>
                  </div>
                  <div className="appointment-action">
                    <a href="#" className="btn btn-sm bg-info-light" onClick={()=>this.setState({isviewmodal : true})} data-toggle="modal" data-target="#appt_details">
                      <i className="far fa-eye" /> View
                    </a>
                    <a href="" className="btn btn-sm bg-success-light">
                      <i className="fas fa-check" /> Accept
                    </a>
                    <a href="" className="btn btn-sm bg-danger-light">
                      <i className="fas fa-times" /> Cancel
                    </a>
                  </div>
                </div>
                {/* /Appointment List */}
              </div>
            </div>
          </div>
        </div>
      </div>		
      {/* /Page Content */}
      {/* Appointment Details Modal */}
        <Modal className="modal-dialog-centered" isOpen={this.state.isviewmodal} toggle={() => this.viewModalClose()}>
            <ModalHeader toggle={() => this.viewModalClose()}> Appointment Details
            </ModalHeader>
            <ModalBody>
            <ul className="info-details">
                <li>
                  <div className="details-header">
                    <div className="row">
                      <div className="col-md-6">
                        <span className="title">#APT0001</span>
                        <span className="text">21 Oct 2019 10:00 AM</span>
                      </div>
                      <div className="col-md-6">
                        <div className="text-right">
                          <button type="button" className="btn bg-success-light btn-sm" id="topup_status">Completed</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="title">Status:</span>
                  <span className="text">Completed</span>
                </li>
                <li>
                  <span className="title">Confirm Date:</span>
                  <span className="text">29 Jun 2019</span>
                </li>
                <li>
                  <span className="title">Paid Amount</span>
                  <span className="text">$450</span>
                </li>
              </ul>            
            </ModalBody>               
        </Modal>      
      {/* /Appointment Details Modal */}
        </div>
      );
   }
}

export default Appointments;