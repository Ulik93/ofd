import "./Collapse.css"
import React, {useState} from "react"

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    function openCollapse() {
        console.log('Click')
        setIsOpen( prev => prev=!prev)
    } 
    return (
        <div className={isOpen ? "collapse isOpen":"collapse"}>
            <div className="collapse__row" onClick ={openCollapse}><span className="collapse__arrow">></span> <span className="collapse__title">{props.title}</span></div>
            <div className="collapse__content">
                <img src={props.img} alt="" className="collapse__img"/>
                <div className="collapse__text">{props.text}</div>
            </div>
        </div>
    )
}

export default Collapse