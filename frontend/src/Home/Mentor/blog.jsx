
import React, { Component } from 'react';
// import { Helmet } from "react-helmet";

import {BLOG_01,BLOG_02,BLOG_03,BLOG_04,BLOG_05,BLOG_06,BLOG_07,BLOG_08,BLOG_09} from '../../constant/imagepath_home';
import Sidebar from "./sidebar"
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';

class Blog extends Component {
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
                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Blog</h2>
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
                <Sidebar/>
                </StickyBox>
                {/* /Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-12">
                    {/* Tab Menu */}
                    <nav className="user-tabs">
                      <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                        <li>
                          <a className="nav-link active" href="#activeservice" data-toggle="tab">Active Blog</a>
                        </li>
                        <li>
                          <a className="nav-link" href="#inactiveservice" data-toggle="tab">Inactive Blog</a>
                        </li>
                      </ul>
                    </nav>
                    {/* /Tab Menu */}
                    {/* Tab Content */}
                    <div className="tab-content">
                      {/* Active Content */}
                      <div role="tabpanel" id="activeservice" className="tab-pane fade show active">
                        <div className="row">
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_01} alt="Post Image" /></Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">Abacus Study for beginner - Part I</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className="row">
                                  <div className="col">
                                    <Link to="/app/Mentor/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</Link>
                                  </div>
                                  <div className="col text-right">
                                    <a href="" className="text-danger">
                                      <i className="far fa-trash-alt" /> Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_02} alt="Post Image" /></Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">Abacus Study for beginner - Part II</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className="row">
                                  <div className="col">
                                    <Link to="/app/Mentor/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</Link>
                                  </div>
                                  <div className="col text-right">
                                    <a href="" className="text-danger">
                                      <i className="far fa-trash-alt" /> Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_03} alt="Post Image" /></Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">Abacus Study for beginner - Part III</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className="row">
                                  <div className="col">
                                    <Link to="/app/Mentor/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</Link>
                                  </div>
                                  <div className="col text-right">
                                    <a href="" className="text-danger">
                                      <i className="far fa-trash-alt" /> Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_04} alt="Post Image" /></Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">Abacus Study for beginner - Part I</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className="row">
                                  <div className="col">
                                    <Link to="/app/Mentor/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</Link>
                                  </div>
                                  <div className="col text-right">
                                    <a href="" className="text-danger">
                                      <i className="far fa-trash-alt" /> Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_05} alt="Post Image" /></Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">Abacus Study for beginner - Part II</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className="row">
                                  <div className="col">
                                    <Link to="/app/Mentor/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</Link>
                                  </div>
                                  <div className="col text-right">
                                    <a href="" className="text-danger">
                                      <i className="far fa-trash-alt" /> Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_06} alt="Post Image" /></Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">Abacus Study for beginner - Part III</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className="row">
                                  <div className="col">
                                    <Link to="/app/Mentor/edit-blog" className="text-success"><i className="far fa-edit" /> Edit</Link>
                                  </div>
                                  <div className="col text-right">
                                    <a href="" className="text-danger">
                                      <i className="far fa-trash-alt" /> Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Active Content */}
                      {/* Inactive Content */}
                      <div role="tabpanel" id="inactiveservice" className="tab-pane fade">
                        <div className="row">
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_04} alt="Post Image" /></Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">Abacus Study for beginner - Part III</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className="row">
                                  <div className="col">
                                    <Link to="/app/Mentor/edit-blog" className="text-success">
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-right">
                                    <a href="" className="text-success">
                                      <i className="fas fa-toggle-on" /> Active
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_05} alt="Post Image" /></Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">Abacus Study for beginner - Part III</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className="row">
                                  <div className="col">
                                    <Link to="/app/Mentor/edit-blog" className="text-success">
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-right">
                                    <a href="" className="text-success">
                                      <i className="fas fa-toggle-on" /> Active
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_06} alt="Post Image" /></Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">Abacus Study for beginner - Part III</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className="row">
                                  <div className="col">
                                    <Link to="/app/Mentor/edit-blog" className="text-success">
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-right">
                                    <a href="" className="text-success">
                                      <i className="fas fa-toggle-on" /> Active
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_07} alt="Post Image" /></Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">Abacus Study for beginner - Part III</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className="row">
                                  <div className="col">
                                    <Link to="/app/Mentor/edit-blog" className="text-success">
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-right">
                                    <a href="" className="text-success">
                                      <i className="fas fa-toggle-on" /> Active
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_08} alt="Post Image" /></Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">Abacus Study for beginner - Part III</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className="row">
                                  <div className="col">
                                    <Link to="/app/Mentor/edit-blog" className="text-success">
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-right">
                                    <a href="" className="text-success">
                                      <i className="fas fa-toggle-on" /> Active
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_09} alt="Post Image" /></Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">Abacus Study for beginner - Part III</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className="row">
                                  <div className="col">
                                    <Link to="/app/Mentor/edit-blog" className="text-success">
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-right">
                                    <a href="" className="text-success">
                                      <i className="fas fa-toggle-on" /> Active
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Inactive Content */}
                    </div>
                    {/* /Tab Content */}
                  </div>
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

export default Blog;
