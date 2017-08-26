import React, {Component} from 'react';
import logo from '../logo.svg';

class Header extends Component {
  constructor(props) {
    super(props)

    this.clickMain = this.clickMain.bind(this)
    this.clickAbout = this.clickAbout.bind(this)
    this.clickShows = this.clickShows.bind(this)
  }

  clickMain() {
    this.props.changeMain()
  }

  clickAbout() {
    this.props.changeAbout()
  }

  clickShows() {
    this.props.changeShows()
  }

  stateCheckHeader() {
    if (this.props.view !== 'splash') {
      return (
        <div className='App-header'>
          <h2 id='banner-text' onClick={this.clickMain}>
            GIL GANESH
          </h2>
          <p className='App-intro'></p>
          <div onClick={this.clickAbout}>
            <p className='states' id='about'>
              ABOUT
            </p>
          </div>
          <p className='states' id='bandcamp'>
            <a href='https://gilganesh.bandcamp.com' target='blank'>
              BANDCAMP
            </a>
          </p>
          <p className='states' id='shows'
            onClick={this.clickShows}>
            SHOWS
          </p>
          <img src={logo} className='App-logo' alt='logo'/>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.stateCheckHeader()}
      </div>
    );
  }
}

export default Header;
