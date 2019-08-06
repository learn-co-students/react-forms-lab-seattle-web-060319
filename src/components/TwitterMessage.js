import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      string: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.string} id="message" onChange={this.handleChange}/>
        <p>{this.props.maxChars - this.state.string.length} / {this.props.maxChars} remaining characters</p>
      </div>
    );
  }
  handleChange = (event) => {
    this.setState({string: event.target.value})
  }
}

export default TwitterMessage;
