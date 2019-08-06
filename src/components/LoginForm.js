import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.username !== '' && this.state.password !== '') {
      this.props.handleLogin(this.state)
    }
  }

  changeName = (e) => {
    const username = e.target.value;
    this.setState({
      username: username
    })
  }

  changePassword = (e) => {
    const password = e.target.value;
    this.setState({
      password: password
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.changeName}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.changePassword}/>
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
