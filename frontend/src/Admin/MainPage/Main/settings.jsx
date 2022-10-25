
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
   render() {
      return ( 
        <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Tab Menu */}
          <nav className="user-tabs mb-4 custom-tab-scroll">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li>
                <a className="nav-link active" href="#generalsettings" data-toggle="tab">General Settings</a>
              </li>
              <li>
                <a className="nav-link" href="#paymentgateway" data-toggle="tab">Payment gateway</a>
              </li>
              <li>
                <a className="nav-link" href="#sociallogin" data-toggle="tab">Social Login</a>
              </li>
            </ul>
          </nav>
          {/* /Tab Menu */}
          {/* Tab Content */}
          <div className="tab-content">
            {/* General */}
            <div role="tabpanel" id="generalsettings" className="tab-pane fade show active">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">General Settings</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/admin/index">Dashboard</Link></li>
                      <li className="breadcrumb-item"><a href="">Settings</a></li>
                      <li className="breadcrumb-item active">General Settings</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">		
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">General</h4>
                    </div>
                    <div className="card-body">
                      <form action="#">
                        <div className="form-group">
                          <label>Website Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Website Logo</label>
                          <input type="file" className="form-control" />
                          <small className="text-secondary">Recommended image size is <b>150px x 150px</b></small>
                        </div>
                        <div className="form-group mb-0">
                          <label>Favicon</label>
                          <input type="file" className="form-control" />
                          <small className="text-secondary">Recommended image size is <b>16px x 16px</b> or <b>32px x 32px</b></small><br />
                          <small className="text-secondary">Accepted formats : only png and ico</small>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /General */}
            {/* Payment gateway */}
            <div role="tabpanel" id="paymentgateway" className="tab-pane fade">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Payment gateway</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/admin/index">Dashboard</Link></li>
                      <li className="breadcrumb-item"><a href="">Settings</a></li>
                      <li className="breadcrumb-item active">Payment gateway</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">		
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">General</h4>
                    </div>
                    <div className="card-body">
                      <form action="/admin/settings" method="post">
                        <h4 className="text-primary">Stripe</h4>
                        <input type="hidden" name="csrf_token_name" defaultValue="104dbdaf79d7d8e21e4ae9991d166669" />
                        <div className="form-group">
                          <label>Stripe Option</label>
                          <div>
                            <div className="custom-control custom-radio custom-control-inline">
                              <input className="custom-control-input" id="sandbox" name="gateway_type" defaultValue="sandbox" type="radio" defaultChecked />
                              <label className="custom-control-label" htmlFor="sandbox">Sandbox</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                              <input className="custom-control-input" id="livepaypal" name="gateway_type" defaultValue="live" type="radio" />
                              <label className="custom-control-label" htmlFor="livepaypal">Live</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Gateway Name</label>
                          <input type="text" id="gateway_name" name="gateway_name" defaultValue="Stripe" required className="form-control" placeholder="Gateway Name" />
                        </div>
                        <div className="form-group">
                          <label>API Key</label>
                          <input type="text" id="api_key" name="api_key" defaultValue="pk_test_AealxxOygZz84AruCGadWvUV00mJQZdLvr" required className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Rest Key</label>
                          <input type="text" id="value" name="value" defaultValue="sk_test_8HwqAWwBd4C4E77bgAO1jUgk00hDlERgn3" required className="form-control" />
                        </div>
                        <div className="mt-4">
                          <button className="btn btn-primary" name="form_submit" value="submit" type="submit">Submit</button>
                          <Link to="/admin/settings" className="btn btn-link m-l-5">Cancel</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Payment gateway */}
            {/* Social Login */}
            <div role="tabpanel" id="sociallogin" className="tab-pane fade">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Social Login</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/admin/index">Dashboard</Link></li>
                      <li className="breadcrumb-item"><a href="">Settings</a></li>
                      <li className="breadcrumb-item active">Social Login</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="card mb-0 shadow-none">
                <div className="card-header">
                  <h4 className="card-title">Social Login</h4>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label>Facebook App ID</label>
                    <input type="text" className="form-control mb-2" id="website_facebook_app_id" name="website_facebook_app_id" defaultValue={506928406484271} />
                    <a href="https://www.codexworld.com/create-facebook-app-id-app-secret/" target="_blank">How to Create facebook app id?</a>
                  </div>
                  <div className="form-group">
                    <label>Google Client ID</label>
                    <input type="text" className="form-control mb-2" id="website_google_client_id" name="website_google_client_id" defaultValue="387823802376-7e1kr704s4o39a8cqtdmd6jeaob636tu.apps.googleusercontent.com" />
                    <a href="https://www.codexworld.com/create-google-developers-console-project/" target="_blank">How to Create google client id?</a>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <button name="form_submit" type="submit" className="btn btn-primary" value="true">Save Changes</button>
                </div>
              </div>
            </div>
            {/* /Social Login */}
          </div>
          {/* /Tab Content */}
        </div>
      </div>
      );
   }
}

export default Home;