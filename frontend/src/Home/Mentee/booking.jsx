
import React, { Component } from 'react';
import {USER_2} from '../../constant/imagepath_home';
import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';
import { Link } from 'react-router-dom';

class Booking extends Component {
  onChange = (date) => {
    // Day.js object
    console.log(date);
 
    // to normal Date object
    console.log(date.toDate());
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
                    <li className="breadcrumb-item active" aria-current="page">Booking</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Booking</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="booking-user-info">
                      <Link to="/app/Mentee/mentor-profile" className="booking-user-img">
                        <img src={USER_2} alt="User Image" />
                      </Link>
                      <div className="booking-info">
                        <h4><Link to="/app/Mentee/mentor-profile">Tyrone Roberts</Link></h4>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">35</span>
                        </div>
                        <p className="text-muted mb-0"><i className="fas fa-map-marker-alt" /> Newyork, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-6">
                    <h4 className="mb-1">11 November 2019</h4>
                    <p className="text-muted">Monday</p>
                  </div>
                  <div className="col-12 col-sm-8 col-md-6 text-sm-right">
                    <div className="bookingrange btn btn-white btn-sm mb-3">
                      <i className="far fa-calendar-alt mr-2" />
                      <DateRangePicker
										initialSettings={{
											endDate: new Date('2020-08-11T12:30:00.000Z'),
											ranges: {
												'Last 30 Days': [
												new Date('2020-07-12T04:57:17.076Z'),
												new Date('2020-08-10T04:57:17.076Z')
												],
												'Last 7 Days': [
												new Date('2020-08-04T04:57:17.076Z'),
												new Date('2020-08-10T04:57:17.076Z')
												],
												'Last Month': [
												new Date('2020-06-30T18:30:00.000Z'),
												new Date('2020-07-31T18:29:59.999Z')
												],
												'This Month': [
												new Date('2020-07-31T18:30:00.000Z'),
												new Date('2020-08-31T18:29:59.999Z')
												],
												Today: [
												new Date('2020-08-10T04:57:17.076Z'),
												new Date('2020-08-10T04:57:17.076Z')
												],
												Yesterday: [
												new Date('2020-08-09T04:57:17.076Z'),
												new Date('2020-08-09T04:57:17.076Z')
												]
											},										
											startDate: new Date('2020-08-10T04:30:00.000Z'),
											timePicker: false
										}}
										>
											<input type="text" style={{borderColor : "transparent"}}	/>
									</DateRangePicker>									
                      <i className="fas fa-chevron-down ml-2" />
                    </div>
                  </div>
                </div>
                {/* Schedule Widget */}
                <div className="card booking-schedule schedule-widget">
                  {/* Schedule Header */}
                  <div className="schedule-header">
                    <div className="row">
                      <div className="col-md-12">
                        {/* Day Slot */}
                        <div className="day-slot">
                          <ul>
                            <li className="left-arrow">
                              <a href="">
                                <i className="fa fa-chevron-left" />
                              </a>
                            </li>
                            <li>
                              <span>Mon</span>
                              <span className="slot-date">11 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li>
                              <span>Tue</span>
                              <span className="slot-date">12 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li>
                              <span>Wed</span>
                              <span className="slot-date">13 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li>
                              <span>Thu</span>
                              <span className="slot-date">14 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li>
                              <span>Fri</span>
                              <span className="slot-date">15 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li>
                              <span>Sat</span>
                              <span className="slot-date">16 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li>
                              <span>Sun</span>
                              <span className="slot-date">17 Nov <small className="slot-year">2019</small></span>
                            </li>
                            <li className="right-arrow">
                              <a href="">
                                <i className="fa fa-chevron-right" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* /Day Slot */}
                      </div>
                    </div>
                  </div>
                  {/* /Schedule Header */}
                  {/* Schedule Content */}
                  <div className="schedule-cont">
                    <div className="row">
                      <div className="col-md-12">
                        {/* Time Slot */}
                        <div className="time-slot">
                          <ul className="clearfix">
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing selected" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                            <li>
                              <a className="timing" href="#">
                                <span>9:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>10:00</span> <span>AM</span>
                              </a>
                              <a className="timing" href="#">
                                <span>11:00</span> <span>AM</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* /Time Slot */}
                      </div>
                    </div>
                  </div>
                  {/* /Schedule Content */}
                </div>
                {/* /Schedule Widget */}
                {/* Submit Section */}
                <div className="submit-section proceed-btn text-right">
                  <Link to="/app/Mentee/checkout" className="btn btn-primary submit-btn">Proceed to Pay</Link>
                </div>
                {/* /Submit Section */}
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
      </div>
      );
   }
}

export default Booking;
