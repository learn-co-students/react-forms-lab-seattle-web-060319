import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: ''
    };
  }
 
  handleChange = (event) => {
    const newValue = event.target.value;
    this.setState({
      inputValue: newValue
    });
  }

  remainingChar = () => {
    return this.props.maxChars - this.state.inputValue.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.inputValue} onChange={this.handleChange}/>
        <p>remaining: {this.remainingChar()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
