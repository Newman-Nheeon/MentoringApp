
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
   render() {
		const {  location } = this.props
		let pathname = location.pathname
      return ( 
        <div className="profile-sidebar">
        <div className="user-widget">
          <div className="pro-avatar">JD</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
          </div>
          <div className="user-info-cont">
            <h4 className="usr-name">Jonathan Doe</h4>
            <p className="mentor-type">English Literature (M.A)</p>
          </div>
        </div>
        <div className="progress-bar-custom">
          <h6>Complete your profiles &gt;</h6>
          <div className="pro-progress">
            <div className="tooltip-toggle" tabIndex={0} />
            <div className="tooltip">80%</div>
          </div>
        </div>
        <div className="custom-sidebar-nav">
          <ul>
            <li><Link to="/app/Mentor/dashboard" className={pathname.includes('dashboard') ?"active" :""}><i className="fas fa-home" />Dashboard <span><i className="fas fa-chevron-right" /></span></Link></li>
            <li><Link to="/app/Mentor/bookings" className={pathname.includes('Mentor/bookings') ?"active" :""}><i className="fas fa-clock" />Bookings <span><i className="fas fa-chevron-right" /></span></Link></li>
            <li><Link to="/app/Mentor/schedule-timings" className={pathname.includes('schedule-timings') ?"active" :""}><i className="fas fa-hourglass-start" />Schedule Timings <span><i className="fas fa-chevron-right" /></span></Link></li>
            <li><Link to="/app/Mentor/chat"><i className="fas fa-comments" />Messages <span><i className="fas fa-chevron-right" /></span></Link></li>
            <li><Link to="/app/Mentor/invoices" className={pathname.includes('invoices') ?"active" :""}><i className="fas fa-file-invoice" />Invoices <span><i className="fas fa-chevron-right" /></span></Link></li>
            <li><Link to="/app/Mentor/reviews" className={pathname.includes('reviews') ?"active" :""}><i className="fas fa-eye" />Reviews <span><i className="fas fa-chevron-right" /></span></Link></li>
            <li><Link to="/app/Mentor/blog" className={pathname.includes('blog') ?"active" :""}><i className="fab fa-blogger-b" />Blog <span><i className="fas fa-chevron-right" /></span></Link></li>
            <li><Link to="/app/Mentee/mentor-profile"><i className="fas fa-user-cog" />Profile <span><i className="fas fa-chevron-right" /></span></Link></li>
            <li><Link to="/login"><i className="fas fa-sign-out-alt" />Logout <span><i className="fas fa-chevron-right" /></span></Link></li>
          </ul>
        </div>
      </div>
      );
   }
}

export default withRouter(Sidebar);
