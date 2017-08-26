import React, {Component} from 'react'

import bioImage from '../assets/ggboom.jpg'

class Bio extends Component {
  constructor(props) {
    super(props)
  }

  stateCheckBio() {
    if (this.props.view === 'about') {
      return (
        <div className='Bio'>
          <p id='bio-text'>
            MARGINAL GUYS DOING MAXIMAL THINGS IN ATX,<br/>
            DEFYING MUSICAL BOUNDARIES AND GENRE CONVENTIONS.<br/>
            SINNERS IN THE HANDS OF AN ANGRY MUSIC-GOD LOOKING<br/>
            TO ATONE FOR THE SINS OF QUESTIONABLE TASTE.<br/>
            BOUNDLESS VIBES HINT AT POSITIVELY MUTATED POP FUTURES<br/>
            AGED IN CHERNOBYL AND BOTTLED AT THREE MILE ISLAND.<br/>
            A DAY-GLO BEHEMOTH REBELLING ON THE DANCE FLOOR.<br/>
            A HIGHLY-RADIOACTIVE GOOD TIME GUARANTEED TO MELT <br/>
            YOUR MYSTERY CORE THE GIL GANESH WAY.<br/>
          </p>
          <img className='img-responsive' src={bioImage} id='photo1'/>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.stateCheckBio()}
      </div>
    )
  }
}

export default Bio
