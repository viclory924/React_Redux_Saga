import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Customers extends Component {
	render() {
		return (
			<div className="section-wrapper mg-t-20">
				<div className="row">
					<div className="col-lg-8">
						<label className="section-title">
							A list of all customers you have in your account
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
								<input
									className="form-control mg-b-20"
									placeholder="Search for a customer..."
									type="text"
								/>
								<h6 className="slim-card-title">
									Total of 5 out of 100 customers
								</h6>
							</div>
							<div className="table-responsive">
								<table className="table mg-b-0 tx-12">
									<thead>
										<tr className="tx-10">
											<th className="wd-10p pd-y-5">&nbsp;</th>
											<th className="pd-y-5">Name</th>
											<th className="pd-y-5">Status</th>
											<th className="pd-y-5">Date Added</th>
											<th className="pd-y-5">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="pd-l-20">
												<img
													src={"http://via.placeholder.com/50?text=Logo"}
													className="wd-36 rounded-circle"
													alt="placeholder"
												/>
											</td>
											<td>
												<Link
													to=""
													className="tx-inverse tx-14 tx-medium d-block">
													Havaians Inc.
												</Link>
												<span className="tx-11 d-block">34K daily records</span>
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
													className="btn btn-outline-light btn-icon mr-1 ml-1"
													data-toggle="tooltip"
													data-placement="bottom"
													title="Users">
													<div className="tx-20">
														<i className="icon fa fa-users" />
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
											<td className="pd-l-20">
												<img
													src={"http://via.placeholder.com/50?text=Logo"}
													className="wd-36 rounded-circle"
													alt="placeholder"
												/>
											</td>
											<td>
												<Link
													to=""
													className="tx-inverse tx-14 tx-medium d-block">
													Coca Cola NYC
												</Link>
												<span className="tx-11 d-block">3K daily records</span>
											</td>
											<td className="tx-12">
												<span className="square-8 bg-warning mg-r-5 rounded-circle" />{" "}
												Suspended
											</td>
											<td>Apr 21, 2017 8:34am</td>
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
													className="btn btn-outline-light btn-icon mr-1 ml-1"
													data-toggle="tooltip"
													data-placement="bottom"
													title="Users">
													<div className="tx-20">
														<i className="icon fa fa-users" />
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
											<td className="pd-l-20">
												<img
													src={"http://via.placeholder.com/50?text=Logo"}
													className="wd-36 rounded-circle"
													alt="placeholder"
												/>
											</td>
											<td>
												<Link
													to=""
													className="tx-inverse tx-14 tx-medium d-block">
													Orange Inc
												</Link>
												<span className="tx-11 d-block">2K daily records</span>
											</td>
											<td className="tx-12">
												<span className="square-8 bg-success mg-r-5 rounded-circle" />{" "}
												Active
											</td>
											<td>Apr 10, 2017 4:40pm</td>
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
													className="btn btn-outline-light btn-icon mr-1 ml-1"
													data-toggle="tooltip"
													data-placement="bottom"
													title="Users">
													<div className="tx-20">
														<i className="icon fa fa-users" />
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
											<td className="pd-l-20">
												<img
													src={"http://via.placeholder.com/50?text=Logo"}
													className="wd-36 rounded-circle"
													alt="placeholder"
												/>
											</td>
											<td>
												<Link
													to=""
													className="tx-inverse tx-14 tx-medium d-block">
													Gracy and Chase
												</Link>
												<span className="tx-11 d-block">681 daily records</span>
											</td>
											<td className="tx-12">
												<span className="square-8 bg-warning mg-r-5 rounded-circle" />{" "}
												Suspended
											</td>
											<td>Apr 02, 2017 6:45pm</td>
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
													className="btn btn-outline-light btn-icon mr-1 ml-1"
													data-toggle="tooltip"
													data-placement="bottom"
													title="Users">
													<div className="tx-20">
														<i className="icon fa fa-users" />
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
											<td className="pd-l-20">
												<img
													src="http://via.placeholder.com/50?text=Logo"
													className="wd-36 rounded-circle"
													alt="placeholder"
												/>
											</td>
											<td>
												<Link
													to=""
													className="tx-inverse tx-14 tx-medium d-block">
													Mike Laurent LTD
												</Link>
												<span className="tx-11 d-block">no daily records</span>
											</td>
											<td className="tx-12">
												<span className="square-8 bg-pink mg-r-5 rounded-circle" />{" "}
												Pending Removal
											</td>
											<td>Mar 30, 2017 10:30am</td>
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
													className="btn btn-outline-light btn-icon mr-1 ml-1"
													data-toggle="tooltip"
													data-placement="bottom"
													title="Users">
													<div className="tx-20">
														<i className="icon fa fa-users" />
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
							<div className="card-footer tx-12 pd-y-15 bg-transparent">
								<Link to="">
									<i className="fa fa-angle-down mg-r-5" />
									Load more customers
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
  // user: state.user
});

const mapDispatchToProps = dispatch => ({
  // login: payload => dispatch(login(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
