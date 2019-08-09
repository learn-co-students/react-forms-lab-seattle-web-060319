import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: ''
    };
  }
  charactersLeft = () => {
    let charsLeft = this.props.maxChars - this.state.inputValue.length
     return charsLeft
  }

  handleEvent = (event) => {
    let newValue = event.target.value
    this.setState ({
    inputValue: newValue})
  }



  render() {
    return (
      <div>
        <strong>Show characters left: {this.charactersLeft()}</strong>
        <input type="text" name="message" id="message" value={this.state.inputValue} onChange={this.handleEvent}/>
      </div>
    );
  }
}
export default TwitterMessage;
