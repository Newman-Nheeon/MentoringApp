
import React, { Component } from 'react';
//slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Submit,ICON_1,ICON_2,ICON_3,USER,USER_1,USER_2,USER_3,USER_4,USER_6,USER_7,USER_15,USER_9,USER_11,USER_12,
    USER_13,IMG_1,IMG_2,IMG_3,IMG_4,IMG_5,IMG_6,IMG_7,IMG_8,BLOG_01,BLOG_02,BLOG_03,BLOG_04} from '../../constant/imagepath_home';
import { Link, withRouter } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props)
  }
  searchmentee() {
    const{history} = this.props
    history.push('/app/Mentee/search')
  }
   render() {
    const settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        centerPadding: '10px',
        arrows: false,
        centerMode: true,
    };
      return ( 
        <div>
        <section className="section section-search">
          <div className="container">
            <div className="banner-wrapper m-auto text-center">
              <div className="banner-header">
                <h1>Search Teacher in <span>Mentoring Appointment</span></h1>
                <p>Discover the best Mentors &amp; institutions the city nearest to you.</p>
              </div>
              {/* Search */}
              <div className="search-box">
                <form action="/app/Pages/search">
                  <div className="form-group search-location">
                    <input type="text" className="form-control" placeholder="Search Location" />
                  </div>
                  <div className="form-group search-info">
                    <input type="text" className="form-control" placeholder="Search School, Online educational centers, etc" />
                  </div>
                  <button type="submit" className="btn btn-primary search-btn" onClick={()=>this.searchmentee()}><i><img src={Submit} alt="" /></i> <span>Search</span></button>
                </form>
              </div>
              {/* /Search */}
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        <section className="section how-it-works">
          <div className="container">
            <div className="section-header text-center">
              <span>Mentoring Flow</span>
              <h2>How does it works ?</h2>
              <p className="sub-title">Are you looking to join online institutions? Now it's very simple, Sign up with mentoring</p>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-box text-center">					
                  <div className="feature-header">
                    <div className="feature-icon">
                      <span className="circle" />
                      <i><img src={ICON_1} alt="" /></i>
                    </div>		
                    <div className="feature-cont">	
                      <div className="feature-text">Sign up</div>
                    </div>
                  </div>
                  <p className="mb-0">Are you looking to join online Learning? Now it's very simple, Now Sign up</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-box text-center">					
                  <div className="feature-header">
                    <div className="feature-icon">
                      <span className="circle" />
                      <i><img src={ICON_2} alt="" /></i>
                    </div>	
                    <div className="feature-cont">
                      <div className="feature-text">Collaborate</div>
                    </div>
                  </div>
                  <p className="mb-0">Collaborate on your own timing, by scheduling with mentor booking</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-box text-center">					
                  <div className="feature-header">
                    <div className="feature-icon">
                      <span className="circle" />
                      <i><img src={ICON_3} alt="" /></i>
                    </div>	
                    <div className="feature-cont">
                      <div className="feature-text">Improve &amp; Get Back</div>
                    </div>
                  </div>
                  <p className="mb-0">you can gather different skill set, and you can become mentor too</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section popular-courses">
          <div className="container">
            <div className="section-header text-center">
              <span>Mentoring Goals</span>
              <h2>Popular Mentors</h2>
              <p className="sub-title">Do you want to move on next step? Choose your most popular leaning mentors, it will help you to achieve your professional goals.</p>
            </div>
            {/* <div className="owl-carousel owl-theme"> */}
            <OwlCarousel className='owl-theme' loop margin={30} items={4} responsive={{
	          	0: {
	            	items: 1
	          	},
	          	768 : {
	            	items: 3
	          	},
	          	1170: {
	            	items: 4
	          	}
	        }} nav>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER_1} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">Donna Yancey</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Digital Marketer
                      </div>
                    </div>
                    <div className="rating">							
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">4.4</span>
                    </div>
                    <div className="author-country">
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER_2} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">James Amen</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        UNIX, Calculus, Trigonometry
                      </div>
                    </div>
                    <div className="rating">						
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">4.4</span>
                    </div>
                    <div className="author-country">
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER_3} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title">Marvin Downey</h3>
                    <div className="author-info">
                      <div className="author-name">
                        ASP.NET,Computer Gaming
                      </div>
                    </div>
                    <div className="rating">						
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">4.4</span>
                    </div>
                    <div className="author-country">
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER_4} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">Betty Hairston</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Computer Programming
                      </div>
                    </div>
                    <div className="rating">						
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">4.4</span>
                    </div>
                    <div className="author-country">
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">Jose Anderson</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Digital Marketer
                      </div>
                    </div>
                    <div className="rating">							
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star " />
                      <span className="d-inline-block average-rating">4.4</span>
                    </div>
                    <div className="author-country">
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER_6} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">Aaron Pietrzak</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        UNIX,Calculus,Trigonometry
                      </div>
                    </div>
                    <div className="rating">						
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">4.4</span>
                    </div>
                    <div className="author-country">
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER_7} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">Brian Martinez</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        ASP.NET,Computer Gaming
                      </div>
                    </div>
                    <div className="rating">						
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">4.4</span>
                    </div>
                    <div className="author-country">
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER_15} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">Misty Lundy</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Computer Programming
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">4.4</span>
                    </div>
                    <div className="author-country">
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER_9} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">Vern Campbell</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Digital Marketer
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">4.4</span>
                    </div>
                    <div className="author-country">
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER_13} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">Jessica Fogarty</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        UNIX,Calculus,Trigonometry
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">4.4</span>
                    </div>
                    <div className="author-country">
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER_11} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">Evelyn Stafford</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        ASP.NET,Computer Gaming
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star " />
                      <span className="d-inline-block average-rating">4.4</span>
                    </div>
                    <div className="author-country">
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER_12} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">Christopher Carroll</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Computer Programming
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star" />
                      <span className="d-inline-block average-rating">4.4</span>
                    </div>
                    <div className="author-country">
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
            
              </OwlCarousel>
              </div>
          {/* </div> */}
        </section>
        {/* Path section start */}
        <section className="section path-section">
          <div className="section-header text-center">
            <div className="container">
              <span>Choose the</span>
              <h2>Different All Learning Paths</h2>
              <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
          </div>
          <div className="learning-path-col">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <Link to="/app/Pages/search" className="large-col-image">
                      <div className="image-col-merge">
                        <img src={IMG_1} alt="" />
                        <div className="text-col">
                          <h5>Digital Marketer</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <Link to="/app/Pages/search" className="large-col-image">
                      <div className="image-col-merge">
                        <img src={IMG_2} alt="" />
                        <div className="text-col">
                          <h5>Ui designer</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <Link to="/app/Pages/search" className="large-col-image">
                      <div className="image-col-merge">
                        <img src={IMG_3} alt="" />
                        <div className="text-col">
                          <h5>IT Security</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <Link to="/app/Pages/search" className="large-col-image">
                      <div className="image-col-merge">
                        <img src={IMG_4} alt="" />
                        <div className="text-col">
                          <h5>Front-End Developer</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <Link to="/app/Pages/search" className="large-col-image">
                      <div className="image-col-merge">
                        <img src={IMG_5} alt="" />
                        <div className="text-col">
                          <h5>Web Developer</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <Link to="/app/Pages/search" className="large-col-image">
                      <div className="image-col-merge">
                        <img src={IMG_6} alt="" />
                        <div className="text-col">
                          <h5>Administrator</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <Link to="/app/Pages/search" className="large-col-image">
                      <div className="image-col-merge">
                        <img src={IMG_7} alt="" />
                        <div className="text-col">
                          <h5>Project Manager</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <Link to="/app/Pages/search" className="large-col-image">
                      <div className="image-col-merge">
                        <img src={IMG_8} alt="" />
                        <div className="text-col">
                          <h5>PHP Developer</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="view-all text-center"><a href="#" className="btn btn-primary">View All</a></div>						
            </div>
          </div>
        </section>
        {/* Path section end */}
        {/* Blog Section */}
        <section className="section section-blogs">
          <div className="container">
            {/* Section Header */}
            <div className="section-header text-center">
              <span>Lorem ipsum dolor</span>
              <h2>The Blogs &amp; News</h2>
              <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            {/* /Section Header */}
            <div className="row blog-grid-row">
              <div className="col-md-6 col-lg-3 col-sm-12">
                {/* Blog Post */}
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_01} alt="Post Image" /></Link>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <Link to="/app/Blog/blog-details"><span>Tyrone Roberts</span></Link>
                        </div>
                      </li>
                      <li><i className="far fa-clock" /> 4 Dec 2019</li>
                    </ul>
                    <h3 className="blog-title"><Link to="/app/Blog/blog-details">What is Lorem Ipsum? Lorem Ipsum is simply</Link></h3>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                {/* Blog Post */}
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_02} alt="Post Image" /></Link>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <Link to="/app/Blog/blog-details"><span>Brittany Garcia</span></Link>
                        </div>
                      </li>
                      <li><i className="far fa-clock" /> 3 Dec 2019</li>
                    </ul>
                    <h3 className="blog-title"><Link to="/app/Blog/blog-details">Contrary to popular belief, Lorem Ipsum is</Link></h3>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                {/* Blog Post */}
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_03} alt="Post Image" /></Link>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <Link to="/app/Blog/blog-details"><span>Allen Davis</span></Link>
                        </div>
                      </li>
                      <li><i className="far fa-clock" /> 3 Dec 2019</li>
                    </ul>
                    <h3 className="blog-title"><Link to="/app/Blog/blog-details">The standard chunk of Lorem Ipsum used</Link></h3>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                {/* Blog Post */}
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/app/Blog/blog-details"><img className="img-fluid" src={BLOG_04} alt="Post Image" /></Link>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <Link to="/app/Blog/blog-details"><span>William Lawrence</span></Link>
                        </div>
                      </li>
                      <li><i className="far fa-clock" /> 2 Dec 2019</li>
                    </ul>
                    <h3 className="blog-title"><Link to="/app/Blog/blog-details">The standard Lorem Ipsum passage, used</Link></h3>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
            </div>
            <div className="view-all text-center"> 
              <Link to="/app/Blog/blog-list" className="btn btn-primary">View All</Link>
            </div>
          </div>
        </section>
        {/* /Blog Section */}	
        {/* Statistics Section */}
        <section className="section statistics-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="statistics-list text-center">
                  <span>500+</span>
                  <h3>Happy Clients</h3>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="statistics-list text-center">
                  <span>120+</span>
                  <h3>Online Appointments</h3>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="statistics-list text-center">
                  <span>100%</span>
                  <h3>Job Satisfaction</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      );
   }
}

export default withRouter(Home);
