import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  Tooltip,
  Bar,
  AreaChart,
  Area
} from "recharts";
import { connect } from "react-redux";

class OverView extends Component {
  render() {
    let data = [
      { name: "Page A", uv: 400, pv: 200 },
      { name: "Page A", uv: 300, pv: 400 },
      { name: "Page A", uv: 230, pv: 400 },
      { name: "Page A", uv: 170, pv: 120 },
      { name: "Page A", uv: 400, pv: 100 },
      { name: "Page A", uv: 300, pv: 300 },
      { name: "Page A", uv: 230, pv: 270 },
      { name: "Page A", uv: 120, pv: 130 },
      { name: "Page A", uv: 100, pv: 120 },
      { name: "Page A", uv: 120, pv: 110 },
      { name: "Page A", uv: 30, pv: 120 },
      { name: "Page A", uv: 70, pv: 110 },
      { name: "Page A", uv: 100, pv: 120 },
      { name: "Page A", uv: 100, pv: 100 },
      { name: "Page A", uv: 30, pv: 50 },
      { name: "Page A", uv: 70, pv: 20 }
    ];

    let areaData = [
      { name: "Page A", uv: 30, pv: 120 },
      { name: "Page A", uv: 70, pv: 110 },
      { name: "Page A", uv: 100, pv: 120 },
      { name: "Page A", uv: 100, pv: 100 },
      { name: "Page A", uv: 30, pv: 50 },
      { name: "Page A", uv: 170, pv: 120 },
      { name: "Page A", uv: 120, pv: 130 },
      { name: "Page A", uv: 100, pv: 120 },
      { name: "Page A", uv: 120, pv: 110 },
      { name: "Page A", uv: 400, pv: 200 }
    ];
    return (
      <div>
        <div className="dash-headline">
          <div className="dash-headline-left">
            <div className="dash-headline-item-one">
              <div id="chartArea1" className="dash-chartist">
                <ResponsiveContainer>
                  <AreaChart data={areaData} margin={{}}>
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Area
                      type="monotone"
                      dataKey="pv"
                      stackId="1"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="dash-item-overlay">
                <h1>1,345,232 </h1>
                <p className="earning-label">Total records</p>
                <p className="earning-desc">
                  This contains the total amount of records managed on your
                  Frontegg account ...
                </p>
              </div>
            </div>
          </div>

          <div className="dash-headline-right">
            <div className="dash-headline-right-top">
              <div className="dash-headline-item-two">
                <div id="chartMultiBar1" className="chart-rickshaw">
                  <ResponsiveContainer>
                    <BarChart
                      width={400}
                      height={200}
                      data={data}
                      margin={{
                        top: 50
                        // right: 30
                        // left: 20,
                        // bottom: 5
                      }}>
                      <Bar dataKey="uv" fill="rgb(138, 198, 232)" />
                      <Bar dataKey="pv" fill="rgb(27, 132, 231)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="dash-item-overlay">
                  <h4>15,560</h4>
                  <p className="item-label">Daily Active Users</p>

                  <Link to="#" className="report-link">
                    View Users <i className="fa fa-angle-right mg-l-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="dash-headline-right-bottom">
              <div className="dash-headline-right-bottom-left">
                <div className="dash-headline-item-three">
                  <div id="sparkline3" className="sparkline">
                    <ResponsiveContainer>
                      <AreaChart data={areaData} margin={{}}>
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stackId="1"
                          stroke="#8884d8"
                          fill="#8884d8"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="graph">
                    <h3>29,931,213</h3>
                    <p className="item-label">Events</p>
                    <p className="item-desc">
                      Daily gathered from <br />5 applications
                    </p>
                  </div>
                </div>
              </div>
              <div className="dash-headline-right-bottom-right">
                <div className="dash-headline-item-three">
                  <div id="sparkline4" className="sparkline">
                    <ResponsiveContainer>
                      <AreaChart data={areaData} margin={{}}>
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="pv"
                          stackId="1"
                          stroke="#82ca9d"
                          fill="#82ca9d"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="graph">
                    <h3>45,231</h3>
                    <p className="item-label">Audit Logs</p>
                    <p className="item-desc">
                      Daily gathered from <br />3 applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-dash-one mg-t-20">
          <div className="row no-gutters">
            <div className="col-lg-3">
              <i className="icon ion-ios-analytics-outline" />
              <div className="dash-content">
                <label className="tx-primary">Tables</label>
                <h2>18</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <i className="icon ion-ios-pie-outline" />
              <div className="dash-content">
                <label className="tx-success">Dashboards</label>
                <h2>12</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <i className="icon ion-ios-stopwatch-outline" />
              <div className="dash-content">
                <label className="tx-purple">Reports</label>
                <h2>25</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <i className="icon ion-ios-world-outline" />
              <div className="dash-content">
                <label className="tx-danger">Timelines</label>
                <h2>6</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-sm mg-t-20">
          <div className="col-lg-4">
            <div className="card card-info">
              <div className="card-body pd-20">
                <div className="d-flex justify-content-center mg-b-30">
                  <img
                    src={require("../../img/icon1.svg")}
                    className="wd-100"
                    alt=""
                  />
                </div>
                <h5 className="tx-inverse mg-b-20">Configure New Component</h5>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia. Even the all-powerful
                  Pointing has no control about the blind texts.
                </p>
                <Link to="app-edit.html" className="btn btn-primary btn-block">
                  Getting Started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mg-t-20 mg-lg-t-0">
            <div className="card card-info">
              <div className="card-body pd-20">
                <div className="d-flex justify-content-center mg-b-30">
                  <img
                    src={require("../../img/icon2.svg")}
                    className="wd-100"
                    alt=""
                  />
                </div>
                <h5 className="tx-inverse mg-b-20">Embed in your App</h5>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia. Even the all-powerful
                  Pointing has no control about the blind texts.
                </p>
                <Link to="" className="btn btn-primary btn-block">
                  Take a Tour
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mg-t-20 mg-lg-t-0">
            <div className="card card-info">
              <div className="card-body pd-20">
                <div className="d-flex justify-content-center mg-b-30">
                  <img
                    src={require("../../img/icon2.svg")}
                    className="wd-100"
                    alt=""
                  />
                </div>
                <h5 className="tx-inverse mg-b-20">Push data</h5>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia. Even the all-powerful
                  Pointing has no control about the blind texts.
                </p>
                <Link to="" className="btn btn-primary btn-block">
                  Take a Tour
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverView);
