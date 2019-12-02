import React, { Component } from "react";
//react router link
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ConfigureComponent extends Component {
  render() {
    return (
      <div className="row row-sm mg-t-20">
        <div className="card card-body pd-25 tx-center">
          <div className="card-icon-wrapper success">
            <i className="icon fa fa-plus" />
          </div>
          <h4 className="tx-gray-800 mg-b-25">
            Configure your First SaaS Component
          </h4>
          <p className="mg-b-25">
            In a few simple steps you can easily configure your first SaaS
            component using Frontegg's onboarding wizard. Manage your users,
            audits, events, subscriptions and more parts of your multi-tenant
            SaaS Portal.
          </p>
          <Link to="/dashboard/new-component" className="btn btn-success btn-block">
            Start Now
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // user: state.user
});

const mapDispatchToProps = dispatch => ({
  // login: payload => dispatch(login(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigureComponent);
