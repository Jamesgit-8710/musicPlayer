import React, { useState } from 'react'
import Player from './Player'
import List from './List'
import '../styles/main.css'
import newObj from '../store/data'

function Main() {
    const [audio, setAudio] = useState(new Audio(`${newObj[0].src}`));

    const [index, setIn] = useState(0)
    const [icon, setIcon] = useState("fa-solid fa-play")

    const s = ((e) => {
        setIn(e)

    })

    const ff = (() => {

        if (index === newObj.length - 1) {
            setIn(0)
            audio.pause();
            const newAudio = new Audio(newObj[0].src);
            setAudio(newAudio);
            newAudio.play();
            setIcon('fa-solid fa-pause')
        } else {
            setIn(index + 1)
            audio.pause();
            const newAudio = new Audio(newObj[index + 1].src);
            setAudio(newAudio);
            newAudio.play();
            setIcon('fa-solid fa-pause')
        }
    })

    const bb = (() => {

        if (index === 0) {
            setIn(newObj.length - 1)
            audio.pause();
            const newAudio = new Audio(newObj[newObj.length - 1].src);
            setAudio(newAudio);
            newAudio.play();
        } else {
            setIn(index - 1)
            audio.pause();
            const newAudio = new Audio(newObj[index - 1].src);
            setAudio(newAudio);
            newAudio.play();
        }
    })

    return (
        <div className='main'
        // style={{background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${newObj[0].imgurl})`}}
        >
            <Player id={index} bb={bb} ff={ff} icon={icon} setIcon={setIcon} audio={audio} />
            <List set={s} currIndex={index} icon={icon} setIcon={setIcon} audio={audio} setAudio={setAudio} />
        </div>
    )
}

export default Main