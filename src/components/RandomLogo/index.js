import React from 'react';
import GifPlayer from 'react-gif-player'


const RandomLogo = () => {
    let randomNumber = Math.floor(Math.random() * 17);  
   
    let mySrc =`../videos/${randomNumber}.gif`
    return(
	<div className="navLogo">
      <GifPlayer
        gif={mySrc}
        still={mySrc}
       
      />
    </div>
)};

export default RandomLogo;
