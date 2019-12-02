import React, { Component } from "react";
import InputColor from "react-input-color";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Files from 'react-files'
import '../../styles/css/custom.css';
import { register } from "../../redux/actions";

const image2base64 = require('image-to-base64');


class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sname: '',
      semail: '',
      spassword: '',
      name: '',
      frontStack: { react: false, angular: false },
      backendStack: { node: false, python: false },
      primaryColor: '',
      secondColor: '',
      base64: '',
      drop_label: 'Choose or Drop',
      set_name: false,
      set_front: false,
      set_back: false
    };

    this.onChangename = this.onChangename.bind(this);
  }

  componentDidMount() {
    if (this.props.location.state == null) {
      this.props.history.push('/signup');
    } else {
      this.setState({ 
        sname: this.props.location.state.name,
        semail: this.props.location.state.email,
        spassword: this.props.location.state.password,
      })
    }
  }

  componentDidUpdate = () => {
    if (this.props.auth.apiKey != "" && this.props.auth.apiKey != null) {
      this.props.history.push("/dashboard");
    }
  }

  onChangename = (evt) => {
    this.setState({ name: evt.target.value });
  }

  handleprimaryColor = color => {
    this.setState({
      primaryColor: color.hex
    });
  };

  handlesecondColor = color => {
    this.setState({
      secondColor: color.hex
    });
  };

  onClickContinueBtn = () => {
    if (this.state.name === "") {
      this.setState({
        set_name: true
      })
      return;
    }
    else if (this.state.name !== "") {
      this.setState({
        set_name: false
      })
    }
    if (!this.state.frontStack.react && !this.state.frontStack.angular) {
      this.setState({
        set_front: true
      })
      return;
    }
    else
      this.setState({
        set_front: false
      })
    if (!this.state.backendStack.node && !this.state.backendStack.python) {
      this.setState({
        set_back: true
      })
      return;
    }
    else
      this.setState({
        set_back: false
      })
    const user_information = {
      name: this.state.name,
      frontendStack: this.state.frontStack.react ? "React" : "Angular",
      backendStack: this.state.backendStack.node ? "Node" : "Python",
      logo: this.state.base64,
      colors: {
        primary: this.state.primaryColor,
        secondary: this.state.secondColor
      },
      adminDetails: {
        name:this.state.sname,
        email:this.state.semail,
        password:this.state.spassword,
      }
    }
    this.props.register(user_information);
  }
  onFilesChange = (files) => {
    this.setState({
      drop_label: files[0].name
    });
    image2base64(files[0].preview.url)
      .then(
        (response) => {
          this.setState({
            base64: response
          });
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      )

    // files = null;
  }

  onFilesError = (error, file) => {
    console.log('error code ' + error.code + ': ' + error.message)
  }

  render() {
    return (
      <div className="signin-wrapper">
        <div className="signin-box onboarding">
          <h2 className="slim-logo">
            <a href="index.html">
              <img
                src={require("../../img/frontegg-logo.png")}
                alt="placeholder"
              />
            </a>
          </h2>
          <h3 className="signin-title-primary">Setup your Account!</h3>
          <h5 className="signin-title-secondary lh-4 mg-b-30">
            Few more details to continue into your Frontegg
          </h5>

          <div className="form-layout form-layout-7 mg-b-20">
            <div className="row no-gutters">
              <div className="col-5 col-sm-4">APPLICATION NAME</div>
              <div className="col-7 col-sm-8">
                <input
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangename}
                  type="text"
                  name="fullname"
                  placeholder="Enter your application name"
                />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-5 col-sm-4">Frontend Stack</div>
              <div className="col-7 col-sm-8">
                <div className="card-columns card-columns-2 mg-t-20">
                  <div
                    className={`card card-body pd-15 tx-center ${
                      this.state.frontStack.react === true
                        ? "selectCard"
                        : null
                      }`}>
                    <div className="card-icon-wrapper mg-b-0 ht-80">
                      <i className="icon fab fa-react" />
                    </div>
                    <h5 className="tx-gray-800 mg-b-25">ReactJS</h5>
                    <button
                      className="btn btn-primary btn-block"
                      onClick={() =>
                        this.state.frontStack.react === true
                          ? this.setState({ frontStack: { react: false, angular: true } })
                          : this.setState({ frontStack: { react: true, angular: false } })
                      }>
                      {this.state.frontStack.react === true
                        ? "Unselect"
                        : "Select"}
                    </button>
                  </div>

                  <div
                    className={`card card-body pd-15 tx-center ${
                      this.state.frontStack.angular === true
                        ? "selectCard"
                        : null
                      }`}>
                    <div className="card-icon-wrapper mg-b-0 ht-80">
                      <i className="icon fab fa-angular" />
                    </div>
                    <h5 className="tx-gray-800 mg-b-25">Angular</h5>
                    <button
                      className="btn btn-primary btn-block"
                      onClick={() =>
                        this.state.frontStack.angular === true
                          ? this.setState({ frontStack: { react: true, angular: false } })
                          : this.setState({ frontStack: { react: false, angular: true } })
                      }>
                      {this.state.frontStack.angular === true
                        ? "Unselect"
                        : "Select"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-5 col-sm-4">Backend Stack</div>
              <div className="col-7 col-sm-8">
                <div className="card-columns card-columns-2 mg-t-20">
                  <div
                    className={`card card-body pd-15 tx-center ${
                      this.state.backendStack.node === true
                        ? "selectCard"
                        : null
                      }`}>
                    <div className="card-icon-wrapper mg-b-0 ht-80">
                      <i className="icon fab fa-node" />
                    </div>
                    <h5 className="tx-gray-800 mg-b-25">NodeJS</h5>
                    <Link
                      to="#"
                      className="btn btn-primary btn-block"
                      onClick={() =>
                        this.state.backendStack.node === true
                          ? this.setState({ backendStack: { node: false, python: true } })
                          : this.setState({ backendStack: { node: true, python: false } })
                      }>
                      {this.state.backendStack.node === true
                        ? "Unselect"
                        : "Select"}
                    </Link>
                  </div>
                  <div
                    className={`card card-body pd-15 tx-center ${
                      this.state.backendStack.python === true
                        ? "selectCard"
                        : null
                      }`}>
                    <div className="card-icon-wrapper mg-b-0 ht-80">
                      <i className="icon fab fa-python" />
                    </div>
                    <h5 className="tx-gray-800 mg-b-25">Python</h5>
                    <Link
                      to="#"
                      className="btn btn-primary btn-block"
                      onClick={() =>
                        this.state.backendStack.python === true
                          ? this.setState({ backendStack: { node: true, python: false } })
                          : this.setState({ backendStack: { node: false, python: true } })
                      }>
                      {this.state.backendStack.python === true
                        ? "Unselect"
                        : "Select"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-5 col-sm-4">Upload Logo</div>
              <div className="col-7 col-sm-8">
                <div className="custom-file">
                  {/* <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                  /> */}
                  <label className="custom-file-label" htmlFor="customFile">
                    <Files
                      className='files-dropzone'
                      onChange={this.onFilesChange}
                      onError={this.onFilesError}
                      accepts={['image/png']}
                      multiple={false}
                      maxFileSize={10000000000000000000}
                      minFileSize={0}
                      clickable
                    >
                      {this.state.drop_label}
                    </Files>
                  </label>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-5 col-sm-4">Primary Color</div>
              <div className="col-7 col-sm-8">
                <InputColor
                  initialHexColor="#5e72e4"
                  onChange={this.handleprimaryColor}
                  placement="bottom"
                />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-5 col-sm-4">Secondary Color</div>
              <div className="col-7 col-sm-8">
                <InputColor
                  initialHexColor="#5e72e4"
                  onChange={this.handlesecondColor}
                  placement="bottom"
                />
              </div>
            </div>
          </div>
          {/* <Link to="/dashboard/configure-component"> */}
          <button className="btn btn-primary btn-block btn-signin" onClick={this.onClickContinueBtn}>
            Continue
            </button>
          {this.state.set_name ? <div><p className="onboarding_fail">Please input APPLICATION NAME</p></div> : null}
          {this.state.set_front ? <div><p className="onboarding_fail">Please select frontend stack</p></div> : null}
          {this.state.set_back ? <div><p className="onboarding_fail">Please select backend stack</p></div> : null}
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
  register: user_information => dispatch(register(user_information))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Onboarding);
