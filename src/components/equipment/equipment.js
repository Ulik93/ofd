import React from "react"
// import { Swiper, SwiperSlide } from 'swiper/react'; Библ-ка установлено
// import 'swiper.css'; тоже

import EquipmentMain from "../kassa/EquipmentMain"

import "./equipment.sass"
const Equipment = (date) => {
  return (
    <div className="equipment">
      <h1>оборудование</h1>
      <EquipmentMain />
    </div>
  )
}
export default Equipment
