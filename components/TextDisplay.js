import React, { Component } from 'react'

class TextDisplay extends Component {

  render() {
    return <div>Im displaying text from my parent: {this.props.text}</div>
  }
}

export default TextDisplay
