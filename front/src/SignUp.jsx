import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    }
  }
  updateEmailField = (e) => {
    this.setState({
      email: e.target.value,
    });
  }
  render() {
    const { email } = this.state;
    return (
      <div className="SignUp">
        <h1>{email}</h1>
        <input onChange={this.updateEmailField} type="email" value={email} name="email"/>
      </div>
    );
  }
}

export default SignUp;
