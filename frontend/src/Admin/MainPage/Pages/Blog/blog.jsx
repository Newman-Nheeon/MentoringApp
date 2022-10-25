
import React, { Component } from 'react';
import {BLOG_01,BLOG_02,BLOG_03} from '../../../imagepath'
import { Link } from 'react-router-dom';

class Blog extends Component {
   render() {
      return ( 
        <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Blog</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/admin/index">Dashboard</Link></li>
                  <li className="breadcrumb-item active">Blog</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  {/* Blog list */}
                  <div className="row">
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="course-box blog grid-blog">
                        <div className="blog-image mb-0">
                          <Link to="/admin/blog-details"><img className="img-fluid" src={BLOG_01} alt="Post Image" /></Link>
                        </div>
                        <div className="course-content">
                          <span className="date">April 09 2020</span>
                          <span className="course-title">Abacus Study for beginner - Part I</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          <div className="row">
                            <div className="col">
                              <Link to="/admin/edit-blog" className="text-success">
                                <i className="far fa-edit" /> Edit
                              </Link>
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
                          <Link to="/admin/blog-details"><img className="img-fluid" src={BLOG_02} alt="Post Image" /></Link>
                        </div>
                        <div className="course-content">
                          <span className="date">April 09 2020</span>
                          <span className="course-title">Abacus Study for beginner - Part II</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          <div className="row">
                            <div className="col">
                              <Link to="/admin/edit-blog" className="text-success">
                                <i className="far fa-edit" /> Edit
                              </Link>
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
                          <Link to="/admin/blog-details"><img className="img-fluid" src={BLOG_03} alt="Post Image" /></Link>
                        </div>
                        <div className="course-content">
                          <span className="date">April 09 2020</span>
                          <span className="course-title">Abacus Study for beginner - Part III</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          <div className="row">
                            <div className="col">
                              <Link to="/admin/edit-blog" className="text-success">
                                <i className="far fa-edit" /> Edit
                              </Link>
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
                  {/* /Blog list */}
                </div>
              </div>
            </div>			
          </div>
        </div>			
      </div>
      );
   }
}

export default Blog;
