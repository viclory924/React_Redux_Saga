import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// action creators
import { signup } from "../../redux/actions";

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fullname: '',
      email: '',
      password: '',
      confirm_password: '',
      set_fullname: false,
      set_email: false,
      set_password: false,
      set_confirm: false,
      set_user: false,
    }
    this.onChangeFullname = this.onChangeFullname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  signup = () => {
    if (this.state.fullname === "") {
      this.setState({
        set_fullname: true
      })
      return;
    }
    else if (this.state.set_fullname !== "") {
      this.setState({
        set_fullname: false
      })
    }
    if (this.state.email === "") {
      this.setState({
        set_email: true
      })
      return;
    }
    else if (this.state.set_email !== "") {
      this.setState({
        set_email: false
      })
    }
    if (this.state.password === "") {
      this.setState({
        set_password: true
      })
      return;
    }
    else if (this.state.set_password !== "") {
      this.setState({
        set_password: false
      })
    }
    if (this.state.password !== this.state.confirm_password) {
      this.setState({
        set_confirm: true
      })
      return;
    }
    else if (this.state.set_confirm !== "") {
      this.setState({
        set_confirm: false
      })
    }
    const adminDetails = {
      name: this.state.fullname,
      email: this.state.email,
      password: this.state.password
    };
    this.props.signup(adminDetails);
    setTimeout(() => {
      if (this.props.auth.stoken != "" && this.props.auth.stoken != null) {
        localStorage.setItem(`navOpenKeys`, this.props.auth.stoken)
        this.props.history.push(
          {
            pathname: "/onboarding",
            state: {
              name: this.state.fullname,
              email: this.state.email,
              password: this.state.password
            }
          }
        );
      } else {
        this.setState({
          set_user: true
        })
      }
    }, 4000);
  };

  keyPress(e) {
    if (e.keyCode == 13) {

      if (this.state.fullname === "") {
        this.setState({
          set_fullname: true
        })
        return;
      }
      else if (this.state.set_fullname !== "") {
        this.setState({
          set_fullname: false
        })
      }
      if (this.state.email === "") {
        this.setState({
          set_email: true
        })
        return;
      }
      else if (this.state.set_email !== "") {
        this.setState({
          set_email: false
        })
      }
      if (this.state.password === "") {
        this.setState({
          set_password: true
        })
        return;
      }
      else if (this.state.set_password !== "") {
        this.setState({
          set_password: false
        })
      }
      if (this.state.password !== this.state.confirm_password) {
        this.setState({
          set_confirm: true
        })
        return;
      }
      else if (this.state.set_confirm !== "") {
        this.setState({
          set_confirm: false
        })
      }
      const adminDetails = {
        name: this.state.fullname,
        email: this.state.email,
        password: this.state.password
      };
      this.props.signup(adminDetails);
      setTimeout(() => {
        if (this.props.auth.stoken != "" && this.props.auth.stoken != null) {
          localStorage.setItem(`navOpenKeys`, this.props.auth.stoken)
          this.props.history.push(
            {
              pathname: "/onboarding",
              state: {
                name: this.state.fullname,
                email: this.state.email,
                password: this.state.password
              }
            }
          );
        } else {
          this.setState({
            set_user: true
          })
        }
      }, 4000);
    }
  }

  componentWillUnmount() {
    window.location.reload()
  }

  onChangeFullname = (evt) => {
    this.setState({ fullname: evt.target.value });
  }

  onChangeEmail = (evt) => {
    this.setState({ email: evt.target.value });
  }

  onChangePassword = (evt) => {
    this.setState({ password: evt.target.value });
  }

  onChangeConfirmPassword = (evt) => {
    this.setState({ confirm_password: evt.target.value });
  }



  render() {
    return (
      <div className="signin-wrapper">
        <div className="signin-box signup">
          <h2 className="slim-logo">
            <Link to="/index">
              <img src={require("../../img/frontegg-logo.png")} alt="logo" />
            </Link>
          </h2>
          <h3 className="signin-title-primary">Get Started!</h3>
          <h5 className="signin-title-secondary lh-4">
            It's free to signup and only takes a minute.
          </h5>

          <div className="row row-xs mg-b-10">
            <div className="col-sm">
              <input
                value={this.state.fullname}
                onChange={this.onChangeFullname}
                onKeyDown={this.keyPress}
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
            <div className="col-sm mg-t-10 mg-sm-t-0">
              <input
                value={this.state.email}
                onChange={this.onChangeEmail}
                onKeyDown={this.keyPress}
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="row row-xs mg-b-10">
            <div className="col-sm">
              <input
                value={this.state.password}
                onChange={this.onChangePassword}
                onKeyDown={this.keyPress}
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="col-sm mg-t-10 mg-sm-t-0">
              <input
                value={this.state.confirm_password}
                onChange={this.onChangeConfirmPassword}
                onKeyDown={this.keyPress}
                type="password"
                className="form-control"
                placeholder="Repeat Password"
              />
            </div>
          </div>
          {/* <Link to="/onboarding"> */}
          <button className="btn btn-primary btn-block btn-signin"
            onClick={this.signup}>
            Sign Up
            </button>
          {/* </Link> */}
          {this.state.set_fullname ? <div><p className="signup_fail">Please input Full Name</p></div> : null}
          {this.state.set_email ? <div><p className="signup_fail">Please input Email</p></div> : null}
          {this.state.set_password ? <div><p className="signup_fail">Please input Password</p></div> : null}
          {this.state.set_confirm ? <div><p className="signup_fail">Please Repeat password correctly</p></div> : null}
          {this.state.set_user ? <div><p className="signup_fail">User already exists</p></div> : null}

          <div className="signup-separator">
            <span>or signup using</span>
          </div>
          {/* <Link to="/onboarding"> */}
          <button className="btn btn-google btn-block">
            Sign Up Using Google
            </button>
          {/* </Link> */}
          <p className="mg-t-40 mg-b-0">
            Already have an account? <Link to="/">Sign In</Link>
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
  signup: user_information => dispatch(signup(user_information))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
