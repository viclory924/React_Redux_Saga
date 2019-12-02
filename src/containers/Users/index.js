import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SelectSearch from "react-select-search";
// action creators
import { GetUsers } from "../../redux/actions";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: this.props.users,
      user: ""
    };
  }
  componentDidMount() {
    this.props.usersAction();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      usersData: nextProps.users
    });
  }

  handleSelection = event => {
    let data;
    if (event.value !== "ac") {
      data = this.props.users.filter(menu => event.name === menu.company.name);
    } else {
      data = this.props.users;
    }

    this.setState({
      usersData: data,
      user: event.value
    });
  };

  render() {
    let options = this.props.users.map((data, index) => {
      return { name: data.company.name, value: data.company.name };
    });
    options.unshift({ name: "All Companies", value: "ac" });

    return (
      <div className="section-wrapper mg-t-20">
        <div className="row">
          <div className="col-lg-8">
            <label className="section-title">
              A list of all users you have in your account
            </label>
            <p className="mg-b-20 mg-sm-b-40">
              This list can either be updated from your push APIs or from this
              screen
            </p>
          </div>
          <div className="col-lg-4" />
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card card-table">
              <div className="card-header">
                <div className="input-group mg-b-20">
                  <SelectSearch
                    options={options}
                    name="company"
                    placeholder="Select a Company..."
                    multiple={false}
                    search={true}
                    onChange={e => this.handleSelection(e)}
                    value={this.state.user}
                  />
                  <input
                    type="text"
                    className="form-control mg-l-15 searchUser"
                    placeholder="Search for a user..."
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn bd bd-l-0 bg-white tx-gray-600"
                      type="button">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>

                <h6 className="slim-card-title">Total of 10 out of 30 users</h6>
              </div>
              <div className="table-responsive">
                <table className="table mg-b-0 tx-12">
                  <thead>
                    <tr className="tx-10">
                      <th className="wd-10p pd-y-5">&nbsp;</th>
                      <th className="pd-y-5">Name</th>
                      <th className="pd-y-5">Type</th>
                      <th className="pd-y-5">Date Added</th>
                      <th className="pd-y-5">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.usersData &&
                      this.state.usersData.map((data, index) => (
                        <tr key={data.name}>
                          <td className="pd-l-20">
                            <img
                              src={require("../../img/img1.jpg")}
                              className="wd-36 rounded-circle"
                              alt="placeholder"
                            />
                          </td>
                          <td>
                            <Link
                              to=""
                              className="tx-inverse tx-14 tx-medium d-block">
                              {data.name}
                            </Link>
                            <span className="tx-11 d-block">
                              {data.company.name}
                            </span>
                          </td>
                          <td className="tx-12">
                            <span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
                            Active
                          </td>
                          <td>Just Now</td>
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
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer tx-12 pd-y-15 bg-transparent">
                <Link to="">
                  <i className="fa fa-angle-down mg-r-5" />
                  Load more companies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  // login: payload => dispatch(login(payload))
  usersAction: () => dispatch(GetUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
