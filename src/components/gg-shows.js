import React from 'react'

const Shows = (props) => {
  if (props.view === 'shows') {
    return (
      <div className='shows'>
        <p>
          5/11/16 @ SAHARA LOUNGE<br/>
          DEREK, SHO GALOGA, SAINT LO GUN
        </p>
        <p>
          12/18/16 @ SWEETHEART STUDIOS<br/>
          SECRET BAD BOYS, TROUBLE BOYS
        </p>
        <p>
          5/13/17 @ BEERLAND<br/>
          EVIL TRIPLET, KINGDOM OF SUICIDE LOVERS, SUSPIRIANS
        </p>
        <p>
          5/28/17 @ CHEER UP CHARLIE'S<br/>
          LADYFANG, CALEB DE CASPER, STORM CHASE
        </p>
        <p>
          T B A<br/>
        </p>
      </div>
    )
  }
  if (props.view !== 'shows') {
    return null
  }
}

export default Shows
