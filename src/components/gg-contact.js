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
          <p className='contact-link' id='facebook'>
            <a href='https://fb.me/gilganesh' target='blank'>
              FACEBOOK
            </a>
          </p>
          <h4 id='email'> INFO@GILGANESH.COM </h4>
          <p className='contact-link' id='twitter'>
            <a href='https://twitter.com/gilganesh' target='blank'>
              TWITTER
            </a>
          </p>
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
