import React from 'react'

import './style.scss'

const Card = (props) => {
  const { image, text } = props
  return (
    <div className="card">
      <div className="content-image">
        <img src={image} alt={text} />
      </div>
    </div>
  )
}

export default Card
