import React from 'react'
import PropTypes from 'prop-types'

import { Ordernation } from '../../molecule/Ordernation'
import Hero from '../../molecule/Hero'
import Loading from '../../Loading'

import './style.scss'

export const List = ({
  data,
  ordernationChange,
  checked,
  loading,
  favHero,
}) => (
  <section>
    <Loading isLoading={loading} />
    <Ordernation
      label={
        data ? `Econtrados ${data.count} heróis` : 'Nenhum herói encontrado'
      }
      ordernationChange={ordernationChange}
      checked={checked}
      firtsIcon="heroes"
      secondIcon="heart"
      secondText="Somente favoritos"
      firstText="Ordenar por nome - A/Z"
    />
    <div className="container">
      {!!data &&
        data.results.map((hero) => (
          <Hero
            image={`${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}`}
            key={hero.id}
            heroData={hero}
            favHero={favHero}
          />
        ))}
    </div>
  </section>
)

List.prototype = {
  data: PropTypes.object,
  ordernationChange: PropTypes.func,
  checked: PropTypes.bool,
  loading: PropTypes.bool,
  favHero: PropTypes.func,
}
