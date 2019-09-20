import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      chars: this.props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      chars: this.state.chars - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange}/>
        <h4>Chars Left: {this.state.chars}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
