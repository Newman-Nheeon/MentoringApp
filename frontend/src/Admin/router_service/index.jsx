
//main
import Dashboard from '../MainPage/Main/dashboard';
import Mentor from '../MainPage/Main/mentor';
import Mentee from '../MainPage/Main/mentee';
import Bookinglist from '../MainPage/Main/bookinglist';
import Categories from '../MainPage/Main/categories';
import Transaction from '../MainPage/Main/transaction';
import Settings from '../MainPage/Main/settings';
import InvoiceReport from '../MainPage/Main/invoicereport';
import Invoice from '../MainPage/Main/invoice';
import MyProfile from '../MainPage/Pages/profile';
import BlankPage from '../MainPage/Pages/blank';
import Blog from '../MainPage/Pages/Blog/blog';
import AddBlog from '../MainPage/Pages/Blog/addblog';
import EditBlog from '../MainPage/Pages/Blog/editblog';
import BlogDetails from '../MainPage/Pages/Blog/blogdetails';
import Components from '../MainPage/UIinterface/components';
import Basicinputs from "../MainPage/UIinterface/Forms/basicinputs"
import Inputgrp from "../MainPage/UIinterface/Forms/Inputgroups"
import HorizontalForm from "../MainPage/UIinterface/Forms/HorizontalForm"
import VerticalForm from "../MainPage/UIinterface/Forms/VerticalForm"
import Formmask from "../MainPage/UIinterface/Forms/Formmask"
import Formvalidation from "../MainPage/UIinterface/Forms/Formvalidation"
import Basic from "../MainPage/UIinterface/Tables/basic"
import DataTable from "../MainPage/UIinterface/Tables/data-table"

import Error404 from '../MainPage/Pages/ErrorPage/error404';
import Error500 from '../MainPage/Pages/ErrorPage/error500';

export default [  
   {
      path: 'index',
      component: Dashboard
   }, 
   {
      path: 'mentor',
      component: Mentor
   }, 
   {
      path: 'mentee',
      component: Mentee
   },
   {
      path: 'booking-list',
      component: Bookinglist
   }, 
   {
      path: 'categories',
      component: Categories
   },
   {
      path: 'transactions-list',
      component: Transaction
   },
   {
      path: 'settings',
      component: Settings
   },
   {
      path: 'invoice',
      component: Invoice
   },
   {
      path: 'invoice-report',
      component: InvoiceReport
   },
   {
      path: 'profile',
      component: MyProfile
   },
   {
      path: 'blank-page',
      component: BlankPage
   },
   {
      path: 'blog_',
      component: Blog
   },
   {
      path: 'add-blog',
      component: AddBlog
   },
   {
      path: 'edit-blog',
      component: EditBlog
   },
   {
      path: 'blog-details',
      component: BlogDetails
   },
   {
      path: 'components',
      component: Components
   },
   {
      path: 'form-basic-inputs',
      component: Basicinputs
   },
   {
      path: 'form-input-groups',
      component: Inputgrp
   },
   {
      path: 'form-horizontal',
      component: HorizontalForm
   },
   {
      path: 'form-vertical',
      component: VerticalForm
   },
   {
      path: 'form-mask',
      component: Formmask
   },
   {
      path: 'form-validation',
      component: Formvalidation
   },
   {
      path: 'tables-basic',
      component: Basic
   },
   {
      path: 'data-tables',
      component: DataTable
   },
   {
      path: 'error-404',
      component: Error404
   },  
   {
      path: 'error-500',
      component: Error500
   },  
]