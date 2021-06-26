import "./QesPrice.css"
import { PriceCart } from "../../common/index"

let priceCartIPData = [
    {
        title: "Электронные торги", description: "Для госзакупок и коммерческих торгов, получения банковской гарантии и обмена электронными документами на площадках",
        price: 1200, color: '#5b8ca7'
    },
    {
        title: "Работа на порталах", description: "Электронная подпись для порталов и систем – госуслуг, nalog.ru, ЕГАИС, Росреестр, ГИС ЖКХ, Росимущество, СМЭВ и другие",
        price: 2000, color: '#d15958'
    },
    {
        title: "Отчетность и документооборот", description: "Электронная подпись на портале gosuslugi.ru, для подачи заявления на поступление в ВУЗ, регистрации недвижимости, регистрации ЮЛ и ИП.",
        price: 2500, color: '#72b094'
    },
]

let peiceCartAllData = [
    {
        title: "Для личных целей", description: "Для госзакупок и коммерческих торгов, получения банковской гарантии и обмена электронными документами на площадках",
        price: 1200, color: '#5b8ca7'
    },
    {
        title: "Для всех и для всего", description: "Не хотите ломать голову, закажите подпись «Для всего», которая подойдет для любых сфер применения и всех торговых площадок",
        price: 1200, color: '#ff7033'
    },
]





let priceCartsIP = priceCartIPData.map(data => <PriceCart title={data.title} description={data.description} price={data.price} color={data.color} />)


const QesPrice = () => {
    return (
        <section className="qesPrice">
            <div className="container">
                <h2 className="qes__title">Для любых задач</h2>
                <div className="qesPrice__wrapper">
                    <div className="qesPrice__category">
                        <span className="qesPrice__subtitle">Юридическим лицам и ИП</span>
                        <div className="qesPrice__block-F">{priceCartsIP}</div>
                    </div>
                    <div className="qesPrice__category category__block">
                        <span className="qesPrice__subtitle">Физическим лицам</span>
                        <div className="qesPrice__block-B"><PriceCart title={peiceCartAllData[0].title} description={peiceCartAllData[0].description} price={peiceCartAllData[0].price} color={peiceCartAllData[0].color} /></div>
                    </div>
                    <div className="qesPrice__category category__block">
                        <span className="qesPrice__subtitle"></span>
                        <div className="qesPrice__block-B"><PriceCart title={peiceCartAllData[1].title} description={peiceCartAllData[1].description} price={peiceCartAllData[1].price} color={peiceCartAllData[1].color} /></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default QesPrice