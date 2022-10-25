/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Sidebar extends Component {
   render() {
    
    const {  location } = this.props
    let pathname = location.pathname

    return (
      <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title"> 
              <span><i className="fe fe-home" /> Main</span>
            </li>
            <li className={pathname.includes('index') ?"active" :""}> 
              <Link to="/admin/index"><span>Dashboard</span></Link>
            </li>
            <li className={pathname.includes('mentor') ?"active" :""}> 
              <Link to="/admin/mentor"><span>Mentor</span></Link>
            </li>
            <li className={pathname.includes('mentee') ?"active" :""}> 
              <Link to="/admin/mentee"><span>Mentee</span></Link>
            </li>
            <li className={pathname.includes('booking-list') ?"active" :""}> 
              <Link to="/admin/booking-list"><span>Booking List</span></Link>
            </li>
            <li className={pathname.includes('categories') ?"active" :""}> 
              <Link to="/admin/categories"><span>Categories</span></Link>
            </li>
            <li className={pathname.includes('transactions-list') ?"active" :""}> 
              <Link to="/admin/transactions-list"><span>Transactions</span></Link>
            </li>
            <li className={pathname.includes('settings') ?"active" :""}> 
              <Link to="/admin/settings"><span>Settings</span></Link>
            </li>
            <li className="submenu">
              <a href="#"><span> Reports</span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><Link className={pathname.includes('invoice') ?"active" :""} to="/admin/invoice-report">Invoice Reports</Link></li>
              </ul>
            </li>
            <li className="menu-title"> 
              <span><i className="fe fe-document" /> Pages</span>
            </li>
            <li className={pathname.includes('profile') ?"active" :""}> 
              <Link to="/admin/profile"><span>My Profile</span></Link>
            </li>
            <li className="submenu"> 
              <a href="#"><span>Blog</span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><Link className={pathname.includes('blog_') ?"active" :""} to="/admin/blog_"> Blog </Link></li>
                <li><Link className={pathname.includes('blog-details') ?"active" :""} to="/admin/blog-details"> Blog Details </Link></li>
                <li><Link className={pathname.includes('add-blog') ?"active" :""} to="/admin/add-blog"> Add Blog </Link></li>
                <li><Link className={pathname.includes('edit-blog') ?"active" :""} to="/admin/edit-blog"> Edit Blog </Link></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><span> Authentication </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><Link to="/admin_login"> Login </Link></li>
                <li><Link to="/admin_register"> Register </Link></li>
                <li><Link to="/admin_forgot-password"> Forgot Password </Link></li>
                <li><Link to="/lock-screen"> Lock Screen </Link></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><span> Error Pages </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><Link to="/admin/error-404">404 Error </Link></li>
                <li><Link to="/admin/error-500">500 Error </Link></li>
              </ul>
            </li>
            <li className={pathname.includes('blank-page') ?"active" :""}> 
              <Link to="/admin/blank-page"><span>Blank Page</span></Link>
            </li>
            <li className="menu-title"> 
              <span><i className="fe fe-star-o" /> UI Interface</span>
            </li>
            <li className={pathname.includes('components') ?"active" :""}> 
              <Link to="/admin/components"><span>Components</span></Link>
            </li>
            <li className="submenu">
              <a href="#"><span> Forms </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><Link className={pathname.includes('form-basic-inputs') ?"active" :""} to="/admin/form-basic-inputs">Basic Inputs </Link></li>
                <li><Link className={pathname.includes('form-input-groups') ?"active" :""} to="/admin/form-input-groups">Input Groups </Link></li>
                <li><Link className={pathname.includes('form-horizontal') ?"active" :""} to="/admin/form-horizontal">Horizontal Form </Link></li>
                <li><Link className={pathname.includes('form-vertical') ?"active" :""} to="/admin/form-vertical"> Vertical Form </Link></li>
                <li><Link className={pathname.includes('form-mask') ?"active" :""} to="/admin/form-mask"> Form Mask </Link></li>
                <li><Link  className={pathname.includes('form-validation') ?"active" :""}to="/admin/form-validation"> Form Validation </Link></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><span> Tables </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><Link className={pathname.includes('tables-basic') ?"active" :""} to="/admin/tables-basic">Basic Tables </Link></li>
                <li><Link className={pathname.includes('data-tables') ?"active" :""} to="/admin/data-tables">Data Table </Link></li>
              </ul>
            </li>
            <li className="submenu">
              <a href=""><span>Multi Level</span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li className="submenu">
                  <a href=""> <span>Level 1</span> <span className="menu-arrow" /></a>
                  <ul style={{display: 'none'}}>
                    <li><a href=""><span>Level 2</span></a></li>
                    <li className="submenu">
                      <a href=""> <span> Level 2</span> <span className="menu-arrow" /></a>
                      <ul style={{display: 'none'}}>
                        <li><a href="">Level 3</a></li>
                        <li><a href="">Level 3</a></li>
                      </ul>
                    </li>
                    <li><a href=""> <span>Level 2</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href=""> <span>Level 1</span></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
      );
   }
}

export default withRouter(Sidebar);
