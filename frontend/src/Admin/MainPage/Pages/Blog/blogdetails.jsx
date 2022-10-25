
import React, { Component } from 'react';
import {BLOG_01,AVATAR_12} from '../../../imagepath'
import { Link } from 'react-router-dom';

class BlogDetails extends Component {
   render() {
      return ( 
       
      <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Blog Details</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/admin/index">Dashboard</a></li>
                <li className="breadcrumb-item active">Blog Details</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                {/* Blog details */}
                <div className="row">
                  <div className="col-12 blog-details">
                    <span className="course-title">Abacus Study for beginner - Part II</span>
                    <div className="d-flex flex-wrap date-col">
                      <span className="date"><i className="fas fa-calendar-check" /> April 09 2020</span>
                      <span className="author"><i className="fe fe-user" /> By Andrew Dawis</span>
                    </div>
                    <div className="blog-details-img">
                      <img className="img-fluid" src={BLOG_01} alt="Post Image" />
                    </div>
                    <div className="blog-content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                      <blockquote>
                        Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
                      </blockquote>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    </div>
                  </div>
                </div>
                {/* /Blog details */}
              </div>
            </div>
            {/* Share post */}
            <div className="card">
              <div className="card-body">
                <h4>Share the post</h4>
                <ul className="share-post">
                  <li>
                    <a href="#" target="_blank"><i className="fab fa-facebook-f" /> </a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><i className="fab fa-twitter" /> </a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><i className="fab fa-linkedin-in" /></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><i className="fab fa-instagram" /></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><i className="fab fa-dribbble" /> </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /Share post */}
            {/* About Author */}
            <div className="card">
              <div className="card-body">
                <h4>About author</h4>
                <div className="about-author pt-4 d-flex align-items-center">
                  <div className="left">
                    <img className="rounded-circle" src={AVATAR_12} width={120} alt="Ryan Taylor" />
                  </div>
                  <div className="right">
                    <h5>Linda Barrett</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /About Author */}
          </div>			
        </div>
      </div>			
    </div>
      );
   }
}

export default BlogDetails;
