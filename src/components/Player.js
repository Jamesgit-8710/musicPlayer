import React, { useEffect, useState } from 'react'
import '../styles/player.css'
import newObj from '../store/data'

function Player({ id, bb, ff, icon, setIcon, audio }) {

    const play = "fa-solid fa-play"
    const pause = "fa-solid fa-pause"

    const click = (() => {
        if (icon === "fa-solid fa-play") {
            audio.play()
            setIcon(pause)
        } else {
            audio.pause()
            setIcon(play)
        }
    })

    const f = (() => {
        ff()
    })

    const b = (() => {
        bb()
    })

    return (
        <div className='player'>
            <img src={newObj[id].imgurl} className='playerImg' alt="img" />
            <h3 className='songName'>{newObj[id].title} </h3>
            <div className='outerDiv'>
                <div className='innerDiv'></div>
            </div>
            <div className='play'>
                <i className="fa-solid fa-backward" onClick={b} />
                <i className={icon} onClick={click} />
                <i className="fa-solid fa-forward" onClick={f} />
            </div>
        </div>
    )
}

export default Player