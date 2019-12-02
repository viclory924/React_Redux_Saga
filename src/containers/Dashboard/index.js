import React from "react";
import { Link, Switch, Route } from "react-router-dom";

// containers
import OverView from "../OverView";
import ConfigureComponent from "../ConfigureComponent";
import NewComponent from "../NewComponent";
import AppEdit from "../AppEdit";
import AuditsApi from "../AuditsApi";
import AuditsConfigure from "../AuditsConfigure";
import AuditsManage from "../AuditsManage";
import AuditsUi from "../AuditsUi";
import Customers from "../Customers";
import Settings from "../Settings";
import Users from "../Users";
// components
import Navbar from "../../components/Navbar";
import SideMenu from "../../components/SideMenu";
import Footer from "../../components/Footer";

export default class Dashboard extends React.Component {
  state = {
    showSidebar: false
  };

  // componentDidMount = () => {
  //   console.log("okay");
  //   window.onpopstate = (e) => {
  //     e.preventDefault();
  //     this.props.history.push("/onboarding");
  //   }
  // }

  render() {
    const path = this.props.location.pathname.replace("-", " ");
    const crumbs = path.split("/");
    return (
      <div className={`${this.state.showSidebar ? "show-sidebar" : ""}`}>
        <div className="slim-header with-sidebar">
          <Navbar
            {...this.props}
            toggleSidebar={() =>
              this.setState(prevState => {
                return {
                  showSidebar: !prevState.showSidebar
                };
              })
            }
          />
        </div>

        <div className="slim-body">
          <div className="sidemenu-placeholder">
            <SideMenu {...this.props} />
          </div>

          <div className="slim-mainpanel">
            <div className="container">
              <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                  {crumbs.slice(1, -1).map((crumb, key) => {
                    return (
                      <li key={key} className="breadcrumb-item">
                        <Link to={crumbs.slice(0, key + 2).join("/")}>
                          {crumb.charAt(0).toUpperCase() + crumb.substr(1)}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="breadcrumb-item">
                    <Link to={this.props.location.pathname}>
                      {crumbs[crumbs.length - 1].charAt(0).toUpperCase() +
                        crumbs[crumbs.length - 1].substr(1)}
                    </Link>
                  </li>
                </ol>
                <h6 className="slim-pagetitle">{crumbs[crumbs.length - 1]}</h6>
              </div>

              <Switch>
                <Route exact path="/dashboard/home" component={OverView} />
                <Route
                  exact
                  path="/dashboard/configure-component"
                  component={ConfigureComponent}
                />
                <Route
                  exact
                  path="/dashboard/new-component"
                  component={NewComponent}
                />
                <Route exact path="/dashboard/app-edit" component={AppEdit} />
                <Route
                  exact
                  path="/dashboard/audits-api"
                  component={AuditsApi}
                />
                <Route
                  exact
                  path="/dashboard/audits-configure"
                  component={AuditsConfigure}
                />
                <Route
                  exact
                  path="/dashboard/audits-manage"
                  component={AuditsManage}
                />
                <Route exact path="/dashboard/audits-ui" component={AuditsUi} />
                <Route
                  exact
                  path="/dashboard/customers"
                  component={Customers}
                />
                <Route exact path="/dashboard/settings" component={Settings} />
                <Route exact path="/dashboard/users" component={Users} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
