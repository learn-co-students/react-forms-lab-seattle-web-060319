import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleNewMessage = event => {
    if (event.target.value.length <= this.props.maxChars) {
      console.log('changing state', this.state)
      this.setState({
        message: event.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={this.handleNewMessage} type="text" name="message" id="message" />
        <div>Remaining Characters: {this.props.maxChars - this.state.message.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
