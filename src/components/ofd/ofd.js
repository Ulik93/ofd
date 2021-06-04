import React from 'react'
import './ofd.sass'
import w from './iPhone.png'
const Ofd = () => {
  return (
    <div className="ofd">
    <div  className='header__wrapper'>
     <div className="ofd__section">
       <div className="ofd__section-about">
        <h1 className="ofd__section-tittle">
             Оператор Фискальных данных <br /> Новая Норма
            </h1>
           <p className="ofd__section-subtittle">Бесперебойная передача <br /> фискальных данных в ГНС и <br /> резервирование в течение 5 лет</p>
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
