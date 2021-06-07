import React from 'react'
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import RateReviewIcon from '@material-ui/icons/RateReview';
import './index.css'

export default function ServiceStart() {
    const items = [
        {image: ImportantDevicesIcon, text: "Зарегистрируйтесь\\войдите в личный кабинет ОФД-НН"},
        {image: ContactMailIcon, text: "Подключите услугу ОФД «Новая Норма»"},
        {image: RateReviewIcon, text: "Зарегистрируйте кассу с помощью ОФД-НН или в личном кабинете"}
    ]
    return (
        <div className="red_top">
            <div className="wrapper">
            <h1 className="h1text">Как начать работу с сервисом</h1>

            <div className="flex_box">
                {items.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="index"><h3>{index + 1}</h3></div>
                            <div className="second_index">
                                <div className="icon">
                                    <item.image fontSize="large"/>
                                </div>
                                <p className="text">{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}
