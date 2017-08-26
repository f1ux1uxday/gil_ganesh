import React, { Component } from 'react'

class Splash extends Component {
  constructor(props) {
    super(props)

    this.entryClick = this.entryClick.bind(this)
  }

  entryClick() {
    this.props.exitSplash()
  }

  stateCheckSplash() {
    if (this.props.view === 'splash') {
      return (
        <div className='Splash-wrapper' onClick={this.entryClick}>
          <p id='splash-text'>
            G  I L<br/>
            G A N<br/>
            E S H
          </p>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.stateCheckSplash()}
      </div>
    )
  }
}

export default Splash
