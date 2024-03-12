import React, { useState } from 'react'
import Song from './Song'
import '../styles/list.css'
import obj from '../store/data'

function List({ currIndex,set,icon,setIcon ,audio,setAudio}) {
  
  const setIn = ((e) => {
    set(e)
  })

  const p = ((sr, index) => {
    if (currIndex !== index) {
      audio.pause();
      const newAudio = new Audio(sr);
      setAudio(newAudio);
      newAudio.play();
      setIn(index)
      setIcon('fa-solid fa-pause')
    }
  })

  return (
    <div className='list'>
      {obj.map((e, index) => {
        return <Song key={index} imgUrl={e.imgurl} title={e.title} sr={e.src} index={index} p={p} icon={icon}/>
      })}
    </div>
  )
}

export default List