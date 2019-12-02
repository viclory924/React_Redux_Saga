import React, { Component } from "react";
import { Link } from "react-router-dom";
import Collapsible from "react-collapsible";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { connect } from "react-redux";

import PrismCode from "react-prism";
class NewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      stepsHistory: { 1: true, 2: false, 3: false, 4: false }
    };
  }

  renderType() {
    return (
      <section className="body">
        <div className="display-block">
          <label className="section-title">SaaS Component Type</label>
          <p className="mg-b-20 mg-sm-b-40">
            Select the Type of the SaaS component you would like to configure
          </p>
        </div>
        <div className="card-columns mg-t-0">
          <div className="card card-body pd-25 tx-center">
            <div className="card-icon-wrapper success">
              <i className="icon fa fa-eye" />
            </div>
            <h4 className="tx-gray-800 mg-b-25">Audit Logs</h4>
            <p className="mg-b-25">
              Holds all of the actions which are done in your application,
              either by users or automated tasks.
            </p>
            <Link
              to="#"
              className="btn btn-success btn-block"
              onClick={() => this.handleChange(2)}>
              Select
            </Link>
          </div>
          <div className="card card-body pd-25 tx-center">
            <div className="card-icon-wrapper success">
              <i className="icon fas fa-calendar-alt" />
            </div>
            <h4 className="tx-gray-800 mg-b-25">Events</h4>
            <p className="mg-b-25">
              Holds all of the security events in your application, scaleable
              and fast streamed into this repository.
            </p>
            <Link
              to="#"
              className="btn btn-success btn-block"
              onClick={() => this.handleChange(2)}>
              Select
            </Link>
          </div>
          <div className="card card-body pd-25 tx-center">
            <div className="card-icon-wrapper success">
              <i className="icon fa fa-campground" />
            </div>
            <h4 className="tx-gray-800 mg-b-25">Custom Entity</h4>
            <p className="mg-b-25">
              Define your own data model, push the data into repository
              and define UI components to CRUD in your app.
            </p>
            <Link
              to="#"
              className="btn btn-success btn-block"
              onClick={() => this.handleChange(2)}>
              Select
            </Link>
          </div>
        </div>
      </section>
    );
  }

  renderDataSource() {
    return (
      <section className="body">
        <div className="display-block">
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
                alt="placeholder"
              />
            </div>
            <h5 className="tx-gray-800 mg-b-25">Frontegg Cloud</h5>
            <p className="mg-b-25">
              The data will be stored on Frontegg's high redundant and scaleable
              storage
            </p>
            <Link
              to="#"
              className="btn btn-success btn-block"
              onClick={() => this.handleChange(3)}>
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
            <Link
              to="#"
              className="btn btn-success btn-block"
              onClick={() => this.handleChange(3)}>
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
              The data will be stored in your Firebase data source, never
              leaving your hosts
            </p>
            <Link
              to="#"
              className="btn btn-success btn-block"
              onClick={() => this.handleChange(3)}>
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
            <Link
              to="#"
              className="btn btn-success btn-block"
              onClick={() => this.handleChange(3)}>
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

  renderUsageGuidelines() {
    const text1 = `# install frontegg frontend with npm 
npm install --save test-lib-audits 

# install frontegg backend with npm 
npm install --save frontegg-client `;

    const text2 = `import { AuditsClient } from 'frontegg-client';
		
export default class MyAppAuditBackend {
  const auditsClient = new AuditsClient()
  auditsClient.init('2fb835d0-8f17-48cb-8489-3a2f8f50ce4a', 'aacd8952-fe59-4eaf-9ac4-b97818ced9e1')

	//  pulls one audit log by ID
	await auditsClient.sendAudit({
    tenantId: 'autono.club',
    time: Date(),
    user: email,
    resource: "Portal",
    action: "Unauthenticated login attempt",
    severity: "Medium",
    ip: "192.168.9.90"
  })
}`;
    const text3 = `import { FrontEgg } from 'test-lib-audits';

className MyAppAuditsScreen extends Component {
	FrontEgg.configureComponent('2fb835d0-8f17-48cb-8489-3a2f8f50ce4a',  'aacd8952-fe59-4eaf-9ac4-b97818ced9e1', 'autono.club')

	render() {
		return (
			/* Here you will see my audits */
            <FrontEgg />
		);
	}
} 
export default MyAuditsScreen;
`;
    return (
      <section className="body">
        <label className="section-title">How to Use the new component</label>
        <p className="mg-b-20 mg-sm-b-40">
          Congratulations, the new component was added. Here are the options to
          use the component. You can start pushing and pulling through our
          Component management APIs. You can also embed the UI components easily
          into your application.
        </p>

        <div
          className="alert alert-outline alert-success"
          role="alert"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Copy to Clipboard"
          style={{ cursor: "pointer" }}>
          <CopyToClipboard
            text={`Component ID: audits-uiyudAWE434334jyuQWWetnreopdcvp234`}>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close">
              <span aria-hidden="true">
                <i className="icon fa fa-clipboard" />
              </span>
            </button>
          </CopyToClipboard>
          <strong>Component ID:</strong>{" "}
          audits-uiyudAWE434334jyuQWWetnreopdcvp234
        </div>

        <Collapsible
          triggerWhenOpen={
            <div>
              <p className="tagP">
                <span className="icon fa fa-minus fontIcon" />
                NPM Install Frontegg Library
              </p>
            </div>
          }
          trigger={
            <div>
              <p className="tagP">
                <span className="icon fa fa-plus fontIcon" /> NPM Install
                Frontegg Library
              </p>
            </div>
          }
          triggerClassName="colOff"
          triggerOpenedClassName="colOn"
          contentInnerClassName="colContentInner">
          <div className="card-body">
            <p className="mg-b-20 mg-sm-b-20">
              First install the library either with npm or yarn.
            </p>
            <div className="code-box-copy">
              <CopyToClipboard text={text1}>
                <button
                  className="code-box-copy__btn"
                  data-clipboard-target="#example-html"
                  title="Copy"
                />
              </CopyToClipboard>
              <PrismCode component="pre" className="language-css">
                {text1}
              </PrismCode>
            </div>
          </div>
        </Collapsible>
        <Collapsible
          triggerWhenOpen={
            <div>
              <p className="tagP">
                <span className="icon fa fa-minus fontIcon" />
                Push Audit Logs
              </p>
            </div>
          }
          trigger={
            <div>
              <p className="tagP">
                <span className="icon fa fa-plus fontIcon" /> Push Audit Logs
              </p>
            </div>
          }
          triggerClassName="colOff"
          triggerOpenedClassName="colOn"
          contentInnerClassName="colContentInner">
          <div className="card-body">
            <p className="mg-b-20 mg-sm-b-20">
              Lets push our first audit log from our node backend
            </p>
            <div className="code-box-copy">
              <CopyToClipboard text={text2}>
                <button
                  className="code-box-copy__btn"
                  data-clipboard-target="#example-html"
                  title="Copy"
                />
              </CopyToClipboard>
              <PrismCode component="pre" className="language-css">
                {text2}
              </PrismCode>
            </div>
          </div>
        </Collapsible>
        {/* <Collapsible
          triggerWhenOpen={
            <div>
              <p className="tagP">
                <span className="icon fa fa-minus fontIcon" />
                Pull Audit Logs
              </p>
            </div>
          }
          trigger={
            <div>
              <p className="tagP">
                <span className="icon fa fa-plus fontIcon" /> Pull Audit Logs
              </p>
            </div>
          }
          triggerClassName="colOff"
          triggerOpenedClassName="colOn"
          contentInnerClassName="colContentInner">
          <div className="card-body">
            <p className="mg-b-20 mg-sm-b-20">
              Lets pull our first audit log from our node backend
            </p>
            <div className="code-box-copy">
              <CopyToClipboard text={text3}>
                <button
                  className="code-box-copy__btn"
                  data-clipboard-target="#example-html"
                  title="Copy"
                />
              </CopyToClipboard>
              <PrismCode component="pre" className="language-css">
                {text3}
              </PrismCode>
            </div>
          </div>
        </Collapsible> */}

        <Collapsible
          triggerWhenOpen={
            <div>
              <p className="tagP">
                <span className="icon fa fa-minus fontIcon" />
                Embed UI Component
              </p>
            </div>
          }
          trigger={
            <div>
              <p className="tagP">
                <span className="icon fa fa-plus fontIcon" /> Embed UI Component
              </p>
            </div>
          }
          triggerClassName="colOff"
          triggerOpenedClassName="colOn"
          contentInnerClassName="colContentInner">
          <div className="card-body">
            <p className="mg-b-20 mg-sm-b-20">
              Lets embed your audit logs table component in your ReactJS app
            </p>
            <div className="code-box-copy">
              <CopyToClipboard text={text3}>
                <button
                  className="code-box-copy__btn"
                  data-clipboard-target="#example-html"
                  title="Copy"
                />
              </CopyToClipboard>
              <PrismCode component="pre" className="language-css">
                {text3}
              </PrismCode>
            </div>
          </div>
        </Collapsible>
      </section>
    );
  }

  handleChange = index => {
    this.setState({
      tab: index,
      stepsHistory: { ...this.state.stepsHistory, [index]: true }
    });
  };

  handleNavigate = () => {
    this.props.history.push("/dashboard/audits-manage");
  };

  render() {
    var tabIndex = this.state.tab;
    let tabRender;
    if (tabIndex === 1) {
      tabRender = this.renderType();
    } else if (tabIndex === 2) {
      tabRender = this.renderDataSource();
    } else if (tabIndex === 3) {
      tabRender = this.renderDataColumns();
    } else {
      tabRender = this.renderUsageGuidelines();
    }
    return (
      <div className="section-wrapper mg-t-20">
        <div id="wizard2" className="wizard clearfix">
          <div className="steps formtabs">
            <ul className="ulStepTabs">
              <li
                onClick={() =>
                  this.state.tab === 1 ? null : this.handleChange(1)
                }
                className={
                  this.state.tab === 1
                    ? "current"
                    : this.state.stepsHistory[1] === true
                    ? "selected"
                    : "nonSelect"
                }>
                <span className="number">1</span>Type
              </li>
              <li
                className={
                  this.state.tab === 2
                    ? "current"
                    : this.state.stepsHistory[2] === true
                    ? "selected"
                    : "nonSelect"
                }
                onClick={() =>
                  this.state.tab === 2 ? null : this.handleChange(2)
                }>
                <span className="number">2</span>Data Source
              </li>
              <li
                className={
                  this.state.tab === 3
                    ? "current"
                    : this.state.stepsHistory[3] === true
                    ? "selected"
                    : "nonSelect"
                }
                onClick={() =>
                  this.state.tab === 3 ? null : this.handleChange(3)
                }>
                <span className="number">3</span>Data Columns
              </li>
              <li
                className={
                  this.state.tab === 4
                    ? "current"
                    : this.state.stepsHistory[4] === true
                    ? "selected"
                    : "nonSelect"
                }
                onClick={() =>
                  this.state.tab === 4 ? null : this.handleChange(4)
                }>
                <span className="number">4</span>Usage Guidelines
              </li>
            </ul>
          </div>
          <div className="content clearfix">{tabRender}</div>
        </div>
        <div className="formStepper">
          {this.state.tab >= 3 && (
            <span
              className="enabledSpan"
              onClick={() =>
                this.state.tab === 3
                  ? this.handleChange(4)
                  : this.handleNavigate()
              }>
              {this.state.tab === 3 ? "Next" : "Finish"}
            </span>
          )}
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
)(NewComponent);
