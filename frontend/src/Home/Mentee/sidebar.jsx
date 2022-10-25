
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
          <li><Link to="/app/Mentee/dashboard-mentee" className={pathname.includes('dashboard-mentee') ?"active" :""}><i className="fas fa-home" />Dashboard <span><i className="fas fa-chevron-right" /></span></Link></li>
          <li><Link to="/app/Mentee/bookings-mentee" className={pathname.includes('bookings-mentee') ?"active" :""}><i className="fas fa-clock" />Bookings <span><i className="fas fa-chevron-right" /></span></Link></li>
          <li><Link to="/app/Mentee/chat-mentee"><i className="fas fa-comments" />Messages <span><i className="fas fa-chevron-right" /></span></Link></li>
          <li><Link to="/app/Mentee/favourites" className={pathname.includes('favourites') ?"active" :""}><i className="fas fa-star" />Favourites <span><i className="fas fa-chevron-right" /></span></Link></li>
          <li><Link to="/app/Mentor/profile-mentee"><i className="fas fa-user-cog" />Profile <span><i className="fas fa-chevron-right" /></span></Link></li>
          <li><Link to="/login"><i className="fas fa-sign-out-alt" />Logout <span><i className="fas fa-chevron-right" /></span></Link></li>
        </ul>
      </div>
    </div>
      );
   }
}

export default withRouter(Sidebar);
