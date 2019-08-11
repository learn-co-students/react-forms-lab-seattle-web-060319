import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  numberCharacters = () => {
    let max = this.props.maxChars
    let current = this.state.inputValue.length
    return max - current
  }

  render() {
    return (
      <div>
        <strong>Characters left: {this.numberCharacters()}</strong>
        <input type="text" name="message" id="message" value={this.state.inputValue} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
