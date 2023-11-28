import React from "react";
import BodyConfig from "../Body/BodyConfig/BodyConfig";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <BodyConfig />
      <div className="sidebar-wrapper" data-simplebar="true">
        <div className="sidebar-header">
          <Link to="/dashboard">
            <img
              src="assets/images/logo-icon.png"
              className="logo-icon"
              alt="logo icon"
            />
          </Link>
          <Link to="/dashboard">
            <h4 className="logo-text">Rukada</h4>
          </Link>
          <div className="toggle-icon ms-auto">
            <i className="bx bx-arrow-to-left" />
          </div>
        </div>
        {/*navigation*/}
        <ul className="metismenu" id="menu">
          <li>
            <a href="javascript:;" className="has-arrow">
              <div className="parent-icon">
                <i className="bx bx-home-circle" />
              </div>
              <div className="menu-title">Dashboard</div>
            </a>
            <ul>
              <li>
                <a href="index.html">
                  <i className="bx bx-right-arrow-alt" />
                  Default
                </a>
              </li>
              <li>
                <a href="dashboard-eCommerce.html">
                  <i className="bx bx-right-arrow-alt" />
                  eCommerce
                </a>
              </li>
              <li>
                <a href="dashboard-analytics.html">
                  <i className="bx bx-right-arrow-alt" />
                  Analytics
                </a>
              </li>
              <li>
                <a href="dashboard-digital-marketing.html">
                  <i className="bx bx-right-arrow-alt" />
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="dashboard-human-resources.html">
                  <i className="bx bx-right-arrow-alt" />
                  Human Resources
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" className="has-arrow">
              <div className="parent-icon">
                <i className="bx bx-category" />
              </div>
              <div className="menu-title">Application</div>
            </a>
            <ul>
              <li>
                <Link to="/estados">
                  <i className="bx bx-right-arrow-alt" />
                  Estados
                </Link>
              </li>
              <li>
                <Link to="/politicas">
                  <i className="bx bx-right-arrow-alt" />
                  Politicas
                </Link>
              </li>
              <li>
                <Link to="/planes">
                  <i className="bx bx-right-arrow-alt" />
                  Planes
                </Link>
              </li>
              <li>
                <Link to="/moderador">
                  <i className="bx bx-right-arrow-alt" />
                  Moderador
                </Link>
              </li>
              <li>
                <Link to="/administradores">
                  <i className="bx bx-right-arrow-alt" />
                  Administradores
                </Link>
              </li>
              <li>
                <a href="/monitoreo">
                  <i className="bx bx-right-arrow-alt" />
                  Monitoreo de Actividades
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-label">UI Elements</li>
          <li>
            <a href="widgets.html">
              <div className="parent-icon">
                <i className="bx bx-cookie" />
              </div>
              <div className="menu-title">Widgets</div>
            </a>
          </li>
          <li>
            <a href="javascript:;" className="has-arrow">
              <div className="parent-icon">
                <i className="bx bx-cart" />
              </div>
              <div className="menu-title">eCommerce</div>
            </a>
            <ul>
              <li>
                <a href="ecommerce-products.html">
                  <i className="bx bx-right-arrow-alt" />
                  Products
                </a>
              </li>
              <li>
                <a href="ecommerce-products-details.html">
                  <i className="bx bx-right-arrow-alt" />
                  Product Details
                </a>
              </li>
              <li>
                <a href="ecommerce-add-new-products.html">
                  <i className="bx bx-right-arrow-alt" />
                  Add New Products
                </a>
              </li>
              <li>
                <a href="ecommerce-orders.html">
                  <i className="bx bx-right-arrow-alt" />
                  Orders
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bx bx-bookmark-heart" />
              </div>
              <div className="menu-title">Components</div>
            </a>
            <ul>
              <li>
                <a href="component-alerts.html">
                  <i className="bx bx-right-arrow-alt" />
                  Alerts
                </a>
              </li>
              <li>
                <a href="component-accordions.html">
                  <i className="bx bx-right-arrow-alt" />
                  Accordions
                </a>
              </li>
              <li>
                <a href="component-badges.html">
                  <i className="bx bx-right-arrow-alt" />
                  Badges
                </a>
              </li>
              <li>
                <a href="component-buttons.html">
                  <i className="bx bx-right-arrow-alt" />
                  Buttons
                </a>
              </li>
              <li>
                <a href="component-cards.html">
                  <i className="bx bx-right-arrow-alt" />
                  Cards
                </a>
              </li>
              <li>
                <a href="component-carousels.html">
                  <i className="bx bx-right-arrow-alt" />
                  Carousels
                </a>
              </li>
              <li>
                <a href="component-list-groups.html">
                  <i className="bx bx-right-arrow-alt" />
                  List Groups
                </a>
              </li>
              <li>
                <a href="component-media-object.html">
                  <i className="bx bx-right-arrow-alt" />
                  Media Objects
                </a>
              </li>
              <li>
                <a href="component-modals.html">
                  <i className="bx bx-right-arrow-alt" />
                  Modals
                </a>
              </li>
              <li>
                <a href="component-navs-tabs.html">
                  <i className="bx bx-right-arrow-alt" />
                  Navs &amp; Tabs
                </a>
              </li>
              <li>
                <a href="component-navbar.html">
                  <i className="bx bx-right-arrow-alt" />
                  Navbar
                </a>
              </li>
              <li>
                <a href="component-paginations.html">
                  <i className="bx bx-right-arrow-alt" />
                  Pagination
                </a>
              </li>
              <li>
                <a href="component-popovers-tooltips.html">
                  <i className="bx bx-right-arrow-alt" />
                  Popovers &amp; Tooltips
                </a>
              </li>
              <li>
                <a href="component-progress-bars.html">
                  <i className="bx bx-right-arrow-alt" />
                  Progress
                </a>
              </li>
              <li>
                <a href="component-spinners.html">
                  <i className="bx bx-right-arrow-alt" />
                  Spinners
                </a>
              </li>
              <li>
                <a href="component-notifications.html">
                  <i className="bx bx-right-arrow-alt" />
                  Notifications
                </a>
              </li>
              <li>
                <a href="component-avtars-chips.html">
                  <i className="bx bx-right-arrow-alt" />
                  Avatrs &amp; Chips
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bx bx-repeat" />
              </div>
              <div className="menu-title">Content</div>
            </a>
            <ul>
              <li>
                <a href="content-grid-system.html">
                  <i className="bx bx-right-arrow-alt" />
                  Grid System
                </a>
              </li>
              <li>
                <a href="content-typography.html">
                  <i className="bx bx-right-arrow-alt" />
                  Typography
                </a>
              </li>
              <li>
                <a href="content-text-utilities.html">
                  <i className="bx bx-right-arrow-alt" />
                  Text Utilities
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bx bx-donate-blood" />
              </div>
              <div className="menu-title">Icons</div>
            </a>
            <ul>
              <li>
                <a href="icons-line-icons.html">
                  <i className="bx bx-right-arrow-alt" />
                  Line Icons
                </a>
              </li>
              <li>
                <a href="icons-boxicons.html">
                  <i className="bx bx-right-arrow-alt" />
                  Boxicons
                </a>
              </li>
              <li>
                <a href="icons-feather-icons.html">
                  <i className="bx bx-right-arrow-alt" />
                  Feather Icons
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-label">Forms &amp; Tables</li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bx bx-message-square-edit" />
              </div>
              <div className="menu-title">Forms</div>
            </a>
            <ul>
              <li>
                <a href="form-elements.html">
                  <i className="bx bx-right-arrow-alt" />
                  Form Elements
                </a>
              </li>
              <li>
                <a href="form-input-group.html">
                  <i className="bx bx-right-arrow-alt" />
                  Input Groups
                </a>
              </li>
              <li>
                <a href="form-layouts.html">
                  <i className="bx bx-right-arrow-alt" />
                  Forms Layouts
                </a>
              </li>
              <li>
                <a href="form-validations.html">
                  <i className="bx bx-right-arrow-alt" />
                  Form Validation
                </a>
              </li>
              <li>
                <a href="form-wizard.html">
                  <i className="bx bx-right-arrow-alt" />
                  Form Wizard
                </a>
              </li>
              <li>
                <a href="form-text-editor.html">
                  <i className="bx bx-right-arrow-alt" />
                  Text Editor
                </a>
              </li>
              <li>
                <a href="form-file-upload.html">
                  <i className="bx bx-right-arrow-alt" />
                  File Upload
                </a>
              </li>
              <li>
                <a href="form-date-time-pickes.html">
                  <i className="bx bx-right-arrow-alt" />
                  Date Pickers
                </a>
              </li>
              <li>
                <a href="form-select2.html">
                  <i className="bx bx-right-arrow-alt" />
                  Select2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bx bx-grid-alt" />
              </div>
              <div className="menu-title">Tables</div>
            </a>
            <ul>
              <li>
                <a href="table-basic-table.html">
                  <i className="bx bx-right-arrow-alt" />
                  Basic Table
                </a>
              </li>
              <li>
                <a href="table-datatable.html">
                  <i className="bx bx-right-arrow-alt" />
                  Data Table
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-label">Pages</li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bx bx-lock" />
              </div>
              <div className="menu-title">Authentication</div>
            </a>
            <ul>
              <li>
                <a href="authentication-signin.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Sign In
                </a>
              </li>
              <li>
                <a href="authentication-signup.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="authentication-signin-with-header-footer.html"
                  target="_blank"
                >
                  <i className="bx bx-right-arrow-alt" />
                  Sign In with Header &amp; Footer
                </a>
              </li>
              <li>
                <a
                  href="authentication-signup-with-header-footer.html"
                  target="_blank"
                >
                  <i className="bx bx-right-arrow-alt" />
                  Sign Up with Header &amp; Footer
                </a>
              </li>
              <li>
                <a href="authentication-forgot-password.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Forgot Password
                </a>
              </li>
              <li>
                <a href="authentication-reset-password.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Reset Password
                </a>
              </li>
              <li>
                <a href="authentication-lock-screen.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Lock Screen
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="user-profile.html">
              <div className="parent-icon">
                <i className="bx bx-user-circle" />
              </div>
              <div className="menu-title">User Profile</div>
            </a>
          </li>
          <li>
            <a href="timeline.html">
              <div className="parent-icon">
                <i className="bx bx-video-recording" />
              </div>
              <div className="menu-title">Timeline</div>
            </a>
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bx bx-error" />
              </div>
              <div className="menu-title">Errors</div>
            </a>
            <ul>
              <li>
                <a href="errors-404-error.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  404 Error
                </a>
              </li>
              <li>
                <a href="errors-500-error.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  500 Error
                </a>
              </li>
              <li>
                <a href="errors-coming-soon.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Coming Soon
                </a>
              </li>
              <li>
                <a href="error-blank-page.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Blank Page
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="faq.html">
              <div className="parent-icon">
                <i className="bx bx-help-circle" />
              </div>
              <div className="menu-title">FAQ</div>
            </a>
          </li>
          <li>
            <a href="pricing-table.html">
              <div className="parent-icon">
                <i className="bx bx-diamond" />
              </div>
              <div className="menu-title">Pricing</div>
            </a>
          </li>
          <li className="menu-label">Charts &amp; Maps</li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bx bx-line-chart" />
              </div>
              <div className="menu-title">Charts</div>
            </a>
            <ul>
              <li>
                <a href="charts-apex-chart.html">
                  <i className="bx bx-right-arrow-alt" />
                  Apex
                </a>
              </li>
              <li>
                <a href="charts-chartjs.html">
                  <i className="bx bx-right-arrow-alt" />
                  Chartjs
                </a>
              </li>
              <li>
                <a href="charts-highcharts.html">
                  <i className="bx bx-right-arrow-alt" />
                  Highcharts
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bx bx-map-alt" />
              </div>
              <div className="menu-title">Maps</div>
            </a>
            <ul>
              <li>
                <a href="map-google-maps.html">
                  <i className="bx bx-right-arrow-alt" />
                  Google Maps
                </a>
              </li>
              <li>
                <a href="map-vector-maps.html">
                  <i className="bx bx-right-arrow-alt" />
                  Vector Maps
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-label">Others</li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bx bx-menu" />
              </div>
              <div className="menu-title">Menu Levels</div>
            </a>
            <ul>
              <li>
                <a className="has-arrow" href="javascript:;">
                  <i className="bx bx-right-arrow-alt" />
                  Level One
                </a>
                <ul>
                  <li>
                    <a className="has-arrow" href="javascript:;">
                      <i className="bx bx-right-arrow-alt" />
                      Level Two
                    </a>
                    <ul>
                      <li>
                        <a href="javascript:;">
                          <i className="bx bx-right-arrow-alt" />
                          Level Three
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://codervent.com/rukada/documentation/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <div className="parent-icon">
                <i className="bx bx-folder" />
              </div>
              <div className="menu-title">Documentation</div>
            </a>
          </li>
          <li>
            <a
              href="https://themeforest.net/user/codervent"
              target="_blank"
              rel="noreferrer"
            >
              <div className="parent-icon">
                <i className="bx bx-support" />
              </div>
              <div className="menu-title">Support</div>
            </a>
          </li>
        </ul>
        {/*end navigation*/}
      </div>
    </>
  );
};

export default Sidebar;
