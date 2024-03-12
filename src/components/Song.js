import React from 'react'
import '../styles/song.css'

function Song({ imgUrl, title, sr, index,p ,icon}) {
  
  return (
    <div className='song' onClick={()=>p(sr,index)}>
      {/* <img src={imgUrl} height={40} width={40} className='smallImg' alt="img"/> */}
      {/* <video width="400" height="400" className='smallImg' controls autoplay>
          <source src={imgUrl} type="video/mp4"></source>
        </video> */}
      {/* <iframe width="560" height="315" className='smallImg' src={imgUrl}></iframe> */}
      <img src={imgUrl} height={40} width={40} className='smallImg' alt="img" />
      <h3 className='songTitle'>{title}</h3>
      {/* <i class={`${icon} play2`}  /> */}
    </div>
  )
}

export default Song