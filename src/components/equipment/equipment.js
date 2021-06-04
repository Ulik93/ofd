import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react'; Библ-ка установлено
// import 'swiper.css'; тоже
import img1 from './photos/photo1.png'
import img2 from './photos/photo2.png'
import img3 from './photos/photo3.png'

import './equipment.sass'
const Equipment = (date) => {
  return (
    <div className="equipment">
      <h1>оборудование</h1>
      <div className="equipment__wrapper">
        <div className="equipment__item">
          <div className="equipment__items">
            <div className="equipment__item-img">
            <img src={img1} alt="" />
            </div>
            <div className="equipment__items-title">
              <p>Принтер печати на этикетках Printronix 8000
Печатает уникальные коды на самоклеящихся этикетках.</p>
            </div>
          </div>
          <div className="equipment__items">
          <div className="equipment__item-img">

            <img src={img2} alt="" />
            </div>

            <div className="equipment__items-title">
<p>Станция Комплекс складских операций.
Простое решение для проведения складских операций и ведения складского учета.</p>
            </div>
          </div>
          <div className="equipment__items">
          <div className="equipment__item-img">

            <img src={img3} alt="" />
            </div>

            <div className="equipment__items-title">
<p>Станция агрегации АР-10С. Линия М.
Предназначенная для ручной агрегации вторичных упаковок в короба.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Equipment
