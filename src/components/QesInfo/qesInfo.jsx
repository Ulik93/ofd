import "./QesInfo.css"

const QesInfo = () => {
    return (
        <section className="qesInfo">
            <div className="container">
                <h1 className="qesInfo__title">
                    ЭЛЕКТРОННАЯ ПОДПИСЬ ЗА ЧАС</h1>
                <ul className="qesInfo__list">
                    <li className="qesInfo__item">Онлайн-оформление</li>
                    <li className="qesInfo__item">Всего два документа</li>
                    <li className="qesInfo__item">Доставка «в руки»</li>
                </ul>
                <button className="btn__submit">Получить подпись</button>
            </div>
        </section>
    )
}

export default QesInfo