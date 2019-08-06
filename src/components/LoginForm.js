import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUserChange = (e) => {
    const newName = e.target.value
    this.setState({
       username: newName
    })
  }

  handlePassChange = (e) => {
    const newPass = e.target.value
    this.setState({
      password: newPass
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0) {
    this.props.handleLogin({...this.state})
  }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUserChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePassChange} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
