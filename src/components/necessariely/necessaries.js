import React from 'react'
import './index.css'
import image from '../header/logo.png'
import image2 from './marking.svg'

export default function Necessaries() {
    return (
        <div className="wrapper">
            <div className="necessary_flex">
                <div className="marking_flex">
                    <div className="main_text">
                        <h1>Обязательная маркировка товаров</h1>
                        <p>Обязательная цифровая маркировка товаров для опта и розницы начинается с 2021 года.</p>
                    </div>
                    <div>
                        <img className="logo" src={image}/>
                    </div>
                </div>
                <div className="marking_flex">
                    <div className="marking_child">
                        <h3>Первый ОФД уже участвует в проекте по маркировке</h3>
                        <p>
                            ОФД "Новая Норма" принимает участие в государственных экспериментах по цифровой маркировке товаров, интегрирован и активно взаимодействует по проекту маркировки с Центром развития перспективных технологий (ЦРПТ).
                            Приглашаем представителей от оптовой и розничной торговли стать участниками пилотных проектов.
                        </p>
                        <div>
                            <button className="ofd__section-btn knopka">Подробнее про маркировку</button>
                        </div>
                    </div>
                <div className="image_1">
                        <img src={image2}/>
                </div>
                </div>         
            </div>

        </div>
    )
}
