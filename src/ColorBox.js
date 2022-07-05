import React from 'react'

const ColorBox = ({color, isDarkText}) => {
    let darkness = isDarkText ? "black" : "white"
  return (
        <div className='colorBox'
            style={{backgroundColor: color}}>
                <p style={{color: darkness}}>{color ? color : "empty"}</p>
            </div>
  )
}

export default ColorBox