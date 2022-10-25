
import React, { Component } from 'react';
// import { Helmet } from "react-helmet";

import {USER ,USER_1,USER_2,USER_3,USER_4,USER_5,USER_6,USER_7,USER_8,USER_9,USER_10,USER_11} from '../../constant/imagepath_home';
import Sidebar from "./sidebar"
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';

class Favorites extends Component {
   render() {
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
                    <li className="breadcrumb-item active" aria-current="page">Favourites</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Favourites</h2>
              </div>
              <div className="col-md-4 col-12">
                <form className="search-form custom-search-form">
                  <div className="input-group">
                    <input type="text" placeholder="Search Favourites..." className="form-control" />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-primary"><i className="fa fa-search" /></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Sidebar */}
                <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar/></StickyBox>
                 {/* /Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row row-grid">
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="user-avatar">
                        <Link to="/app/Mentee/mentor-profile">
                          <img className="img-fluid" alt="User Image" src={USER} />
                        </Link>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/app/Mentee/mentor-profile">Ruby Perrin</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Digital Marketer</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span className="d-inline-block average-rating">(17)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Florida, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/app/Mentee/mentor-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/app/Mentee/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="user-avatar">
                        <Link to="/app/Mentee/mentor-profile">
                          <img className="img-fluid" alt="User Image" src={USER_1} />
                        </Link>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/app/Mentee/mentor-profile">Darren Elder</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">UNIX, Calculus, Trigonometry</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(35)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Newyork, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $50 - $300 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/app/Mentee/mentor-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/app/Mentee/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="user-avatar">
                        <Link to="/app/Mentee/mentor-profile">
                          <img className="img-fluid" alt="User Image" src={USER_2} />
                        </Link>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/app/Mentee/mentor-profile">Deborah Angel</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Computer Programming</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(27)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Georgia, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $400 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/app/Mentee/mentor-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/app/Mentee/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="user-avatar">
                        <Link to="/app/Mentee/mentor-profile">
                          <img className="img-fluid" alt="User Image" src={USER_3} />
                        </Link>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/app/Mentee/mentor-profile">Sofia Brient</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">ASP.NET,Computer Gaming</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(4)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Louisiana, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $150 - $250 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/app/Mentee/mentor-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/app/Mentee/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="user-avatar">
                        <Link to="/app/Mentee/mentor-profile">
                          <img className="img-fluid" alt="User Image" src={USER_4} />
                        </Link>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/app/Mentee/mentor-profile">Marvin Campbell</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Digital Marketer</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(66)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Michigan, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $50 - $700 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/app/Mentee/mentor-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/app/Mentee/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="user-avatar">
                        <Link to="/app/Mentee/mentor-profile">
                          <img className="img-fluid" alt="User Image" src={USER_5} />
                        </Link>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/app/Mentee/mentor-profile">Katharine Berthold</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">UNIX, Calculus, Trigonometry</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(52)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Texas, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $500 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/app/Mentee/mentor-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/app/Mentee/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="user-avatar">
                        <Link to="/app/Mentee/mentor-profile">
                          <img className="img-fluid" alt="User Image" src={USER_6} />
                        </Link>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/app/Mentee/mentor-profile">Linda Tobin</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">General Course</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(43)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Kansas, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $1000 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/app/Mentee/mentor-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/app/Mentee/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="user-avatar">
                        <Link to="/app/Mentee/mentor-profile">
                          <img className="img-fluid" alt="User Image" src={USER_7} />
                        </Link>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/app/Mentee/mentor-profile">Paul Richard</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">ASP.NET,Computer Gaming</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(49)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> California, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $400 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/app/Mentee/mentor-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/app/Mentee/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="user-avatar">
                        <Link to="/app/Mentee/mentor-profile">
                          <img className="img-fluid" alt="User Image" src={USER_8} />
                        </Link>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/app/Mentee/mentor-profile">John Gibbs</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Digital Marketer</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(112)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Oklahoma, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $500 - $2500 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/app/Mentee/mentor-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/app/Mentee/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="user-avatar">
                        <Link to="/app/Mentee/mentor-profile">
                          <img className="img-fluid" alt="User Image" src={USER_9} />
                        </Link>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/app/Mentee/mentor-profile">Olga Barlow</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Digital Marketer</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(65)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Montana, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $75 - $250 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/app/Mentee/mentor-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/app/Mentee/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="user-avatar">
                        <Link to="/app/Mentee/mentor-profile">
                          <img className="img-fluid" alt="User Image" src={USER_10} />
                        </Link>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/app/Mentee/mentor-profile">Julia Washington</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">UNIX, Calculus, Trigonometry</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(5)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Oklahoma, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $275 - $450 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/app/Mentee/mentor-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/app/Mentee/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="user-avatar">
                        <Link to="/app/Mentee/mentor-profile">
                          <img className="img-fluid" alt="User Image" src={USER_11} />
                        </Link>
                        <a href="javascript:void(0)" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/app/Mentee/mentor-profile">Shaun Aponte</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Diploma in (DLO)</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(5)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Indiana, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $150 - $350 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/app/Mentee/mentor-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/app/Mentee/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-pagination mt-4">
                  <nav>
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-double-left" /></a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">1</a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">3</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#"><i className="fas fa-angle-double-right" /></a>
                      </li>
                    </ul>
                  </nav>
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

export default Favorites;
