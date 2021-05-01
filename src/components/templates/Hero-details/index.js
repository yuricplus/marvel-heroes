import React from 'react'

import Nav from '../../organism/Nav'
import BoxHero from '../../organism/Box-hero'

import './style.scss'

const HeroDetails = ({ hero }) => (
  <section className="theme-green">
    <Nav size="sm" colorInput="light" />
    <BoxHero hero={hero} />
  </section>
)

export default HeroDetails
