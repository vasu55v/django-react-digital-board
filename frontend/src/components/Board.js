import React from 'react'
import '../styles/board.css'
import { useRef,useEffect } from 'react'

const Board = () => {

   const canvasRef=useRef(null);
   const colorsRef=useRef(null);

   useEffect(()=>{
     const canvas = canvasRef.current;
     const context = canvas.getContext('2d');

     const colors=document.getElementsByClassName('color');

     const current={
      color:"black"
     }  

     const onColorUpdate=(e)=>{
        current.color=e.target.className.split(' ')[1];
     }

     const drawLine = (x0,y0,x1,y1,color,send)=>{
      context.beginPath();
      context.moveTo(x0,y0);
      context.lineTo(x1,y1);
      context.strokeStyle=color;
      context.lineWidth=2;
      context.stroke();
      context.closePath();
      context.save();
     }


     let dataURL='';
     let drawing=false;

     const onResize=()=>{
      canvas.width=window.innerWidth
      canvas.height=window.innerHeight
      let img=document.createElement('img')
      img.src=dataURL;
      context.drawImage(img,0,0)
      context.restore()
     }

     for(let i=0;i<colors.length;i++){
        colors[i].addEventListener('click',onColorUpdate,false)
     }

     window.addEventListener('resize',onResize,false)

     const onDrawingEvent =(data)=>{
           const w=canvas.width;
           const h=canvas.height;
           drawLine(data.x0 * w,data.y0 * h,data.x1 * w,data.y1 * h,data.color)
     }

     onResize();

     const onMouseDown =(e)=>{
          drawing=true
          current.x=e.clientX || e.touches[0].clientX;
          current.Y=e.clientY || e.touches[0].clientY;
     }
     const onMouseMoe=(e)=>{
         drawLine(current.x,current.y,e.clientX || e.touches[0].clientX,e.touches[0].clientY,current.color,trues)
     }


     canvas.addEventListener('mousedown', onMousedDown ,false)
     canvas.addEventListener('mouseup',onMouseUp,false)
     canvas.addEventListener('mouseout',onMouseOut,false)
     canvas.addEventListener('mousemove',onMouseUp,false)

     
     canvas.addEventListener('touchstart', onMousedDown ,false)
     canvas.addEventListener('touchend',onMouseUp,false)
     canvas.addEventListener('touchcancel',onMouseOut,false)
     canvas.addEventListener('touchmove',onMouseUp,false)


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