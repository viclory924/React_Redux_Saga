import React, { Component } from "react";
import Collapsible from "react-collapsible";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { connect } from "react-redux";
import PrismCode from "react-prism";

class AuditsUi extends Component {
  render() {
    const codeText = `import React, { Component } from 'react';
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
            <div
              className="alert alert-outline alert-success"
              role="alert"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Copy to Clipboard"
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
                    <span className="icon fa fa-plus fontIcon" /> Embed UI
                    Component
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
                  <CopyToClipboard text={codeText}>
                    <button
                      className="code-box-copy__btn"
                      data-clipboard-target="#example-html"
                      title="Copy"
                    />
                  </CopyToClipboard>
                  <PrismCode component="pre" className="language-css">
                    {codeText}
                  </PrismCode>
                </div>
              </div>
            </Collapsible>
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
)(AuditsUi);
