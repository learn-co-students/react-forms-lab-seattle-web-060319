import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: ""
  };

  handleMessageChange = (e) => {
    let input = e.target.value
    this.setState({
      message: input
    })
  }

  render() {
    return (
      <div>
        <p>Remaining Characters: {(this.props.maxChars) - (this.state.message.length)}</p>
        <strong>Your message:</strong>
        <input onChange={this.handleMessageChange} type="text" value ={this.state.message} name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
