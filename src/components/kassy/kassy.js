import React from 'react'
import './kassy.css'
import kassyphoto from './img/kassyblock.png';
import ofdphoto from './img/ofd.png'
const Kassy = () => {
  return (
    <>
    <div className="kassy__red"></div>
      <div className="kassy">
        <div className="header__wrapper">
             <div className="kassy__content">
                       <div className="kassy__content-text">
                                 <h2 className="kassy__content-tittle">
                                   Комплекс услуг по ОФД
                                  </h2>
                               <p className="kassy__content-subtittle">
Онлайн-передача чеков, анализ <br /> продаж, мониторинг тоговых <br /> точек, поставка, настройка и <br /> обслуживание касс.
                               </p>
                               <img src="./img/8134901256.jpg" alt="" />
                       </div>
                       <div className="kassy__content-photo">
            <img src={kassyphoto} alt="" />
                       </div>
             </div> 
             </div>   
             <div className="kassy__content-bottom">
                 <div className='header__wrapper'>
                   <img className='kassy__content-img' src={ofdphoto} alt="" />
                 </div>
             </div>
       </div>
       </>
       )
}

export default Kassy
