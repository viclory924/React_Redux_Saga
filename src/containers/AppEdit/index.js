import React, { Component } from "react";
import Switch from "react-switch";
import InputColor from "react-input-color";
import { connect } from "react-redux";

class AppEdit extends Component {
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
  };

  handleChange = checked => {
    this.setState({ checked });
  };
  handleColor = color => {
    this.setState({ color });
  };

  renderBasicInformation() {
    return (
      <section className="body">
        <div className="form-layout form-layout-7">
          <div className="row no-gutters">
            <div className="col-5 col-sm-4">Application Name</div>
            <div className="col-7 col-sm-8">
              <input
                className="form-control"
                type="text"
                name="fullname"
                placeholder="Enter your full name"
              />
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-5 col-sm-4">Is Active?</div>
            <div className="col-7 col-sm-8">
              <div className="toggle-wrapper">
                <Switch
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  offColor="#adb5bd"
                  onColor="#1b84e7"
                  uncheckedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 15,
                        color: "white",
                        paddingRight: 2
                      }}>
                      Off
                    </div>
                  }
                  checkedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 15,
                        color: "white",
                        paddingRight: 2
                      }}>
                      on
                    </div>
                  }
                  className="react-switch"
                  id="icon-switch"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderLookFeel() {
    return (
      <section className="body">
        <div className="form-layout form-layout-7">
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
      </section>
    );
  }

  render() {
    return (
      <div>
        <div className="section-wrapper mg-t-20">
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
                  <span className="number">1</span>Basic Information
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
                  <span className="number">2</span>Look &amp; Feel
                </li>
              </ul>
            </div>
            <div className="content clearfix">
              {this.state.toggle
                ? this.renderBasicInformation()
                : this.renderLookFeel()}
            </div>
          </div>
          <div className="formStepper">
            <span
              className={this.state.toggle ? "disabledSpan" : "enabledSpan"}
              onClick={this.state.toggle ? null : this.toogleFunc}>
              Previous
            </span>
            <span
              className="enabledSpan"
              onClick={this.state.toggle ? this.toogleFunc : null}>
              {this.state.toggle ? "Next" : "Finish"}
            </span>
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
)(AppEdit);
