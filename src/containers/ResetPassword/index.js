import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// action creators
import { reset } from "../../redux/actions";

class ResetPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      token: '',
      confirm_password: ''
    }
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
  }

  componentDidMount(){
    var full_url = window.location.href
    var fir_equ = full_url.indexOf("=");
    var amb = full_url.indexOf("&");
    var url_email = full_url.slice(fir_equ+1, amb);
    var url_token = full_url.slice(amb+7);
    this.setState({
      email: url_email,
      token: url_token
    })
  }

  componentDidUpdate = () => {
    if (this.props.auth.user === true){
      this.props.history.push("/");
    }
  }

  onChangePassword = (evt) => {
    this.setState({ password: evt.target.value });
  }

  onChangeConfirmPassword = (evt) => {
    this.setState({ confirm_password: evt.target.value });
  }

  reset = () => {
    if (this.state.password === "") {
      alert("password is required");
      return;
    }
    if (this.state.confirm_password === "") {
      alert("confirm_password is required");
      return;
    }
    if (this.state.password !== this.state.confirm_password) {
      alert("password confirmation failed")
      return;
    }
    const userObject = {
      email: this.state.email,
      tokon: this.state.token,
      password: this.state.password
    };
    this.props.reset(userObject);
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

          <h2 className="signin-title-primary">Reset Password</h2>
          <h3 className="signin-title-secondary">Please pick a new password for your account</h3>

          <div className="form-group">
            <input
              value={this.state.password}
              onChange={this.onChangePassword}
              type="password"
              className="form-control"
              placeholder="New Password"
            />
          </div>
          <div className="form-group mg-b-50">
            <input
              value={this.state.confirm_password}
              onChange={this.onChangeConfirmPassword}
              type="password"
              className="form-control"
              placeholder="Repeat New Password"
            />
          </div>
            <button
              className="btn btn-primary btn-block btn-signin"
              onClick={this.reset}>
              Reset Password
          </button>

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
  reset: user_information => dispatch(reset(user_information))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
