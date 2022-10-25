import React, { Component } from 'react';
import { withRouter, Link  } from 'react-router-dom';
import {AppLogo,USER} from '../constant/imagepath_home';

class Header extends Component {
	componentDidMount() {
		$('.main-nav a').on('click', function(e) {
			if($(this).parent().hasClass('has-submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('submenu')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('submenu');
				$(this).next('ul').slideDown(350);
				$(this).addClass('submenu');
			} else if($(this).hasClass('submenu')) {
				$(this).removeClass('submenu');
				$(this).next('ul').slideUp(350);
			}
		});

		$(document).on('click', '#menu_close', function() {
			$('html').removeClass('menu-opened');
			$('.sidebar-overlay').removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});
	}
	render(){
		const {  location } = this.props
		let pathname = location.pathname
		let mentorarray = ["dashboard","Mentor/bookings"]
	return (
		<header className="header">
			<div className="header-fixed">
				<nav className="navbar navbar-expand-lg header-nav">
				<div className="navbar-header">
				<a id="mobile_btn" href="">
					<span className="bar-icon">
					<span />
					<span />
					<span />
					</span>
				</a>
				<Link to="/app/index" className="navbar-brand logo">
					<img src={AppLogo} className="img-fluid" alt="Logo" />
				</Link>
				</div>
				<div className="main-menu-wrapper">
				<div className="menu-header">
					<Link to="/app/index" className="menu-logo">
					<img src={AppLogo} className="img-fluid" alt="Logo" />
					</Link>
					<a id="menu_close" className="menu-close" href="#">
					<i className="fas fa-times" />
					</a>
				</div>
				<ul className="main-nav">
					<li className={pathname.includes('index') ?"active" :""} >
					<Link to="/app/index">Home</Link>
					</li>
					<li className={pathname.includes('/Mentor/dashboard') || pathname.includes('Mentor/bookings') ||pathname.includes('schedule-timings')
						 ||pathname.includes('/Mentor/chat')||pathname.includes('invoice')||pathname.includes('reviews')||pathname.includes('/Mentor/blog') 
						 ||pathname.includes('/Mentor/profile-settings')||pathname.includes('mentor-register') ||
						 pathname.includes('profile-mentee') ||pathname.includes('mentee-list') ||
						 pathname.includes('add-blog') ||pathname.includes('edit-blog')  ?"has-submenu active" :"has-submenu"}>
					<a href="">Mentor <i className="fas fa-chevron-down" /></a>
					<ul className="submenu">
						<li className={pathname.includes('/Mentor/dashboard') ?"active" :""}><Link  to="/app/Mentor/dashboard">Mentor Dashboard</Link></li>
						<li className={pathname.includes('Mentor/bookings') ?"active" :""}><Link to="/app/Mentor/bookings">Bookings</Link></li>
						<li className={pathname.includes('schedule-timings') ?"active" :""}><Link to="/app/Mentor/schedule-timings">Schedule Timing</Link></li>
						<li className={pathname.includes('mentee-list') ?"active" :""}><Link to="/app/Mentor/mentee-list">Mentee List</Link></li>
						<li className={pathname.includes('profile-mentee') ?"active" :""}><Link to="/app/Mentor/profile-mentee">Mentee Profile</Link></li>
						<li className={pathname.includes('/Mentor/blog') || pathname.includes('add-blog') 
							||pathname.includes('edit-blog') ?"has-submenu active" :"has-submenu"}>
						<Link to="/app/Mentor/blog">Blog</Link>
						<ul className="submenu">
							<li className={pathname.includes('/Mentor/blog') ?"active" :""}><Link to="/app/Mentor/blog">Blog</Link></li>
							<li><Link to="/app/Blog/blog-details">Blog View</Link></li>
							<li className={pathname.includes('add-blog') ?"active" :""}><Link to="/app/Mentor/add-blog">Add Blog</Link></li>
							<li className={pathname.includes('edit-blog') ?"active" :""}><Link to="/app/Mentor/edit-blog">Edit Blog</Link></li>
						</ul>
						</li>
						<li className={pathname.includes('/Mentor/chat') ?"active" :""}><Link to="/app/Mentor/chat">Chat</Link></li>
						<li className={pathname.includes('invoice') ?"active" :""}><Link to="/app/Mentor/invoices">Invoices</Link></li>
						<li className={pathname.includes('/Mentor/profile-settings') ?"active" :""}><Link to="/app/Mentor/profile-settings">Profile Settings</Link></li>
						<li className={pathname.includes('reviews') ?"active" :""}><Link to="/app/Mentor/reviews">Reviews</Link></li>
						<li className={pathname.includes('mentor-register') ?"active" :""}><Link to="/app/Mentor/mentor-register">Mentor Register</Link></li>
					</ul>
					</li>	
					<li className={pathname.includes('mentor-profile') || pathname.includes('checkout') ||
					pathname.includes('booking-success')|| pathname.includes('map-grid')|| pathname.includes('map-list')
					 || pathname.includes('search') ||pathname.includes('bookings-mentee') || pathname.includes('dashboard-mentee') ||
					 pathname.includes('favourites') || pathname.includes('Mentee/chat-mentee') || pathname.includes('profile-settings-mentee')||
					 pathname.includes('change-password') ?"has-submenu active" :"has-submenu"}>
					<a href="">Mentee <i className="fas fa-chevron-down" /></a>
					<ul className="submenu">
						<li className={pathname.includes('map-grid') || pathname.includes('map-list') 
						  ?"has-submenu active" :"has-submenu"}>
						<a href="#">Mentors</a>
						<ul className="submenu">
							<li className={pathname.includes('map-grid') ?"active" :""}><Link to="/app/Mentee/map-grid">Map Grid</Link></li>
							<li className={pathname.includes('map-list') ?"active" :""}><Link to="/app/Mentee/map-list">Map List</Link></li>
						</ul>
						</li>
						<li className={pathname.includes('search') ?"active" :""}><Link to="/app/Mentee/search">Search Mentor</Link></li>
						<li className={pathname.includes('mentor-profile') ?"active" :""}><Link to="/app/Mentee/mentor-profile">Mentor Profile</Link></li>
						<li className={pathname.includes('bookings-mentee') ?"active" :""}><Link to="/app/Mentee/bookings-mentee">Bookings</Link></li>
						<li className={pathname.includes('checkout') ?"active" :""}><Link to="/app/Mentee/checkout">Checkout</Link></li>
						<li className={pathname.includes('booking-success') ?"active" :""}><Link to="/app/Mentee/booking-success">Booking Success</Link></li>
						<li className={pathname.includes('dashboard-mentee') ?"active" :""}><Link to="/app/Mentee/dashboard-mentee">Mentee Dashboard</Link></li>
						<li className={pathname.includes('favourites') ?"active" :""} ><Link to="/app/Mentee/favourites">Favourites</Link></li>
						<li className={pathname.includes('Mentee/chat-mentee') ?"active" :""}><Link to="/app/Mentee/chat-mentee">Chat</Link></li>
						<li className={pathname.includes('profile-settings-mentee') ?"active" :""}><Link to="/app/Mentee/profile-settings-mentee">Profile Settings</Link></li>
						<li className={pathname.includes('change-password') ?"active" :""}><Link to="/app/Mentee/change-password">Change Password</Link></li>
					</ul>
					</li>	
					<li className={pathname.includes('voice-call') || pathname.includes('video-call') ||
					pathname.includes('components') || pathname.includes('blank-page') ?"has-submenu active" :"has-submenu"}>
					<a href="">Pages <i className="fas fa-chevron-down" /></a>
					<ul className="submenu">
						<li className={pathname.includes('voice-call') ?"active" :""}><Link to="/app/Pages/voice-call">Voice Call</Link></li>
						<li className={pathname.includes('video-call') ?"active" :""}><Link to="/app/Pages/video-call">Video Call</Link></li>
						<li><Link to="/app/Mentee/search">Search Mentors</Link></li>
						<li className={pathname.includes('components') ?"active" :""}><Link to="/app/Pages/components">Components</Link></li>
						<li className="has-submenu">
						<a href="">Invoices</a>
						<ul className="submenu">
							<li><Link to="/app/Mentor/invoices">Invoices</Link></li>
							<li><Link to="/app/Mentor/invoice-view">Invoice View</Link></li>
						</ul>
						</li>
						<li className={pathname.includes('blank-page') ?"active" :""}><Link to="/app/Pages/blank-page">Starter Page</Link></li>
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/register">Register</Link></li>
						<li><Link to="/forgot-password">Forgot Password</Link></li>
					</ul>
					</li>
					<li className={pathname.includes('blog-list') || pathname.includes('blog-grid') ||
					pathname.includes('blog-details') ?"has-submenu active" :"has-submenu"}>
					<a href="">Blog <i className="fas fa-chevron-down" /></a>
					<ul className="submenu">
						<li className={pathname.includes('blog-list') ?"active" :""}><Link to="/app/Blog/blog-list">Blog List</Link></li>
						<li className={pathname.includes('blog-grid') ?"active" :""}><Link to="/app/Blog/blog-grid">Blog Grid</Link></li>
						<li className={pathname.includes('blog-details') ?"active" :""}><Link to="/app/Blog/blog-details">Blog Details</Link></li>
					</ul>
					</li>
					<li>
					<a href="/template/admin/index" target="_blank">Admin</a>
					</li>
					<li className="login-link">
					<Link to="/login">Login / Signup</Link>
					</li>
				</ul>		 
				</div>		 
				{location.pathname.includes("p/index") ? <ul className="nav header-navbar-rht">
					<li className="nav-item">
						<Link className="nav-link" to="/login">Login</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link header-login" to="/register">Register</Link>
					</li>
				</ul> :
				<ul className="nav header-navbar-rht">
					{/* User Menu */}
					<li className="nav-item dropdown has-arrow logged-item">
					<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
						<span className="user-img">
						<img className="rounded-circle" src={USER} width={31} alt="Darren Elder" />
						</span>
					</a>
					<div className="dropdown-menu dropdown-menu-right">
						<div className="user-header">
						<div className="avatar avatar-sm">
							<img src={USER} alt="User Image" className="avatar-img rounded-circle" />
						</div>
						<div className="user-text">
							<h6>Jonathan Doe</h6>
							<p className="text-muted mb-0">Mentor</p>
						</div>
						</div>
						<Link className="dropdown-item" to="/app/Mentor/dashboard">Dashboard</Link>
						<Link className="dropdown-item" to="/app/Mentor/profile-settings">Profile Settings</Link>
						<Link className="dropdown-item" to="/login">Logout</Link>
					</div>
					</li>
					{/* /User Menu */}
				</ul> }
			</nav>
			</div>
		</header>
  	);
}
		
}
 
 
export default withRouter(Header);