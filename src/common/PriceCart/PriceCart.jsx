import "./PriceCart.css"

const PriceCart = (props) => {
    return (
        <div className="priceCart">
            <div className="priceCart__line" style ={{background:props.color}}></div>
            <span className="priceCart__title">{props.title}</span>
            <p className="priceCart__text">{props.description}</p>
            <div className="priceCart__bottom">
                <span className="priceCart__price">от {props.price} сом</span>
                <button className="btn__submit">Купить ЭЦП</button>
            </div>
        </div>
    )
}

export default PriceCart