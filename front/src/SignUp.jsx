import React, { Component } from 'react';
import "./SignUp.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password_1: "",
      password_2: "",
      firstname: "",
      lastname: "",
    }
  }

  updateField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  }

  render() {
    const { email, password_1, password_2, firstname, lastname } = this.state;
    return (
      <div className="SignUp">
        <h1>{JSON.stringify(this.state)}</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.updateField} type="email" value={email} name="email" />
          <input onChange={this.updateField} type="password" value={password_1} name="password_1" />
          <input onChange={this.updateField} type="password" value={password_2} name="password_2" />
          <input onChange={this.updateField} type="text" value={firstname} name="firstname" />
          <input onChange={this.updateField} type="text" value={lastname} name="lastname" />
          <input onChange={this.updateField} type="submit" name="submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
