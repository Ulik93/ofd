import React from "react"
import "./ConnectToOfd.css"

const ConnectToOfd = () => {
  return (
    <div className="ofd-connect">
      <div className="ofd-connect__select-days">
        <div className="ofd-connect__date">6 месяцев</div>
        <div className="ofd-connect__price">
          1 634 <span>сом</span>
        </div>
        <div className="ofd-connect__price-in-day">9.08 сом/день</div>
      </div>
      <div className="ofd-connect__select-days">
        <div className="ofd-connect__date">12 месяцев</div>
        <div className="ofd-connect__price">
          2 995 <span>сом</span>
        </div>
        <div className="ofd-connect__price-in-day">8.20 сом/день</div>
      </div>
      <div className="ofd-connect__select-days">
        <div className="ofd-connect__date">32 месяцев</div>
        <div className="ofd-connect__price">
          3 700 <span>сом</span>
        </div>
        <div className="ofd-connect__price-in-day">8.90 сом/день</div>
      </div>
    </div>
  )
}

export default ConnectToOfd
