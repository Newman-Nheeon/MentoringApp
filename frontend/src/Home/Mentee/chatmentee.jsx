
import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
import {USER,USER_1,USER_2,USER_3,USER_4,USER_5,USER_6,USER_7,USER_8,USER_9,USER_14,IMG_02,IMG_03,IMG_04} from '../../constant/imagepath_home';
import { Modal, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';

class Chat extends Component {
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
        <div className="content">
        <div className="container-fluid">
          <div className="settings-back mb-3">
            <Link to="/app/Mentor/dashboard">
              <i className="fas fa-long-arrow-alt-left" /> <span>Settings</span>
            </Link>
          </div>
          <div className="row">
            <div className="col-sm-12 mb-4">
              <div className="chat-window">
                {/* Chat Left */}
                <div className="chat-cont-left">
                  <form className="chat-search d-flex align-items-center">
                    <div className="avatar avatar-online mr-3">
                      <img src={USER} alt="User Image" className="avatar-img rounded-circle" />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <i className="fas fa-search" />
                      </div>
                      <input type="text" className="form-control" placeholder="Search" />
                    </div>
                  </form>
                  <div className="chat-header">
                    <span>Chats</span>
                  </div>
                  <div className="chat-users-list">
                    <div className="chat-scroll">
                      <a href="" className="media">
                        <div className="media-img-wrap">
                          <div className="avatar avatar-away">
                            <img src={USER_14} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                        </div>
                        <div className="media-body">
                          <div>
                            <div className="user-name">Marvin Downey</div>
                            <div className="user-last-chat">Hey, How are you?</div>
                          </div>
                          <div>
                            <div className="last-chat-time block">2 min</div>
                            <div className="badge badge-success badge-pill fill-blue">15</div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="media read-chat">
                        <div className="media-img-wrap">
                          <div className="avatar avatar-online">
                            <img src={USER_1} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                        </div>
                        <div className="media-body">
                          <div>
                            <div className="user-name">Charlene Reed</div>
                            <div className="user-last-chat">I'll call you later </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">8:01 PM</div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="media">
                        <div className="media-img-wrap">
                          <div className="avatar avatar-away">
                            <img src={USER_2} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                        </div>
                        <div className="media-body">
                          <div>
                            <div className="user-name">Travis Trimble </div>
                            <div className="user-last-chat">Give me a full explanation about our project</div>
                          </div>
                          <div>
                            <div className="last-chat-time block">7:30 PM</div>
                            <div className="badge badge-success badge-pill fill-blue">3</div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="media read-chat">
                        <div className="media-img-wrap">
                          <div className="avatar avatar-online">
                            <img src={USER_3} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                        </div>
                        <div className="media-body">
                          <div>
                            <div className="user-name">Carl Kelly</div>
                            <div className="user-last-chat">That's very good UI design</div>
                          </div>
                          <div>
                            <div className="last-chat-time block">6:59 PM</div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="media read-chat">
                        <div className="media-img-wrap">
                          <div className="avatar avatar-offline">
                            <img src={USER_4} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                        </div>
                        <div className="media-body">
                          <div>
                            <div className="user-name">Michelle Fairfax</div>
                            <div className="user-last-chat">Yesterday i completed the task</div>
                          </div>
                          <div>
                            <div className="last-chat-time block">11:21 AM</div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="media read-chat">
                        <div className="media-img-wrap">
                          <div className="avatar avatar-online">
                            <img src={USER_5} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                        </div>
                        <div className="media-body">
                          <div>
                            <div className="user-name">Gina Moore</div>
                            <div className="user-last-chat">What is the major functionality?</div>
                          </div>
                          <div>
                            <div className="last-chat-time block">10:05 AM</div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="media read-chat">
                        <div className="media-img-wrap">
                          <div className="avatar avatar-away">
                            <img src={USER_6} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                        </div>
                        <div className="media-body">
                          <div>
                            <div className="user-name">Elsie Gilley</div>
                            <div className="user-last-chat">This has allowed me to showcase not only my technical skills</div>
                          </div>
                          <div>
                            <div className="last-chat-time block">Yesterday</div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="media read-chat">
                        <div className="media-img-wrap">
                          <div className="avatar avatar-offline">
                            <img src={USER_7} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                        </div>
                        <div className="media-body">
                          <div>
                            <div className="user-name">Joan Gardner</div>
                            <div className="user-last-chat">Let's talk briefly in the evening. </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">Sunday</div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="media read-chat">
                        <div className="media-img-wrap">
                          <div className="avatar avatar-online">
                            <img src={USER_8} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                        </div>
                        <div className="media-body">
                          <div>
                            <div className="user-name">Daniel Griffing</div>
                            <div className="user-last-chat">Do you have any collections? If so, what of?</div>
                          </div>
                          <div>
                            <div className="last-chat-time block">Saturday</div>
                          </div>
                        </div>
                      </a>
                      <a href="" className="media read-chat">
                        <div className="media-img-wrap">
                          <div className="avatar avatar-away">
                            <img src={USER_9} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                        </div>
                        <div className="media-body">
                          <div>
                            <div className="user-name">Walter Roberson</div>
                            <div className="user-last-chat">Connect the two modules with in 1 day.</div>
                          </div>
                          <div>
                            <div className="last-chat-time block">Friday</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* /Chat Left */}
                {/* Chat Right */}
                <div className="chat-cont-right">
                  <div className="chat-header">
                    <a id="back_user_list" href="" className="back-user-list">
                      <i className="material-icons">chevron_left</i>
                    </a>
                    <div className="media">
                      <div className="media-img-wrap">
                        <div className="avatar avatar-online">
                          <img src={USER} alt="User Image" className="avatar-img rounded-circle" />
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="user-name">Jonathan Doe</div>
                      </div>
                    </div>
                    <div className="chat-options">
                      <a href="" onClick={()=>this.setState({isvoicecallmodal : true})} data-toggle="modal" data-target="#voice_call">
                        <i className="material-icons">local_phone</i>
                      </a>
                      <a href="" onClick={()=>this.setState({isvideocallmodal : true})} data-toggle="modal" data-target="#video_call">
                        <i className="material-icons">videocam</i>
                      </a>
                      <a href="">
                        <i className="material-icons">more_vert</i>
                      </a>
                    </div>
                  </div>
                  <div className="chat-body">
                    <div className="chat-scroll">
                      <ul className="list-unstyled">
                        <li className="media sent">
                          <div className="media-body">
                            <div className="msg-box">
                              <div>
                                <p>Hello. What can I do for you?</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:30 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media received">
                          <div className="avatar">
                            <img src={USER} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                          <div className="media-body">
                            <div className="msg-box">
                              <div>
                                <p>I'm just looking around.</p>
                                <p>Will you tell me something about yourself?</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:35 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="msg-box">
                              <div>
                                <p>Are you there? That time!</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:40 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="msg-box">
                              <div>
                                <div className="chat-msg-attachments">
                                  <div className="chat-attachment">
                                    <img src={IMG_02} alt="Attachment" />
                                    <div className="chat-attach-caption">placeholder.jpg</div>
                                    <a href="" className="chat-attach-download">
                                      <i className="fas fa-download" />
                                    </a>
                                  </div>
                                  <div className="chat-attachment">
                                    <img src={IMG_03} alt="Attachment" />
                                    <div className="chat-attach-caption">placeholder.jpg</div>
                                    <a href="" className="chat-attach-download">
                                      <i className="fas fa-download" />
                                    </a>
                                  </div>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:41 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media sent">
                          <div className="media-body">
                            <div className="msg-box">
                              <div>
                                <p>Where?</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:42 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="msg-box">
                              <div>
                                <p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:42 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="msg-box">
                              <div>
                                <div className="chat-msg-attachments">
                                  <div className="chat-attachment">
                                    <img src={IMG_04} alt="Attachment" />
                                    <div className="chat-attach-caption">placeholder.jpg</div>
                                    <a href="" className="chat-attach-download">
                                      <i className="fas fa-download" />
                                    </a>
                                  </div>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:50 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media received">
                          <div className="avatar">
                            <img src={USER} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                          <div className="media-body">
                            <div className="msg-box">
                              <div>
                                <p>You wait for notice.</p>
                                <p>Consectetuorem ipsum dolor sit?</p>
                                <p>Ok?</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:55 PM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="chat-date">Today</li>
                        <li className="media received">
                          <div className="avatar">
                            <img src={USER} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                          <div className="media-body">
                            <div className="msg-box">
                              <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>10:17 AM</span>
                                    </div>
                                  </li>
                                  <li><a href="#">Edit</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media sent">
                          <div className="media-body">
                            <div className="msg-box">
                              <div>
                                <p>Lorem ipsum dollar sit</p>
                                <div className="chat-msg-actions dropdown">
                                  <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fe fe-elipsis-v" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Delete</a>
                                  </div>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>10:19 AM</span>
                                    </div>
                                  </li>
                                  <li><a href="#">Edit</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media received">
                          <div className="avatar">
                            <img src={USER} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                          <div className="media-body">
                            <div className="msg-box">
                              <div>
                                <div className="msg-typing">
                                  <span />
                                  <span />
                                  <span />
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="chat-footer">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="btn-file btn">
                          <i className="fa fa-paperclip" />
                          <input type="file" />
                        </div>
                      </div>
                      <input type="text" className="input-msg-send form-control" placeholder="Type something" />
                      <div className="input-group-append">
                        <button type="button" className="btn msg-send-btn">Send</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Chat Right */}
              </div>
            </div>
          </div>
          {/* /Row */}
        </div>
        {/* Voice Call Modal */}
        <Modal className="modal-dialog-centered" isOpen={this.state.isvoicecallmodal} toggle={() => this.voicecallmodalClose()}>
            <ModalBody>
            <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img alt="User Image" src={USER} className="call-avatar" />
                      <h4>Marvin Downey</h4>
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
        {/* Video Call Modal */}
        <Modal className="modal-dialog-centered" isOpen={this.state.isvideocallmodal} toggle={() => this.videocallModalClose()}>
            <ModalBody>
            <div className="call-box incoming-box">
                <div className="call-wrapper">
                    <div className="call-inner">
                        <div className="call-user">
                            <img className="call-avatar" src={USER} alt="User Image" />
                            <h4>Richard Wilson</h4>
                            <span>Calling ...</span>
                        </div>							
                        <div className="call-items">
                            <a href="" className="btn call-item call-end" data-dismiss="modal" aria-label="Close"><i className="material-icons">call_end</i></a>
                            <Link to="/app/Pages/video-call" className="btn call-item call-start"><i className="material-icons">videocam</i></Link>
                        </div>
                    </div>
                </div>
            </div>
            </ModalBody>               
        </Modal>
      </div>
      );
   }
}

export default Chat;
