import React, { Component } from 'react';
import "./SignUp.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_ok: "",
      name: "",
      lastname: "",
      flash: "",
    }
  }

  updateField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { flash, password_ok, ...signup } = this.state
    fetch("http://localhost:5000/signup/", {
      method:  'POST',
      headers:  new  Headers({
        'Content-Type': 'application/json'
      }),
      body:  JSON.stringify(signup),
    })
    .then(res  =>  res.json())
    .then(
      res  =>  this.setState({"flash":  res.flash}),
      err  =>  this.setState({"flash":  err.flash})
    )
  }

  render() {
    const { email, password, password_ok, name, lastname } = this.state;
    return (
      <div className="SignUp">
        <h1>{JSON.stringify(this.state)}</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.updateField} type="email" value={email} name="email" />
          <input onChange={this.updateField} type="password" value={password} name="password" />
          <input onChange={this.updateField} type="password" value={password_ok} name="password_ok" />
          <input onChange={this.updateField} type="text" value={name} name="name" />
          <input onChange={this.updateField} type="text" value={lastname} name="lastname" />
          <input onChange={this.updateField} type="submit" name="submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
