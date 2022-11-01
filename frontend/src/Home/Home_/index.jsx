
import React, { Component } from 'react';
//slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Submit,ICON_1,ICON_2,ICON_3,USER_1,USER_2,USER_3,USER_4,USER_5,USER_6,USER_7,USER_8,USER_9,USER_10,USER_11,USER_12,USER_13,USER_15,IMG_1,IMG_2,IMG_3,IMG_4,IMG_5,IMG_6,IMG_7,IMG_8,BLOG_01,BLOG_02,BLOG_03,BLOG_04} from '../../constant/imagepath_home';
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
                <h1>Life Ready Individual<span>(LRI)</span> Programme</h1>
                <p>A Platform For young People to Discover &amp; Express Their Unique Personalities</p>
              </div>



              {/* Search */}
              <div className="search-box">
                <form>
                  <div className="form-group search-location">
                    <input type="text" className="form-control" placeholder="Search Location" />
                  </div>
                  <div className="form-group search-info">
                    <input type="text" className="form-control" placeholder="Search Mentor" />
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
              <p className="sub-title">Participate in the NWN 1 Year LRI Structured Mentoring Programme </p>
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
                  <p className="mb-0">Are you looking to participate in a life transforming Mentoring Programme? Good News! it's very simple, Sign up Now</p>
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
                      <div className="feature-text">Get Assigned to a Mentor</div>
                    </div>
                  </div>
                  <p className="mb-0">Get in Contact with your Assigned Mentor, Collaborate on your own timing, scheduling with MeetUps with mentor</p>
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
                  <p className="mb-0">Discover Your Uniquesness, gather different skill set, Build Networking and Community development, and you can become mentor</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section popular-courses">
          <div className="container">
            <div className="section-header text-center">
              <span>Mentoring Goals</span>
              <h2>Mentors</h2>
              <p className="sub-title">Sneak Peak at Our Popular Learning Mentors that will help you to achieve your goals.</p>
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
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">LRI 001</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Noel Abdullahi
                      </div>
                    </div>
                    <div className="rating">							
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">4.5</span>
                    </div>
                    <div className="author-country">
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Dallas, Texas</p>
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
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">LRI 002</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Lucy Noel-Abdullahi
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
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Dallas, Texas</p>
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
                  <h3 className="title"><Link to="/app/Mentee/mentor-profile">LRI 003</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Esther Dumbiri
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
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Lagos, Nigeria</p>
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
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">LRI 004</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Yvonne Joseph
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
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER_5} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">LRI 005</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Wole Dada
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
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Ibadan, Nigeria</p>
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
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">LRI 006</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Priscilla Adesegun
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
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> NewYork, USA</p>
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
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">LRI 007</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Taiye Oyemakinwa
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
                      <img className="img-fluid" alt="" src={USER_8} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">LRI 008</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Keyinde Oyemakiwa
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
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">LRI 009</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Daniel Dumbiri
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
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-box">
                <div className="product">
                  <div className="product-img">
                    <Link to="/app/Mentee/mentor-profile">
                      <img className="img-fluid" alt="" src={USER_10} width={600} height={300} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">LRI 010</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Chukwunumso Omefenwa
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
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Lagos, Nigeria</p>
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
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">LRI 011</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Samuel Omifenwa
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
                      <p className="mb-0"><i className="fas fa-map-marker-alt" /> Lagos, Nigeria</p>
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
                    <h3 className="title"><Link to="/app/Mentee/mentor-profile">LRI 012</Link></h3>
                    <div className="author-info">
                      <div className="author-name">
                        Queensline Ndubuisi-Godwin
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
              <span>Learning Path</span>
              <h2>Area Of Interest</h2>
              <p className="sub-title"></p>
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
                          <h5>Digital Marketing</h5>
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
                          <h5>UI/UX designer</h5>
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
                          <h5>AI/ML</h5>
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
                        <img src={IMG_5} alt="" />
                        <div className="text-col">
                          <h5>Mobile Developer</h5>
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
                          <h5>Cloud Computing</h5>
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
                          <h5>Project Management</h5>
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
                          <h5>Data Science</h5>
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
              <span>Stay Updated</span>
              <h2>The Blogs &amp; News</h2>
              <p className="sub-title"></p>
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
                          <Link to="/app/Blog/blog-details"><span>Admins & Operations</span></Link>
                        </div>
                      </li>
                      <li><i className="far fa-clock" /> 4 Aug 2022</li>
                    </ul>
                    <h3 className="blog-title"><Link to="/app/Blog/blog-details">LRI 2022/2023 Closed!!</Link></h3>
                    <p className="mb-0">New Participant should join the wait list for the 2023/2024 LRI Programme</p>
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
                          <Link to="/app/Blog/blog-details"><span>Management</span></Link>
                        </div>
                      </li>
                      <li><i className="far fa-clock" /> 4 Aug 2022</li>
                    </ul>
                    <h3 className="blog-title"><Link to="/app/Blog/blog-details">Coming Soon</Link></h3>
                    <p className="mb-0">Await the New LRI Digital Application for Web and mobile, for the 2023/2024 Cohort</p>
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
                          <Link to="/app/Blog/blog-details"><span>Noel Abdullahi</span></Link>
                        </div>
                      </li>
                      <li><i className="far fa-clock" /> 13 Oct 2022</li>
                    </ul>
                    <h3 className="blog-title"><Link to="/app/Blog/blog-details">NWN Digital Academy</Link></h3>
                    <p className="mb-0">a platform where individuals can learn and grow for free and pay afterwards</p>
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
                          <Link to="/app/Blog/blog-details"><span>Management</span></Link>
                        </div>
                      </li>
                      <li><i className="far fa-clock" /> 30 Jul 2022</li>
                    </ul>
                    <h3 className="blog-title"><Link to="/app/Blog/blog-details">Graduation! Graduation!</Link></h3>
                    <p className="mb-0">Congratulations to the first set of the NWN Life Ready Individual programme, thank you for your time and commitment</p>
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
                  <span>16+</span>
                  <h3>Mentors</h3>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="statistics-list text-center">
                  <span>100+</span>
                  <h3>Mentee's</h3>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="statistics-list text-center">
                  <span>100%</span>
                  <h3>Transformation</h3>
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
