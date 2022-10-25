
import React, { Component } from 'react';
import {BLOG_01,BLOG_02,USER,USER_1,USER_2,USER_3,BLOG_THUMB_01,BLOG_THUMB_02,
    BLOG_THUMB_03,BLOG_THUMB_04,BLOG_THUMB_05} from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';

class BlogList extends Component {
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
                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Blog List</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                {/* Blog Post */}
                <div className="blog">
                  <div className="blog-image">
                    <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_01} alt="Post Image" /></Link>
                  </div>
                  <h3 className="blog-title"><Link to="/app/Blog/blog-details">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</Link></h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/app/Mentee/mentor-profile"><img src={USER} alt="Post Author" /> <span>Ruby Perrin</span></Link>
                          </div>
                        </li>
                        <li><i className="far fa-clock" />4 Dec 2019</li>
                        <li><i className="far fa-comments" />12 Comments</li>
                        <li><i className="fa fa-tags" />HTML</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to="/app/Blog/blog-details" className="read-more">Read More</Link>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Post */}
                <div className="blog">
                  <div className="blog-image">
                    <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_02} alt="" /></Link>
                  </div>
                  <h3 className="blog-title"><Link to="/app/Blog/blog-details">1914 translation by H. Rackham</Link></h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/app/Mentee/mentor-profile"><img src={USER_1} alt="Post Author" /> <span>Darren Elder</span></Link>
                          </div>
                        </li>
                        <li><i className="far fa-clock" />3 Dec 2019</li>
                        <li><i className="far fa-comments" />7 Comments</li>
                        <li><i className="fa fa-tags" />Java Script</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to="/app/Blog/blog-details" className="read-more">Read More</Link>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Post */}
                <div className="blog">
                  <div className="blog-image">
                    <div className="video">
                      <iframe width={940} src="https://www.youtube.com/embed/ZMty6R0Bn0I" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                  </div>
                  <h3 className="blog-title"><Link to="/app/Blog/blog-details">The standard Lorem Ipsum passage, used since the</Link></h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/app/Mentee/mentor-profile"><img src={USER_2} alt="Post Author" /> <span>Deborah Angel</span></Link>
                          </div>
                        </li>
                        <li><i className="far fa-clock" />3 Dec 2019</li>
                        <li><i className="far fa-comments" />2 Comments</li>
                        <li><i className="fa fa-tags" />C++</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to="/app/Blog/blog-details" className="read-more">Read More</Link>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Post */}
                <div className="blog">
                  <div className="blog-image">
                    <div className="video">
                      <iframe width={940} src="https://www.youtube.com/embed/svmGQhQLuBQ" 
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen />
                    </div>
                  </div>
                  <h3 className="blog-title"><Link to="/app/Blog/blog-details">Section 1.10.32 of "de Finibus Bonorum et Malorum</Link></h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/app/Mentee/mentor-profile"><img src={USER_3} alt="Post Author" /> <span>Sofia Brient</span></Link>
                          </div>
                        </li>
                        <li><i className="far fa-clock" />2 Dec 2019</li>
                        <li><i className="far fa-comments" />41 Comments</li>
                        <li><i className="fa fa-tags" />Css</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to="/app/Blog/blog-details" className="read-more">Read More</Link>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Pagination */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="blog-pagination">
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
                {/* /Blog Pagination */}
              </div>
              {/* Blog Sidebar */}
              <div className="col-lg-4 col-md-12 sidebar-right">
                {/* Search */}
                <StickyBox offsetTop={20} offsetBottom={20}>
                    <div>
                <div className="card search-widget">
                  <div className="card-body">
                    <form className="search-form">
                      <div className="input-group">
                        <input type="text" placeholder="Search..." className="form-control" />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-primary"><i className="fa fa-search" /></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* /Search */}
                {/* Latest Posts */}
                <div className="card post-widget">
                  <div className="card-header">
                    <h4 className="card-title">Latest Posts</h4>
                  </div>
                  <div className="card-body">
                    <ul className="latest-posts">
                      <li>
                        <div className="post-thumb">
                          <Link to="/app/Blog/blog-details">
                            <img className="img-fluid" src={BLOG_THUMB_01} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/app/Blog/blog-details">Lorem Ipsum is simply dummy text of the printing</Link>
                          </h4>
                          <p>4 Dec 2019</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/app/Blog/blog-details">
                            <img className="img-fluid" src={BLOG_THUMB_02} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/app/Blog/blog-details">It is a long established fact that a reader will be</Link>
                          </h4>
                          <p>3 Dec 2019</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/app/Blog/blog-details">
                            <img className="img-fluid" src={BLOG_THUMB_03} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/app/Blog/blog-details">here are many variations of passages of Lorem Ipsum</Link>
                          </h4>
                          <p>3 Dec 2019</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/app/Blog/blog-details">
                            <img className="img-fluid" src={BLOG_THUMB_04} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/app/Blog/blog-details">The standard chunk of Lorem Ipsum used since the</Link>
                          </h4>
                          <p>2 Dec 2019</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/app/Blog/blog-details">
                            <img className="img-fluid" src={BLOG_THUMB_05} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/app/Blog/blog-details">generate Lorem Ipsum which looks reasonable</Link>
                          </h4>
                          <p>1 Dec 2019</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Latest Posts */}
                {/* Categories */}
                <div className="card category-widget">
                  <div className="card-header">
                    <h4 className="card-title">Blog Categories</h4>
                  </div>
                  <div className="card-body">
                    <ul className="categories">
                      <li><a href="#">HTML <span>(62)</span></a></li>
                      <li><a href="#">Css <span>(27)</span></a></li>
                      <li><a href="#">Java Script <span>(41)</span></a></li>
                      <li><a href="#">Photoshop <span>(16)</span></a></li>
                      <li><a href="#">Wordpress <span>(55)</span></a></li>
                      <li><a href="#">VB <span>(07)</span></a></li>
                    </ul>
                  </div>
                </div>
                {/* /Categories */}
                {/* Tags */}
                <div className="card tags-widget">
                  <div className="card-header">
                    <h4 className="card-title">Tags</h4>
                  </div>
                  <div className="card-body">
                    <ul className="tags">
                      <li><a href="#" className="tag">HTML</a></li>
                      <li><a href="#" className="tag">Css</a></li>
                      <li><a href="#" className="tag">Java Script</a></li>
                      <li><a href="#" className="tag">Jquery</a></li>
                      <li><a href="#" className="tag">Wordpress</a></li>
                      <li><a href="#" className="tag">Php</a></li>
                      <li><a href="#" className="tag">Angular js</a></li>
                      <li><a href="#" className="tag">React js</a></li>
                      <li><a href="#" className="tag">Vue js</a></li>
                      <li><a href="#" className="tag">Photoshop</a></li>
                      <li><a href="#" className="tag">Ajax</a></li>
                      <li><a href="#" className="tag">Json</a></li>
                      <li><a href="#" className="tag">C</a></li>
                      <li><a href="#" className="tag">C++</a></li>
                      <li><a href="#" className="tag">Vb</a></li>
                      <li><a href="#" className="tag">Vb.net</a></li>
                      <li><a href="#" className="tag">Asp.net</a></li>
                    </ul>
                  </div>
                </div>
                {/* /Tags */}
              </div>
              </StickyBox>
              </div>
              {/* /Blog Sidebar */}
            </div>
          </div>
        </div>		
        {/* /Page Content */}
      </div>
      );
   }
}

export default BlogList;
