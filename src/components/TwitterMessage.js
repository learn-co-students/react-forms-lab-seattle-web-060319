import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)

    this.state = {
      input: "",
      maxChars: props.maxChars
    };
  }

 handleFormChange = event => {
    this.handleCharChange(event)
    this.setState({
      input: event.target.value
    })
  }
  
 handleCharChange = (event) => {
    this.setState({
      maxChars: (this.props.maxChars - event.target.value.length)
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.input} onChange={this.handleFormChange} />
        <div>Max chars {this.state.maxChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
