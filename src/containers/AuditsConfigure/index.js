import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class AuditsConfigure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      checked: false,
      stepsHistory: { 1: true, 2: false }
    };
  }

  toogleFunc = () => {
    this.setState({
      toggle: !this.state.toggle,
      stepsHistory: { ...this.state.stepsHistory, 2: true }
    });
    console.table(this.state.toggle);
  };

  handleChange = checked => {
    this.setState({ checked });
  };

  renderDataSource() {
    return (
      <section className="body">
        <div className="row display-block">
          <label className="section-title">Data Source Type</label>
          <p className="mg-b-20 mg-sm-b-40">
            Select the source for the data for this component
          </p>
        </div>
        <div className="card-columns card-columns-2 mg-t-0">
          <div className="card card-body pd-25 tx-center">
            <div className="card-icon-wrapper success">
              <img
                src={require("../../img/frontegg-cloud.png")}
                className="wd-60"
                alt=""
              />
            </div>
            <h5 className="tx-gray-800 mg-b-25">Frontegg Cloud</h5>
            <p className="mg-b-25">
              The data will be stored on Frontegg's high redundant and scaleable
              storage
            </p>
            <Link to="" className="btn btn-success btn-block">
              Select
            </Link>
          </div>
          <div className="card card-body pd-25 tx-center">
            <div className="card-icon-wrapper success">
              <img
                src={require("../../img/mongodb.svg")}
                className="wd-60"
                alt=""
              />
            </div>
            <h5 className="tx-gray-800 mg-b-25">MongoDB</h5>
            <p className="mg-b-25">
              The data will be stored in your MongoDB data source, never leaving
              your hosts
            </p>
            <Link to="" className="btn btn-success btn-block">
              Select
            </Link>
          </div>
          <div className="card card-body pd-25 tx-center">
            <div className="card-icon-wrapper success">
              <img
                src={require("../../img/firebase.svg")}
                className="wd-40"
                alt=""
              />
            </div>
            <h5 className="tx-gray-800 mg-b-25">Firebase</h5>
            <p className="mg-b-25">
              The data will be stored in your Furebase data source, never
              leaving your hosts
            </p>
            <Link to="" className="btn btn-success btn-block">
              Select
            </Link>
          </div>
          <div className="card card-body pd-25 tx-center">
            <div className="card-icon-wrapper success">
              <img
                src={require("../../img/icon-apis.svg")}
                className="wd-60"
                alt=""
              />
            </div>
            <h5 className="tx-gray-800 mg-b-25">App APIs</h5>
            <p className="mg-b-25">
              The data will be stored in your backend. Just provide CRUD APIs to
              access it.
            </p>
            <Link to="" className="btn btn-success btn-block">
              Select
            </Link>
          </div>
        </div>
      </section>
    );
  }

  renderDataColumns() {
    return (
      <section className="body">
        <div className="row">
          <div className="col-lg-8">
            <p className="mg-b-20 mg-sm-b-40">
              We've added the suggested columns for this entity, feel free to
              remove columns or add your own
            </p>
          </div>
          <div className="col-lg-4">
            <Link to="" className="btn btn-primary btn-block mg-b-10">
              Add New Column
            </Link>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table tbl-columns mg-b-0 tx-12">
            <thead>
              <tr className="tx-10">
                <th className="pd-y-5">Name</th>
                <th className="pd-y-5">Properties</th>
                <th className="pd-y-5">UI</th>
                <th className="pd-y-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="" className="tx-inverse tx-14 tx-medium d-block">
                    ID
                  </Link>
                  <span className="tx-11 d-block">id (Unique)</span>
                </td>
                <td className="tx-12">
                  <p>
                    <span className="square-8 bg-primary mg-r-5 rounded-circle" />{" "}
                    Type: Numeric Identifier
                  </p>
                  <p>
                    <span className="square-8 bg-primary mg-r-5 rounded-circle" />{" "}
                    Unique Value
                  </p>
                </td>
                <td>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    UI Type: ID
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Sortable: Yes
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Filterable: Yes
                  </p>
                </td>
                <td>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon mr-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="More Info">
                    <div className="tx-20">
                      <i className="icon fa fa-info" />
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon ml-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete">
                    <div className="tx-20">
                      <i className="icon fa fa-trash-alt" />
                    </div>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="" className="tx-inverse tx-14 tx-medium d-block">
                    Time
                  </Link>
                  <span className="tx-11 d-block">time</span>
                </td>
                <td className="tx-12">
                  <p>
                    <span className="square-8 bg-primary mg-r-5 rounded-circle" />{" "}
                    Type: UTC Date Time
                  </p>
                </td>
                <td>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    UI Type: Date Time
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Sortable: Yes
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Filterable: Yes
                  </p>
                </td>
                <td>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon mr-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="More Info">
                    <div className="tx-20">
                      <i className="icon fa fa-info" />
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon ml-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete">
                    <div className="tx-20">
                      <i className="icon fa fa-trash-alt" />
                    </div>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="" className="tx-inverse tx-14 tx-medium d-block">
                    User
                  </Link>
                  <span className="tx-11 d-block">user (Reference)</span>
                </td>
                <td className="tx-12">
                  <p>
                    <span className="square-8 bg-primary mg-r-5 rounded-circle" />{" "}
                    Type: Reference
                  </p>
                  <p>
                    <span className="square-8 bg-primary mg-r-5 rounded-circle" />{" "}
                    Source: Users
                  </p>
                </td>
                <td>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    UI Type: User Link
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Sortable: Yes
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Filterable: Yes
                  </p>
                </td>
                <td>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon mr-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="More Info">
                    <div className="tx-20">
                      <i className="icon fa fa-info" />
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon ml-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete">
                    <div className="tx-20">
                      <i className="icon fa fa-trash-alt" />
                    </div>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="" className="tx-inverse tx-14 tx-medium d-block">
                    Resource
                  </Link>
                  <span className="tx-11 d-block">resource</span>
                </td>
                <td className="tx-12">
                  <p>
                    <span className="square-8 bg-primary mg-r-5 rounded-circle" />{" "}
                    Type: Textual
                  </p>
                </td>
                <td>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    UI Type: Short Text
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Sortable: No
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Filterable: Yes
                  </p>
                </td>
                <td>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon mr-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="More Info">
                    <div className="tx-20">
                      <i className="icon fa fa-info" />
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon ml-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete">
                    <div className="tx-20">
                      <i className="icon fa fa-trash-alt" />
                    </div>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="" className="tx-inverse tx-14 tx-medium d-block">
                    Action
                  </Link>
                  <span className="tx-11 d-block">action</span>
                </td>
                <td className="tx-12">
                  <p>
                    <span className="square-8 bg-primary mg-r-5 rounded-circle" />{" "}
                    Type: Textual
                  </p>
                </td>
                <td>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    UI Type: Short Text
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Sortable: No
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Filterable: Yes
                  </p>
                </td>
                <td>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon mr-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="More Info">
                    <div className="tx-20">
                      <i className="icon fa fa-info" />
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon ml-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete">
                    <div className="tx-20">
                      <i className="icon fa fa-trash-alt" />
                    </div>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="" className="tx-inverse tx-14 tx-medium d-block">
                    IP Address
                  </Link>
                  <span className="tx-11 d-block">ip_address</span>
                </td>
                <td className="tx-12">
                  <p>
                    <span className="square-8 bg-primary mg-r-5 rounded-circle" />{" "}
                    Type: Textual
                  </p>
                </td>
                <td>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    UI Type: IP Address
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Sortable: No
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Filterable: Yes
                  </p>
                </td>
                <td>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon mr-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="More Info">
                    <div className="tx-20">
                      <i className="icon fa fa-info" />
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon ml-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete">
                    <div className="tx-20">
                      <i className="icon fa fa-trash-alt" />
                    </div>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="" className="tx-inverse tx-14 tx-medium d-block">
                    Severity
                  </Link>
                  <span className="tx-11 d-block">severity</span>
                </td>
                <td className="tx-12">
                  <p>
                    <span className="square-8 bg-primary mg-r-5 rounded-circle" />{" "}
                    Type: Severity
                  </p>
                </td>
                <td>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    UI Type: Severity
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Sortable: Yes
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Filterable: Yes
                  </p>
                </td>
                <td>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon mr-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="More Info">
                    <div className="tx-20">
                      <i className="icon fa fa-info" />
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon ml-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete">
                    <div className="tx-20">
                      <i className="icon fa fa-trash-alt" />
                    </div>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="" className="tx-inverse tx-14 tx-medium d-block">
                    Message
                  </Link>
                  <span className="tx-11 d-block">message</span>
                </td>
                <td className="tx-12">
                  <p>
                    <span className="square-8 bg-primary mg-r-5 rounded-circle" />{" "}
                    Type: Textual
                  </p>
                </td>
                <td>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    UI Type: Long Text
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Sortable: No
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Filterable: Yes
                  </p>
                </td>
                <td>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon mr-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="More Info">
                    <div className="tx-20">
                      <i className="icon fa fa-info" />
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon ml-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete">
                    <div className="tx-20">
                      <i className="icon fa fa-trash-alt" />
                    </div>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="" className="tx-inverse tx-14 tx-medium d-block">
                    Data
                  </Link>
                  <span className="tx-11 d-block">data</span>
                </td>
                <td className="tx-12">
                  <p>
                    <span className="square-8 bg-primary mg-r-5 rounded-circle" />{" "}
                    Type: Key-Value Collection
                  </p>
                </td>
                <td>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    UI Type: Key-Value List
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Sortable: No
                  </p>
                  <p>
                    <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                    Filterable: Yes
                  </p>
                </td>
                <td>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon mr-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="More Info">
                    <div className="tx-20">
                      <i className="icon fa fa-info" />
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-outline-light btn-icon ml-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete">
                    <div className="tx-20">
                      <i className="icon fa fa-trash-alt" />
                    </div>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  handleNavigate = () => {
    this.props.history.push("/dashboard/audits-manage");
  };

  render() {
    return (
      <div>
        <div className="section-wrapper mg-t-20">
          <div className="row">
            <div className="col-lg-12">
              <label className="section-title">Configuration</label>
              <p className="mg-b-20 mg-sm-b-40">
                This page contains the settings for your audits
              </p>
            </div>
          </div>

          <div id="wizard2" className="wizard clearfix">
            <div className="steps formtabs">
              <ul className="ulStepTabs">
                <li
                  className={
                    this.state.toggle
                      ? "current"
                      : this.state.stepsHistory[1] === true
                      ? "selected"
                      : "nonSelect"
                  }
                  onClick={this.state.toggle ? null : this.toogleFunc}>
                  <span className="number">1</span>Data Source
                </li>
                <li
                  className={
                    this.state.toggle
                      ? this.state.stepsHistory[2] === true
                        ? "selected"
                        : "nonSelect"
                      : "current"
                  }
                  onClick={this.state.toggle ? this.toogleFunc : null}>
                  <span className="number">2</span>Data Columns
                </li>
              </ul>
            </div>
            <div className="content clearfix">
              {this.state.toggle
                ? this.renderDataSource()
                : this.renderDataColumns()}
            </div>
          </div>
          <div className="formStepper">
            {!this.state.toggle && (
              <span className="enabledSpan" onClick={this.handleNavigate}>
                Finish
              </span>
            )}
          </div>
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
)(AuditsConfigure);
