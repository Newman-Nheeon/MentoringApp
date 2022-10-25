
import React, { Component } from 'react';
import {USER,USER_1,USER_2,USER_4,USER_5} from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
import { Link, withRouter } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props)
  }
   render() {
     const{history} = this.props;
      return ( 
        <div>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-8 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/index">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Search</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">2245 matches found for : Mentors In  Florida</h2>
              </div>
              <div className="col-md-4 col-12 d-md-block d-none">
                <div className="sort-by">
                  <span className="sort-title">Sort by</span>
                  <span className="sortby-fliter">
                    <select className="select form-control">
                      <option>Select</option>
                      <option className="sorting">Rating</option>
                      <option className="sorting">Popular</option>
                      <option className="sorting">Latest</option>
                      <option className="sorting">Free</option>
                    </select>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-xl-3">
                {/* Search Filter */}
                <StickyBox offsetTop={20} offsetBottom={20}>
                <div className="card search-filter">
                  <div className="card-header">
                    <h4 className="card-title mb-0">Search Filter</h4>
                  </div>
                  <div className="card-body">
                    <div className="filter-widget">
                      <div className="cal-icon">
                        <input type="text" className="form-control datetimepicker" placeholder="Select Date" />
                      </div>			
                    </div>
                    <div className="filter-widget">
                      <h4>Gender</h4>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" defaultChecked />
                          <span className="checkmark" /> Male
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Female
                        </label>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>Select Courses</h4>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" defaultChecked />
                          <span className="checkmark" /> Digital Marketer
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" defaultChecked />
                          <span className="checkmark" /> UNIX, Calculus, Trigonometry
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Computer Programming
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> ASP.NET,Computer Gaming
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> HTML, Css
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> VB, VB.net
                        </label>
                      </div>
                    </div>
                    <div className="btn-search">
                      <button type="button" className="btn btn-block">Search</button>
                    </div>	
                  </div>
                </div>
                </StickyBox>
                {/* /Search Filter */}
              </div>
              <div className="col-md-12 col-lg-8 col-xl-9">
                {/* Mentor Widget */}
                <div className="card">
                  <div className="card-body">
                    <div className="mentor-widget">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/mentor-profile">
                            <img src={USER} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/mentor-profile">Ruby Perrin</Link></h4>
                          <p className="mentor-type">Digital Marketer</p>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="d-inline-block average-rating">(17)</span>
                          </div>
                          <div className="mentor-details">
                            <p className="user-location"><i className="fas fa-map-marker-alt" /> Florida, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right">
                        <div className="user-infos">
                          <ul>
                            <li><i className="far fa-comment" /> 17 Feedback</li>
                            <li><i className="fas fa-map-marker-alt" /> Florida, USA</li>
                            <li><i className="far fa-money-bill-alt" /> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /> </li>
                          </ul>
                        </div>
                        <div className="mentor-booking">
                          <Link className="apt-btn" to="/app/Mentee/booking">Book Appointment</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentor Widget */}
                {/* Mentor Widget */}
                <div className="card">
                  <div className="card-body">
                    <div className="mentor-widget">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/mentor-profile">
                            <img src={USER_1} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/mentor-profile">Darren Elder</Link></h4>
                          <p className="mentor-type">Digital Marketer</p>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="d-inline-block average-rating">(35)</span>
                          </div>
                          <div className="mentor-details">
                            <p className="user-location"><i className="fas fa-map-marker-alt" /> Newyork, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right">
                        <div className="user-infos">
                          <ul>
                            <li><i className="far fa-comment" /> 35 Feedback</li>
                            <li><i className="fas fa-map-marker-alt" /> Newyork, USA</li>
                            <li><i className="far fa-money-bill-alt" /> $50 - $300 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /></li>
                          </ul>
                        </div>
                        <div className="mentor-booking">
                        <Link className="apt-btn" to="/app/Mentee/booking">Book Appointment</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentor Widget */}
                {/* Mentor Widget */}
                <div className="card">
                  <div className="card-body">
                    <div className="mentor-widget">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/mentor-profile">
                            <img src={USER_2} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/mentor-profile">Deborah Angel</Link></h4>
                          <p className="mentor-type">UNIX, Calculus, Trigonometry</p>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="d-inline-block average-rating">(27)</span>
                          </div>
                          <div className="mentor-details">
                            <p className="user-location"><i className="fas fa-map-marker-alt" /> Georgia, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right">
                        <div className="user-infos">
                          <ul>
                            <li><i className="far fa-comment" /> 35 Feedback</li>
                            <li><i className="fas fa-map-marker-alt" /> Newyork, USA</li>
                            <li><i className="far fa-money-bill-alt" /> $100 - $400 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /></li>
                          </ul>
                        </div>
                        <div className="mentor-booking">
                        <Link className="apt-btn" to="/app/Mentee/booking">Book Appointment</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentor Widget */}
                {/* Mentor Widget */}
                <div className="card">
                  <div className="card-body">
                    <div className="mentor-widget">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/mentor-profile">
                            <img src={USER_4} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/mentor-profile">Sofia Brient</Link></h4>
                          <p className="mentor-type">Computer Programmin</p>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="d-inline-block average-rating">(4)</span>
                          </div>
                          <div className="mentor-details">
                            <p className="user-location"><i className="fas fa-map-marker-alt" /> Louisiana, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right">
                        <div className="user-infos">
                          <ul>
                            <li><i className="far fa-comment" /> 4 Feedback</li>
                            <li><i className="fas fa-map-marker-alt" /> Newyork, USA</li>
                            <li><i className="far fa-money-bill-alt" /> $150 - $250 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /></li>
                          </ul>
                        </div>
                        <div className="mentor-booking">
                        <Link className="apt-btn" to="/app/Mentee/booking">Book Appointment</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentor Widget */}
                {/* Mentor Widget */}
                <div className="card">
                  <div className="card-body">
                    <div className="mentor-widget">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/mentor-profile">
                            <img src={USER_5} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/mentor-profile">Katharine Berthold</Link></h4>
                          <p className="mentor-type">ASP.NET, Computer Gaming</p>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="d-inline-block average-rating">(52)</span>
                          </div>
                          <div className="mentor-details">
                            <p className="user-location"><i className="fas fa-map-marker-alt" /> Texas, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right">
                        <div className="user-infos">
                          <ul>
                            <li><i className="far fa-comment" /> 52 Feedback</li>
                            <li><i className="fas fa-map-marker-alt" /> Texas, USA</li>
                            <li><i className="far fa-money-bill-alt" /> $100 - $500 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /></li>
                          </ul>
                        </div>
                        <div className="mentor-booking">
                        <Link className="apt-btn" to="/app/Mentee/booking">Book Appointment</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentor Widget */}
                <div className="load-more text-center">
                  <a className="btn btn-primary btn-sm" href="">Load More</a>	
                </div>	
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
      </div>
      );
   }
}

export default withRouter(Search);
