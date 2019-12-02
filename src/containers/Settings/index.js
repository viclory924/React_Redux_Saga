import React, { Component } from "react";
import InputColor from "react-input-color";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Settings extends Component {
  handleColor = color => {
    this.setState({ color });
  };

  render() {
    return (
      <div className="section-wrapper mg-t-20">
        <div className="form-layout form-layout-7 mg-b-20">
          <div className="row no-gutters">
            <div className="col-5 col-sm-4">Application Name</div>
            <div className="col-7 col-sm-8">
              <input
                className="form-control"
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
                <div className="card card-body pd-15 tx-center">
                  <div className="card-icon-wrapper mg-b-0 ht-80">
                    <i className="icon fab fa-react" />
                  </div>
                  <h5 className="tx-gray-800 mg-b-25">ReactJS</h5>
                  <Link to="#" className="btn btn-primary btn-block">
                    Select
                  </Link>
                </div>
                <div className="card card-body pd-15 tx-center">
                  <div className="card-icon-wrapper mg-b-0 ht-80">
                    <i className="icon fab fa-angular" />
                  </div>
                  <h5 className="tx-gray-800 mg-b-25">Angular</h5>
                  <Link to="#" className="btn btn-primary btn-block">
                    Select
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-5 col-sm-4">Backend Stack</div>
            <div className="col-7 col-sm-8">
              <div className="card-columns card-columns-2 mg-t-20">
                <div className="card card-body pd-15 tx-center">
                  <div className="card-icon-wrapper mg-b-0 ht-80">
                    <i className="icon fab fa-node" />
                  </div>
                  <h5 className="tx-gray-800 mg-b-25">NodeJS</h5>
                  <Link to="#" className="btn btn-primary btn-block">
                    Select
                  </Link>
                </div>
                <div className="card card-body pd-15 tx-center">
                  <div className="card-icon-wrapper mg-b-0 ht-80">
                    <i className="icon fab fa-python" />
                  </div>
                  <h5 className="tx-gray-800 mg-b-25">Python</h5>
                  <Link to="#" className="btn btn-primary btn-block">
                    Select
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-5 col-sm-4">Upload Logo</div>
            <div className="col-7 col-sm-8">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose or Drop
                </label>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-5 col-sm-4">Primary Color</div>
            <div className="col-7 col-sm-8">
              <InputColor
                initialHexColor="#5e72e4"
                onChange={this.handleColor}
                placement="bottom"
              />
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-5 col-sm-4">Secondary Color</div>
            <div className="col-7 col-sm-8">
              <InputColor
                initialHexColor="#5e72e4"
                onChange={this.handleColor}
                placement="bottom"
              />
            </div>
          </div>
        </div>
        <Link to="/dashboard/configure-component">
          <button className="btn btn-primary btn-block btn-signin">
            Continue
          </button>
        </Link>
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
)(Settings);
