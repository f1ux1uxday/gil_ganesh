import React, { Component } from 'react'

import Splash from './components/gg-splash'
import Header from './components/gg-header'
import Player from './components/gg-player'
import Tagline from './components/gg-tagline'
import Bio from './components/gg-bio'
import Contact from './components/gg-contact'
import Shows from './components/gg-shows'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'splash',
    }
    this.exitSplash = this.exitSplash.bind(this)
    this.changeMain = this.changeMain.bind(this)
    this.changeAbout = this.changeAbout.bind(this)
    this.changeShows = this.changeShows.bind(this)
  }

  exitSplash() {
    this.setState({
      view: 'main',
    })
  }

  changeMain() {
    this.setState({
      view: 'main',
    })
  }

  changeAbout() {
    this.setState({
      view: 'about',
    })
  }

  changeShows() {
    this.setState({
      view: 'shows',
    })
  }

  render() {
    return (
      <div className='App'>
        <Splash
          view={this.state.view}
          exitSplash={this.exitSplash}
        />

        <Header
          view={this.state.view}
          changeMain={this.changeMain}
          changeAbout={this.changeAbout}
          changeShows={this.changeShows}
        />

        <Player
          view={this.state.view}
        />

        <Tagline
          view={this.state.view}
        />

        <Bio
          view={this.state.view}
        />

        <Contact
          view={this.state.view}
        />

        <Shows
          view={this.state.view}
        />

      </div>
    );
  }
}

export default App
