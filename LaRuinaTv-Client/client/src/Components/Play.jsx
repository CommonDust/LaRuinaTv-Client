import React from 'react'
import ReactPlayer from 'react-player'
import style from './css/Play.module.css'
import { BodyCss } from '../functions/BodyCss'


const Play = () => {
  BodyCss()
  return (
<div className={style.divContainer}>
<div className={style.divPlay}>

<ReactPlayer url='https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl' muted={true} volume={null} playing={true} controls={true}/>

    </div>
    </div>
  )
}

export default Play
