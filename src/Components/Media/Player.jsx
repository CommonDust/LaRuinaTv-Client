import React from 'react'

const Player = (props) => {
  const {id}= props
  return (
    <div className='playerCont'>
      <ul className='playUl'><iframe 
        width="600px" 
        height="350px" 
        src={`https://www.youtube.com/embed/${id}?start=0;rel=0&amp`}
        Player
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen='true'>
      </iframe></ul>

    </div>
    
  )
}

export default Player
