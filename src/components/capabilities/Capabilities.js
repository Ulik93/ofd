import React from 'react'
import SecurityIcon from '@material-ui/icons/Security'
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import BuildIcon from '@material-ui/icons/Build'
import PanToolIcon from '@material-ui/icons/PanTool'
import MapIcon from '@material-ui/icons/Map'
import './index.css'



export default function Capabilities() {
    const items = [
        {name: "Безопасность", image: SecurityIcon, text: "Высокий уровень безопасности Ваших данных"},
        {name: "Поддержка 24/7", image: PermPhoneMsgIcon, text: "Наши специалисты круглосуточно готовы помочь Вам в подключении кассовых аппаратов к ОФД"},
        {name: "Надежность", image: VerifiedUserIcon, text: "Мы используем самое современное высокопроизводительное оборудование для хранения и обработки фискальных данных"},
        {name: "Удобные инструменты", image: BuildIcon, text: "В Личном кабинете для Вас реализованы инструменты управления кассами, детальная статистика по кассам и по торговым точкам"},
        {name: "Простые настройки", image: PanToolIcon, text: "Мы старались сделать сервис простым и удобным, чтобы Вы были довольны"},
        {name: "География", image: MapIcon, text: "Услуги ОФД оказываются на всей территории Кыргызской Республики"},
    ]
    return (
       <div className="wrapper benefits">
            <h1>
                Возможности и преимущества
            </h1>
            <div className="grid_container">
                {items.map((item, index) => {
                    return (
                        <div className="card" key={index} >
                           <div className="card_width">
                                <div className="icon">
                                {<item.image fontSize="large"/>}
                                </div>
                                <h2>{item.name}</h2>
                                <p>{item.text}</p>
                           </div>
                        </div>
                    )
                })}
            </div>
       </div>

    )
}
