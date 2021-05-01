import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Card from '../../atom/card'
import Icon from '../../atom/Icon'

import './style.scss'

const Hero = (props) => {
  const { heroData, image, favHero } = props
  const [liked, setLiked] = useState([])
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    setLiked(JSON.parse(localStorage.getItem('listFavStorage')) || [])
  }, [update])

  return (
    <div className="hero-box">
      <Link to={`/hero-details/${heroData.id}`}>
        <Card image={image} text={heroData.name} />
      </Link>
      <div className="content-info">
        <p className="text bold">{heroData.name}</p>
        <button
          className="btn-transparent"
          type="button"
          onClick={() => {
            setLiked(JSON.parse(localStorage.getItem('listFavStorage')) || [])
            setUpdate(true)
            favHero(heroData.id)
          }}
        >
          <Icon
            name={liked.includes(heroData.id) ? 'heart-liked' : 'heart'}
            click="pointer"
          />
        </button>
      </div>
    </div>
  )
}

export default Hero
