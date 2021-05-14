import React from 'react'
import './equipment.css'
let arr = [
  {
  title: 'оборудование',
  
  }
]
const Equipment = (date) => {
  return (
    <div className="equipment">
      <h1>{arr.map((item)=>{
        return(
          item.title
        )
      })}</h1>

      </div>
  )
}

export default Equipment
