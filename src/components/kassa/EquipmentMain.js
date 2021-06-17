import React from "react"
import { BrowserRouter } from "react-router-dom"
import ControlTech from "./Parts/ControlTech"
import img7 from "./images/7.png"
import img15 from "./images/16.jpg"
import port600 from "./images/port600.jpg"
// import Rashod from "./Parts/Rashod";

import "./Equipments.css"

export default function EquipmentMain() {
  const staffs4 = [
    {
      title: "ПОРТ-1000Ф",
      desc: `Касса, которой можно управлять с телефона.
          Встроенный компьютер.*
          Работает на Windows, Android, Linux.`,
      image: img7,
    },
    {
      title: "ПОРТ - 600Ф",
      desc: `Bluetooth / USB / LAN / Денежный ящик / Дисплей покупателя
          В стандартной поставке 1С
          Автоматический отрезчик кассовой ленты`,
      image: port600,
    },
    {
      title: "ПОРТ - 100Ф",
      desc: `3 цвета: классический, черный, голубой.
          Можно подключить любое периферийное устройство.
          Удобна смена кассовой ленты.`,
      image: img15,
    },
  ]
  return (
    <BrowserRouter>
      <ControlTech data={staffs4} />
    </BrowserRouter>
  )
}
