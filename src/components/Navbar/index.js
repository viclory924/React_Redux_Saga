import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  const [menuIndex, setMenuIndex] = useState(0);

  return (
    <div className="container-fluid" onBlur={() => setMenuIndex(0)}>
      <div className="slim-header-left">
        <h2 className="slim-logo">
          <Link to="/dashboard/home">
            <img
              src={require("../../img/frontegg-logo.png")}
              alt="placeholder"
            />
          </Link>
        </h2>
        <div
          id="slimSidebarMenu"
          onClick={() => props.toggleSidebar()}
          className="slim-sidebar-menu">
          <span />
        </div>
        <div className="search-box">
          <input type="text" className="form-control" placeholder="Search" />
          <button className="btn btn-primary">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
      <div className="slim-header-right">
        <div
          onClick={() => setMenuIndex(1)}
          className={
            menuIndex === 1 ? "dropdown dropdown-a show" : "dropdown dropdown-a"
          }
          data-toggle="tooltip"
          title="Activity Logs">
          <Link to="#" className="header-notification" data-toggle="dropdown">
            <i className="icon ion-ios-bolt-outline" />
          </Link>
          <div
            className={menuIndex === 1 ? "dropdown-menu show" : "dropdown-menu"}
            style={{
              position: "absolute",
              willChange: "transform",
              top: "0px",
              left: "0px"
            }}>
            <div className="dropdown-menu-header">
              <h6 className="dropdown-menu-title">Activity Logs</h6>
              <div>
                <Link to="">Filter List</Link>
                <Link to="">Settings</Link>
              </div>
            </div>
            <div className="dropdown-activity-list">
              <div className="activity-label">Today, December 13, 2017</div>
              <div className="activity-item">
                <div className="row no-gutters">
                  <div className="col-2 tx-right">10:15am</div>
                  <div className="col-2 tx-center">
                    <span className="square-10 bg-success" />
                  </div>
                  <div className="col-8">
                    Purchased christmas sale cloud storage
                  </div>
                </div>
              </div>
              <div className="activity-item">
                <div className="row no-gutters">
                  <div className="col-2 tx-right">9:48am</div>
                  <div className="col-2 tx-center">
                    <span className="square-10 bg-danger" />
                  </div>
                  <div className="col-8">Login failure</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="row no-gutters">
                  <div className="col-2 tx-right">7:29am</div>
                  <div className="col-2 tx-center">
                    <span className="square-10 bg-warning" />
                  </div>
                  <div className="col-8">(D:) Storage almost full</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="row no-gutters">
                  <div className="col-2 tx-right">3:21am</div>
                  <div className="col-2 tx-center">
                    <span className="square-10 bg-success" />
                  </div>
                  <div className="col-8">
                    1 item sold <strong>Christmas bundle</strong>
                  </div>
                </div>
              </div>
              <div className="activity-label">Yesterday, December 12, 2017</div>
              <div className="activity-item">
                <div className="row no-gutters">
                  <div className="col-2 tx-right">6:57am</div>
                  <div className="col-2 tx-center">
                    <span className="square-10 bg-success" />
                  </div>
                  <div className="col-8">
                    Earn new badge <strong>Elite Author</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown-list-footer">
              <Link to="page-activity.html">
                <i className="fa fa-angle-down" /> Show All Activities
              </Link>
            </div>
          </div>
        </div>

        <div
          onClick={() => setMenuIndex(2)}
          className={
            menuIndex === 2 ? "dropdown dropdown-b show" : "dropdown dropdown-b"
          }
          data-toggle="tooltip"
          title="Notifications">
          <Link to="#" className="header-notification" data-toggle="dropdown">
            <i className="icon ion-ios-bell-outline" />
            <span className="indicator" />
          </Link>
          <div
            className={menuIndex === 2 ? "dropdown-menu show" : "dropdown-menu"}
            style={{
              position: "absolute",
              willChange: "transform",
              top: "0px",
              left: "0px"
            }}>
            <div className="dropdown-menu-header">
              <h6 className="dropdown-menu-title">Notifications</h6>
              <div>
                <Link to="">Mark All as Read</Link>
                <Link to="">Settings</Link>
              </div>
            </div>
            <div className="dropdown-list">
              <Link to="" className="dropdown-link">
                <div className="media">
                  <img
                    src="http://via.placeholder.com/500x500"
                    alt="placeholder"
                  />
                  <div className="media-body">
                    <p>
                      <strong>Suzzeth Bungaos</strong> tagged you and 18 others
                      in a post.
                    </p>
                    <span>October 03, 2017 8:45am</span>
                  </div>
                </div>
              </Link>

              <Link to="" className="dropdown-link">
                <div className="media">
                  <img
                    src="http://via.placeholder.com/500x500"
                    alt="placeholder"
                  />
                  <div className="media-body">
                    <p>
                      <strong>Mellisa Brown</strong> appreciated your work{" "}
                      <strong>The Social Network</strong>
                    </p>
                    <span>October 02, 2017 12:44am</span>
                  </div>
                </div>
              </Link>
              <Link to="" className="dropdown-link read">
                <div className="media">
                  <img
                    src="http://via.placeholder.com/500x500"
                    alt="placeholder"
                  />
                  <div className="media-body">
                    <p>
                      20+ new items added are for sale in your{" "}
                      <strong>Sale Group</strong>
                    </p>
                    <span>October 01, 2017 10:20pm</span>
                  </div>
                </div>
              </Link>
              <Link to="" className="dropdown-link read">
                <div className="media">
                  <img
                    src="http://via.placeholder.com/500x500"
                    alt="placeholder"
                  />
                  <div className="media-body">
                    <p>
                      <strong>Julius Erving</strong> wants to connect with you
                      on your conversation with <strong>Ronnie Mara</strong>
                    </p>
                    <span>October 01, 2017 6:08pm</span>
                  </div>
                </div>
              </Link>
              <div className="dropdown-list-footer">
                <Link to="page-notifications.html">
                  <i className="fa fa-angle-down" /> Show All Notifications
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => setMenuIndex(3)}
          className={
            menuIndex === 3 ? "dropdown dropdown-c show" : "dropdown dropdown-c"
          }>
          <Link to="#" className="logged-user" data-toggle="dropdown">
            <img src="http://via.placeholder.com/500x500" alt="placeholder" />
            <span>Katherine</span>
            <i className="fa fa-angle-down" />
          </Link>
          <div
            className={
              menuIndex === 3
                ? "dropdown-menu dropdown-menu-right show"
                : "dropdown-menu dropdown-menu-right"
            }>
            <nav className="nav">
              <Link to="page-profile.html" className="nav-link">
                <i className="icon ion-person" /> View Profile
              </Link>
              <Link to="page-edit-profile.html" className="nav-link">
                <i className="icon ion-compose" /> Edit Profile
              </Link>
              <Link to="page-activity.html" className="nav-link">
                <i className="icon ion-ios-bolt" /> Activity Log
              </Link>
              <Link to="page-settings.html" className="nav-link">
                <i className="icon ion-ios-gear" /> Account Settings
              </Link>
              <Link to="" className="nav-link">
                <i className="icon ion-forward" /> Sign Out
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
