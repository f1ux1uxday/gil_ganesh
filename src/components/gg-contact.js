import React, { Component } from 'react'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.stateCheckContact = this.stateCheckContact.bind(this)
  }

  stateCheckContact() {
    if (this.props.view !== 'splash') {
      return (
        <div className='contact'>
          <h4 id='email'> INFO@GILGANESH.COM </h4>
          <span className='contact-link' id='twitter'>
            <a href='https://twitter.com/gilganesh' target='blank'>
              TWITTER
            </a>
          </span>
          <span className='contact-link' id='facebook'>
            <a href='https://fb.me/gilganesh' target='blank'>
              FACEBOOK
            </a>
          </span>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.stateCheckContact()}
      </div>
    )
  }
}

export default Contact
