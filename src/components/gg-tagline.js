import React, { Component } from 'react'

class Tagline extends Component {
  constructor(props) {
    super(props)
  }

  stateCheckTagline() {
    if (this.props.view === 'main') {
      return (
        <div className='tagline'>
          <h3>
            FOR MUSIC TO BE PROPERLY DESTROYED<br/>
            IT MUST BE CATEGORIZED
          </h3>
          <h3>
            BLANDNESS REMAINS THE AESTHETIC<br/>
            OF THE ILLUSION OF CHOICE
          </h3>
          <h3>
            GIL GANESH DELIVERS THE FULL SPECTRUM<br/>
          </h3>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.stateCheckTagline()}
      </div>
    )
  }
}

export default Tagline
