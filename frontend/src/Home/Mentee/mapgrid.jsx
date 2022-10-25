
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Helmet } from "react-helmet";

import {USER,USER_1,USER_2,USER_3,USER_4,USER_5,USER_6,USER_7,USER_8,USER_9,USER_10,USER_11,USER_15} from '../../constant/imagepath_home';
import Map from "../Map-concept/Map";

const data = [{
  id:1,
	doc_name:"Ruby Perrin",
	"speciality":"Digital Marketer",
	"address":"Florida, USA",
	"next_available":"Available on Fri, 22 Mar",
	"amount":"$300 - $1000",
	lat:-33.847927,
	lng:150.6517938,
	"icons":"default",
	"profile_link":"/template/app/Mentee/mentor-profile",
	"total_review":"17",
	"image":USER
  },
   {
		
	id:2,
	doc_name:"Darren Elder",
	"speciality":"Digital Marketer",
	"address":"Newyork, USA",
	"next_available":"Available on Fri, 23 Mar",
	"amount":"$50 - $300",
	lat:-37.9722342,
	lng:144.7729561,
	"icons":"default",
	"profile_link":"/template/app/Mentee/mentor-profile",
	"total_review":"35",
	"image":USER_1
	}, {
	id:3,
	doc_name:"Deborah Angel",
	"speciality":"UNIX, Calculus, Trigonometry",
	"address":"Georgia, USA",
	"next_available":"Available on Fri, 24 Mar",
	"amount":"$100 - $400",
	lat:-31.9546904,
	lng:112.8350292,
	"icons":"default",
	"profile_link":"/template/app/Mentee/mentor-profile",
	"total_review":"27",
	"image":USER_2
	}, {
	id:4,
	doc_name:"Sofia Brient",
	"speciality":"Computer Programming",
	"address":"Louisiana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$150 - $250",
	lat:-32.9546904,
	lng:115.8350292,
	"icons":"default",
	"profile_link":"/template/app/Mentee/mentor-profile",
	"total_review":"4",
	"image":USER_3
	}, {
	id:5,
	doc_name:"Marvin Campbell",
	"speciality":"ASP.NET,Computer Gaming",
	"address":"Michigan, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$50 - $700",
	lat:-34.9546904,
	lng:125.8650292,
	"icons":"default",
	"profile_link":"/template/app/Mentee/mentor-profile",
	"total_review":"66",
	"image":USER_4
	}, {
	id:6,
	doc_name:"Katharine Berthold",
	"speciality":"Digital Marketer",
	"address":"Texas, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $500",
	lat:-35.9546904,
	lng:153.8350292,
	"icons":"default",
	"profile_link":"/template/app/Mentee/mentor-profile",
	"total_review":"52",
	"image":USER_5
	}, {
	id:7,
	doc_name:"Linda Tobin",
	"speciality":"UNIX, Calculus, Trigonometry",
	"address":"Kansas, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $1000",
	lat:-36.9548904,
	lng:105.8350292,
	"icons":"default",
	"profile_link":"/template/app/Mentee/mentor-profile",
	"total_review":"43",
	"image":USER_6
	}, {
	id:8,
	doc_name:"Paul Richard",
	"speciality":"Computer Programming",
	"address":"California, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $400",
	lat:-38.9556904,
	lng:110.8350292,
	"icons":"default",
	"profile_link":"/template/app/Mentee/mentor-profile",
	"total_review":"49",
	"image":USER_7
	}, {
	id:9,
	doc_name:"John Gibbs",
	"speciality":"ASP.NET,Computer Gaming",
	"address":"Oklahoma, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$500 - $2500",
	lat:-33.2191198,
	lng:120.8350292,
	"icons":"default",
	"profile_link":"/template/app/Mentee/mentor-profile",
	"total_review":"112",
	"image":USER_8
	}, {
	id:10,
	doc_name:"Olga Barlow",
	"speciality":"Periodontology and Oral",
	"address":"Montana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$75 - $250",
	lat:-37.1382198,
	lng:115.9359404,
	"icons":"default",
	"profile_link":"/template/app/Mentee/mentor-profile",
	"total_review":"65",
	"image":USER_9
	}, {
	id:11,
	doc_name:"Julia Washington",
	"speciality":"Endocrinology",
	"address":"Oklahoma, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$275 - $450",
	lat:-31.1546904,
	lng:145.8350292,
	"icons":"default",
	"profile_link":"/template/app/Mentee/mentor-profile",
	"total_review":"5",
	"image":USER_10
	}, {
	id:12,
	doc_name:"Shaun Aponte",
	"speciality":"Diploma in (DLO)",
	"address":"Indiana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$150 - $350",
	lat:-35.1586194,
	lng:155.8350292,
	"icons":"default",
	"profile_link":"/template/app/Mentee/mentor-profile",
	"total_review":"5",
	"image":USER_11
	}
];

class MapGrid extends Component {
  
   render() {
      return ( 
        <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-12 order-md-last order-sm-last order-last map-left">
              <div className="row align-items-center mb-4">
                <div className="col-md-6 col">
                  <h4>2245 Mentees found</h4>
                </div>
                <div className="col-md-6 col-auto">
                  <div className="view-icons ">
                    <Link to="/app/Mentee/map-grid" className="grid-view active"><i className="fas fa-th-large" /></Link>
                    <Link to="/app/Mentee/map-list" className="list-view"><i className="fas fa-bars" /></Link>
                  </div>
                  <div className="sort-by d-sm-block d-none">
                    <span className="sortby-fliter">
                      <select className="select" style={{padding:"10px",borderRadius:"4px"}}>
                        <option>Sort by</option>
                        <option className="sorting">Rating</option>
                        <option className="sorting">Popular</option>
                        <option className="sorting">Latest</option>
                        <option className="sorting">Free</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-4 col-xl-6">
                  <div className="profile-widget">
                    <div className="user-avatar">
                      <Link to="/app/Mentee/mentor-profile">
                        <img className="img-fluid" alt="User Image" src={USER} />
                      </Link>
                      <a href="" className="fav-btn">
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
                <div className="col-sm-6 col-md-4 col-xl-6">
                  <div className="profile-widget">
                    <div className="user-avatar">
                      <Link to="/app/Mentee/mentor-profile">
                        <img className="img-fluid" alt="User Image" src={USER_1} />
                      </Link>
                      <a href="" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/app/Mentee/mentor-profile">Darren Elder</Link> 
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">Digital Marketer</p>
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
                <div className="col-sm-6 col-md-4 col-xl-6">
                  <div className="profile-widget">
                    <div className="user-avatar">
                      <Link to="/app/Mentee/mentor-profile">
                        <img className="img-fluid" alt="User Image" src={USER_2} />
                      </Link>
                      <a href="" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/app/Mentee/mentor-profile">Deborah Angel</Link> 
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">UNIX, Calculus, Trigonometry</p>
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
                <div className="col-sm-6 col-md-4 col-xl-6">
                  <div className="profile-widget">
                    <div className="user-avatar">
                      <Link to="/app/Mentee/mentor-profile">
                        <img className="img-fluid" alt="User Image" src={USER_4} />
                      </Link>
                      <a href="" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/app/Mentee/mentor-profile">Sofia Brient</Link> 
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">Computer Programming</p>
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
                <div className="col-sm-6 col-md-4 col-xl-6">
                  <div className="profile-widget">
                    <div className="user-avatar">
                      <Link to="/app/Mentee/mentor-profile">
                        <img className="img-fluid" alt="User Image" src={USER_5} />
                      </Link>
                      <a href="" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/app/Mentee/mentor-profile">Marvin Campbell</Link> 
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">ASP.NET,Computer Gaming</p>
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
                <div className="col-sm-6 col-md-4 col-xl-6">
                  <div className="profile-widget">
                    <div className="user-avatar">
                      <Link to="/app/Mentee/mentor-profile">
                        <img className="img-fluid" alt="User Image" src={USER_6} />
                      </Link>
                      <a href="" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/app/Mentee/mentor-profile">Katharine Berthold</Link> 
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">UNIX,Calculus,Trigonometry</p>
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
                <div className="col-sm-6 col-md-4 col-xl-6">
                  <div className="profile-widget">
                    <div className="user-avatar">
                      <Link to="/app/Mentee/mentor-profile">
                        <img className="img-fluid" alt="User Image" src={USER_7} />
                      </Link>
                      <a href="" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/app/Mentee/mentor-profile">Linda Tobin</Link> 
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">DM - Neurology</p>
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
                <div className="col-sm-6 col-md-4 col-xl-6">
                  <div className="profile-widget">
                    <div className="user-avatar">
                      <Link to="/app/Mentee/mentor-profile">
                        <img className="img-fluid" alt="User Image" src={USER_8} />
                      </Link>
                      <a href="" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/app/Mentee/mentor-profile">Paul Richard</Link> 
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">Venereology &amp; Lepros</p>
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
                <div className="col-sm-6 col-md-4 col-xl-6">
                  <div className="profile-widget">
                    <div className="user-avatar">
                      <Link to="/app/Mentee/mentor-profile">
                        <img className="img-fluid" alt="User Image" src={USER_15} />
                      </Link>
                      <a href="" className="fav-btn">
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
                <div className="col-sm-6 col-md-4 col-xl-6">
                  <div className="profile-widget">
                    <div className="user-avatar">
                      <Link to="/app/Mentee/mentor-profile">
                        <img className="img-fluid" alt="User Image" src={USER_9} />
                      </Link>
                      <a href="" className="fav-btn">
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
                <div className="col-sm-6 col-md-4 col-xl-6">
                  <div className="profile-widget">
                    <div className="user-avatar">
                      <Link to="/app/Mentee/mentor-profile">
                        <img className="img-fluid" alt="User Image" src={USER_10} />
                      </Link>
                      <a href="" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/app/Mentee/mentor-profile">Julia Washington</Link> 
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">DM - Endocrinology</p>
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
                <div className="col-sm-6 col-md-4 col-xl-6">
                  <div className="profile-widget">
                    <div className="user-avatar">
                      <Link to="/app/Mentee/mentor-profile">
                        <img className="img-fluid" alt="User Image" src={USER_11} />
                      </Link>
                      <a href="" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/app/Mentee/mentor-profile">Shaun Aponte</Link> 
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">UNIX,Calculus,Trigonometry</p>
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
              <div className="load-more text-center">
                <a className="btn btn-primary btn-sm" href="">Load More</a>	
              </div>
            </div>
            {/* /content-left*/}
            <div className="col-xl-6 col-lg-12 map-right">
              <div className="map-listing" style={{position:"relative",overflow:"hidden"}}>
                <Map places={data} center={{ lat: -24.9923319, lng: 135.2252427 }} />
              </div>                
            </div>
            {/* /map-right*/}
          </div>
          {/* /row*/}
        </div>
      </div>
      );
   }
}

export default MapGrid;
