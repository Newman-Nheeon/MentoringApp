
import React, { Component } from 'react';
import {USER} from '../../constant/imagepath_home';
import { Modal, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';

class MentorProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            isvoicecallmodal : false ,
            isvideocallmodal : false
        }
    }
    
    voicecallmodalClose() {
      this.setState({ isvoicecallmodal: false })
    }
    videocallModalClose() {
     this.setState({ isvideocallmodal: false })
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
                    <li className="breadcrumb-item"><a href="/app/index">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Mentor Profile</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Mentor Profile</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                {/* Mentor Widget */}
                <div className="card">
                  <div className="card-body">
                    <div className="mentor-widget">
                      <div className="user-info-left align-items-center">
                        <div className="mentor-img d-flex flex-wrap justify-content-center">
                          <div className="pro-avatar">JD</div>
                          <div className="rating text-center">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="mentor-details m-0">
                            <p className="user-location m-0"><i className="fas fa-map-marker-alt" /> Tamil Nadu, India</p>
                          </div>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name">Jonathan Doe</h4>
                          <p className="mentor-type">English Literature (M.A)</p>
                          <div className="mentor-action">
                            <p className="mentor-type social-title">Contact Me</p>
                            <a href="" className="btn-blue">
                              <i className="fas fa-comments" />
                            </a>
                            <Link to="/app/Mentor/chat" className="btn-blue">
                              <i className="fas fa-envelope" />
                            </Link>
                            <a href="" className="btn-blue" onClick={()=>this.setState({isvoicecallmodal : true})} data-toggle="modal" data-target="#voice_call">
                              <i className="fas fa-phone-alt" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right d-flex align-items-end flex-wrap">
                        <div className="hireme-btn text-center">
                          <span className="hire-rate">$500 / Hour</span>
                          <Link className="blue-btn-radius" to="/app/Mentee/booking">Hire Me</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentor Widget */}
                {/* Mentor Details Tab */}
                <div className="card">
                  <div className="card-body custom-border-card pb-0">
                    {/* About Details */}
                    <div className="widget about-widget custom-about mb-0">
                      <h4 className="widget-title">About Me</h4>
                      <hr />
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                    {/* /About Details */}
                  </div>
                </div>
                <div className="card">
                  <div className="card-body custom-border-card pb-0">
                    {/* Personal Details */}
                    <div className="widget education-widget mb-0">
                      <h4 className="widget-title">Personal Details</h4>
                      <hr />
                      <div className="experience-box">
                        <ul className="experience-list profile-custom-list">
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Gender</span>
                                <div className="row-result">Male</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Date of Birth</span>
                                <div className="row-result">01 - 02 - 2000</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Where did you hear about us?</span>
                                <div className="row-result">Through web search</div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Personal Details */}
                  </div>
                </div>
                <div className="card">
                  <div className="card-body custom-border-card pb-0">
                    {/* Qualification Details */}
                    <div className="widget experience-widget mb-0">
                      <h4 className="widget-title">Qualification</h4>
                      <hr />
                      <div className="experience-box">
                        <ul className="experience-list profile-custom-list">
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Undergraduate College</span>
                                <div className="row-result">Coimbatore University</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Undergraduate Major</span>
                                <div className="row-result">Mathematics</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Graduate College</span>
                                <div className="row-result">Coimbatore University</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Type of Degree</span>
                                <div className="row-result">B.Sc (Maths)</div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Qualification Details */}
                  </div>
                </div>
                <div className="card">
                  <div className="card-body pb-1 custom-border-card">
                    {/* Location Details */}
                    <div className="widget awards-widget m-0">
                      <h4 className="widget-title">Location</h4>
                      <hr />
                      <div className="experience-box">
                        <ul className="experience-list profile-custom-list">
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Address 1</span>
                                <div className="row-result">No : 5 ABC Avenue</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Address 2</span>
                                <div className="row-result">National highway road</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Country</span>
                                <div className="row-result">India</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>City</span>
                                <div className="row-result">Coimbatore</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>State</span>
                                <div className="row-result">Tamil Nadu</div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <span>Postal Code</span>
                                <div className="row-result">641001</div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Location Details */}
                  </div>
                </div>
                {/* /Mentor Details Tab */}
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
        {/* Voice Call Modal */}
        <Modal className="modal-dialog-centered" isOpen={this.state.isvoicecallmodal} toggle={() => this.voicecallmodalClose()}>
            <ModalBody>
                <div className="call-box incoming-box">
                  <div className="call-wrapper">
                    <div className="call-inner">
                      <div className="call-user">
                        <img alt="User Image" src={USER} className="call-avatar" />
                        <h4>Jonathan Doe</h4>
                        <span>Connecting...</span>
                      </div>							
                      <div className="call-items">
                        <a href="" className="btn call-item call-end" data-dismiss="modal" aria-label="Close"><i className="material-icons">call_end</i></a>
                        <Link to="/app/Pages/voice-call" className="btn call-item call-start"><i className="material-icons">call</i></Link>
                      </div>
                    </div>
                  </div>
                </div>
            </ModalBody>               
        </Modal>
        {/* /Voice Call Modal */}
        {/* Video Call Modal */}
        <div className="modal fade call-modal" id="video_call">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                {/* Incoming Call */}
                <div className="call-box incoming-box">
                  <div className="call-wrapper">
                    <div className="call-inner">
                      <div className="call-user">
                        <img className="call-avatar" src={USER} alt="User Image" />
                        <h4>Dr. Darren Elder</h4>
                        <span>Calling ...</span>
                      </div>							
                      <div className="call-items">
                        <a href="" className="btn call-item call-end" data-dismiss="modal" aria-label="Close"><i className="material-icons">call_end</i></a>
                        <Link to="/app/Pages/video-call" className="btn call-item call-start"><i className="material-icons">videocam</i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Incoming Call */}
              </div>
            </div>
          </div>
        </div>
        {/* Video Call Modal */}
      </div>
      
      );
   }
}

export default MentorProfile;
