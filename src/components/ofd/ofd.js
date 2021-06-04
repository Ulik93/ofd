import React from 'react'
import './ofd.css'
import w from './iPhone.png'
const Ofd = () => {
  return (
    <div className="ofd">
    <div  className='header__wrapper'>
     <div className="ofd__section">
       <div className="ofd__section-about">
        <h1 className="ofd__section-tittle">
             ОФД-НН
            </h1>
           <p className="ofd__section-subtittle">Официальный оператор фискальных данных "ОФД-НН" 
            <br /> обрабатывает,  хранит и передает информацию в государственную 
            <br/>налоговую службу, отправляет чеки покупателям. </p>
            <button className='ofd__section-btn'>Подключить</button>
              </div>
            <div className="ofd__section-img">
          <img src={w} alt="Офд новая норма" />
       </div>
     </div>
     </div>
    </div>
  )
}

export default Ofd
