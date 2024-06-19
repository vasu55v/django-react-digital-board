import React from 'react'
import '../styles/board.css'
import { useRef,useEffect } from 'react'

const Board = () => {

   const canvasRef=useRef(null);
   const colorsRef=useRef(null);

   useEffect(()=>{
     const canvas = canvasRef.current;
     const context =canvas.getContext('2d');

     const colors=document.getElementsByClassName('color');

     const current={
      color:"black"
     }  

     const onColorUpdate=(e)=>{
        console.log(e.target.className)
     }


     for(let i=0;i<colors.length;i++){
        colors[i].addEventListener('click',onColorUpdate,false)
     }

   },[])

  return (
    <div>
        <canvas ref={canvasRef} className='white_board'></canvas>

            <div ref={colorsRef} className='colors'>
                <div className='color black'></div>
                <div className='color red'></div>
                <div className='color green'></div>
                <div className='color blue'></div>
                <div className='color yellow'></div>
            </div>
    </div>
  )
}

export default Board