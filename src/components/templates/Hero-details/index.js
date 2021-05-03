import React from 'react'

import Nav from '../../organism/Nav'
import BoxHero from '../../organism/Box-hero'
import Loading from '../../molecule/Loading'

import './style.scss'

const HeroDetails = ({ hero, isloading, series }) => (
  <section className="theme-green">
    <Loading isLoading={isloading} />
    <Nav size="sm" colorInput="light" />
    <BoxHero hero={hero} series={series} />
  </section>
)

export default HeroDetails
