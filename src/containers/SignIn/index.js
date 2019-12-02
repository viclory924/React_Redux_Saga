import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import '../../styles/css/custom.css';

// action creators
import { login } from "../../redux/actions";

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      time: Date.now()
    }
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  login = () => {
    const userObject = {
      email: this.state.email,
      password: this.state.password
      // email: "eve.holt@reqres.in",
      // password: "cityslicka"
    };
    this.props.login(userObject);
  };

  keyPress(e) {
    if (e.keyCode == 13) {
      const userObject = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.login(userObject);
    }
  }

  componentDidUpdate = () => {
    if (this.props.auth.token != "" && this.props.auth.token != null) {
      console.log("aooooooooooooooo", this.props.auth.username)
      this.props.history.push(
        {
          pathname: "/dashboard",
          // state: {
          //   name: this.state.fullname,
          //   email: this.state.email,
          //   password: this.state.password
          // }
        }
      );
    }
  }

  componentWillUnmount() {
    window.location.reload()
  }

  onChangeEmail = (evt) => {
    this.setState({ email: evt.target.value });
  }

  onChangePassword = (evt) => {
    this.setState({ password: evt.target.value });
  }

  render() {
    return (
      <div className="signin-wrapper">
        <div className="signin-box">
          <h2 className="slim-logo">
            <Link to="/">
              <img src={require("../../img/frontegg-logo.png")} alt="logo" />
            </Link>
          </h2>
          <h2 className="signin-title-primary">Welcome back!</h2>
          <h3 className="signin-title-secondary">Sign-in to continue.</h3>
          <div className="form-group">
            <input
              value={this.state.email}
              onChange={this.onChangeEmail}
              onKeyDown={this.keyPress}
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group mg-b-50">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.onChangePassword}
              onKeyDown={this.keyPress}
            />
          </div>
          {this.props.auth.LOGIN_FAILED ? <div><p className="login_fail">Please input correct email and password</p></div> : null}
          {/* <Link to="/onboarding"> */}
          <button
            className="btn btn-primary btn-block btn-signin"
            onClick={this.login}>
            Sign In
          </button>
          {/* </Link> */}
          <p className="mg-b-0">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
          <p className="mg-b-0">
            Forgot your password? <Link to="/forgot">Click Here</Link>
          </p>
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
  login: user_information => dispatch(login(user_information))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

