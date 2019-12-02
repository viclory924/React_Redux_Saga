import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

// action creators
import { activate } from "../../redux/actions";

class ActivateAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
          email: '',
          token: '',
        }
    }

    componentDidMount(){
        var full_url = window.location.href
        var fir_equ = full_url.indexOf("=");
        var amb = full_url.indexOf("&");
        var url_email = full_url.slice(fir_equ+1, amb);
        var url_token = full_url.slice(amb+7);
        this.setState({
          email: url_email,
          token: url_token
        })
    }

    componentDidUpdate = () => {
        const userObject = {
            email: this.state.email,
            tokon: this.state.token,
          };
        this.props.activate(userObject);
        if (this.props.auth.activate != false && this.props.auth.activate != "")
            alert("activation is suceed")
            this.props.history.push("/");
      }
 
    render() {
      return(
          null
      );
    }
}

const mapStateToProps = state => ({
  // user: state.user
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
   activate: user_information => dispatch(activate(user_information))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivateAccount);

