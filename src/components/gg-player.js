import React, { Component } from 'react'

class Player extends Component {
  constructor(props) {
    super(props)
  }

  stateCheckPlayer() {
    if (this.props.view === 'main') {
      return (
        <iframe id='youtube'
        src='https://www.youtube.com/embed/uRT8yZElsrY'
        frameBorder='0'
        allowFullScreen>
        </iframe>
      )
    }
  }

  render() {
    return (
      <div className='player'>
        {this.stateCheckPlayer()}
      </div>
    )
  }
}

export default Player
