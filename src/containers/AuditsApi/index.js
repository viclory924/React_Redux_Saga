import React, { Component } from "react";
import { connect } from "react-redux";
import PrismCode from "react-prism";
import Collapsible from "react-collapsible";
import ReactTooltip from "react-tooltip";
import { CopyToClipboard } from "react-copy-to-clipboard";

const text1 = `# installation with npm npm install --save frontegg-js 
#installation with yarn yarn add frontegg-js`;
const text2 = `import frontegg from "frontegg-js";

export default class Frontegg {
	frontegg = new frontegg.Component({
		clientID: "2PYTTaxrN1N0x5rBeTGuqhhtZ5rkI5ug",
		componentID: "audits-uiyudAWE434334jyuQWWetnreopdcvp234",
		tenantID: myTenantID
	});

	//  pulls one audit log by ID
	myLog = frontegg.pull({
		id:"2323445"
	});

	//  pulls all audit logs from today
	myLog = frontegg.pull({
		date: "today"
	});

	//  pulls last 100 audit logs
	myLog = frontegg.pull({
		last: "100",
		orderBy: "Time",
		orderDirection: "desc"
	});
}`;
const text3 = `import React, { Component } from 'react';
import frontegg from 'frontegg-js';

className MyAuditsScreen extends Component {
	frontegg = new frontegg.Component({
		clientID: '2PYTTaxrN1N0x5rBeTGuqhhtZ5rkI5ug',
		componentID: 'audits-uiyudAWE434334jyuQWWetnreopdcvp234',
		tenantID: myTenantID
	});

	render() {
		return (
			<div>
			Here you will see my audits
			</div>
			{
				this.frontegg.renderComponent();
			}
		);
	}
} 
export default MyAuditsScreen;
`;

class AuditsApi extends Component {
  render() {
    return (
      <div className="section-wrapper mg-t-20">
        <div className="row">
          <div className="col-lg-12">
            <label className="section-title">API Usage</label>
            <p className="mg-b-20 mg-sm-b-40">
              This page contains the usage guidelines to push and pull audit
              logs through Frontegg APIs
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <CopyToClipboard
              text={`Component ID: audits-uiyudAWE434334jyuQWWetnreopdcvp234`}>
              <div
                className="alert alert-outline alert-success"
                role="alert"
                data-tip="Copy to Clipboard"
                style={{ cursor: "pointer" }}>
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close">
                  <span aria-hidden="true">
                    <i className="icon fa fa-clipboard" />
                  </span>
                </button>
                <strong>Component ID:</strong>{" "}
                audits-uiyudAWE434334jyuQWWetnreopdcvp234
              </div>
            </CopyToClipboard>

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
                      data-tip="Copy to Clipboard"
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
                    <span className="icon fa fa-plus fontIcon" /> Push Audit
                    Logs
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
                      data-tip="Copy to Clipboard"
                    />
                  </CopyToClipboard>
                  <PrismCode component="pre" className="language-css">
                    {text2}
                  </PrismCode>
                </div>
              </div>
            </Collapsible>
            <Collapsible
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
                    <span className="icon fa fa-plus fontIcon" /> Pull Audit
                    Logs
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
                      data-tip="Copy to Clipboard"
                    />
                  </CopyToClipboard>
                  <PrismCode component="pre" className="language-css">
                    {text3}
                  </PrismCode>
                </div>
              </div>
            </Collapsible>
          </div>
        </div>
        <ReactTooltip />
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
)(AuditsApi);
