import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };
  
  handleFormSubmit = (e) => {
    e.preventDefault()
    if(!(this.state.username == "" || this.state.password == "")){
      this.props.handleLogin(this.state)
    }
  }

  handleUsernameChange = (e) => {
    let tempUsername = e.target.value
    this.setState({
      username: tempUsername
    })
  }

  handlePasswordChange = (e) => {
    let tempPassword = e.target.value
    this.setState({
      password: tempPassword
    })

  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleUsernameChange} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handlePasswordChange} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
