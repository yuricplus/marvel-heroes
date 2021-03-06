import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atom/Icon'
import Card from '../../atom/card'

import './style.scss'

const BoxHero = (props) => {
  const { hero, series } = props

  return (
    !!hero && (
      <>
        <section className="container-box">
          <span className="bg-name">{hero[0].name}</span>
          <div className="cnt-texts">
            <div className="cnt-tlt">
              <h1>{hero[0].name}</h1>
              <Icon name="heart" />
            </div>
            <div>
              <p>{hero[0].description}</p>
            </div>
            <div className="cnt-tlt">
              <div>
                <span>Quadrinhos</span>
                <p>
                  <Icon name="books" /> {hero[0].comics.available}
                </p>
              </div>
              <div>
                <span>Filmes</span>
                <p>
                  <Icon name="video" /> {hero[0].series.available}
                </p>
              </div>
            </div>
            <div>
              <p>Rating:</p>
              <p>ultima lancamento</p>
            </div>
          </div>
          <div
            style={{
              background: `url(${hero[0].thumbnail.path}/portrait_uncanny.${hero[0].thumbnail.extension})`,
              backgroundSize: '300px',
              width: 300,
              height: '450px',
              zIndex: 1,
            }}
          ></div>
        </section>
        <div className="list-series">
          <span className="bold ">Ultimos lançamentos</span>
        </div>
        <div className="list-series">
          {!!series &&
            series.map((item) => (
              <div className="cnt-card">
                <Card
                  image={`${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`}
                  text={item.title}
                  key={item.id}
                />
                <span className="bold ">{item.title}</span>
              </div>
            ))}
        </div>
      </>
    )
  )
}

BoxHero.prototype = {
  hero: PropTypes.array,
}

export default BoxHero
