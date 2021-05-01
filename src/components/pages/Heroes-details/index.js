import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import HeroDetails from '../../templates/Hero-details'
import { getHeroById, getSeriesByHeroId } from '../../../shared/services'

const HeroesDetailsPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams()
  const [hero, setHero] = useState(null)
  const [series, setSeries] = useState(null)

  const handleSerieInfo = async () => {
    try {
      const seriesData = await getSeriesByHeroId(id)
      setSeries([seriesData.data.data.results])
    } catch (error) {
      setSeries(null)
    }
  }

  const handleHeroInformation = async () => {
    try {
      const response = await getHeroById(id)
      setHero(response.data.data.results)
      handleSerieInfo()
    } catch (error) {
      setHero(null)
    }
  }

  useEffect(() => handleHeroInformation())

  return <HeroDetails hero={hero} series={series} />
}

export default HeroesDetailsPage
