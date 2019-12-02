import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { forgot } from "../../redux/actions";

class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fmail: ''
    }
    this.onChangeFmail = this.onChangeFmail.bind(this);
  }

  onChangeFmail = (evt) => {
    this.setState({ fmail: evt.target.value });
  }

  componentDidUpdate = () => {
    
  }

  activateEmail = () => {
    if (this.state.fmail == "") {
      alert("Email is required");
      return;
    }
    const userObject = {
      email: this.state.fmail,
    };
    this.props.forgot(userObject);
  };

  render() {
    return (
      <div className="signin-wrapper">
        <div className="signin-box signup">
          <h2 className="slim-logo">
            <Link to="/index">
              <img src={require("../../img/frontegg-logo.png")} alt="logo" />
            </Link>
          </h2>

          <h2 className="signin-title-primary">Forgot Password</h2>
          <h3 className="signin-title-secondary">Please enter the email of your account</h3>

          <div className="form-group">
            <input
              value={this.state.fmail}
              onChange={this.onChangeFmail}
              type="text"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          {/* <Link to="/reset"> */}
          <button
            className="btn btn-primary btn-block btn-signin"
            onClick={this.activateEmail}>
            Sent Activation Details
          </button>
          {/* </Link> */}

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // user: state.user
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  forgot: user_information => dispatch(forgot(user_information))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
