import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import HeroDetails from '../../templates/Hero-details'
import { getHeroById, getSeriesByHeroId } from '../../../shared/services'

const HeroesDetailsPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams()
  const [hero, setHero] = useState(null)
  const [series, setSeries] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSerieInfo = async () => {
    try {
      setLoading(true)
      const seriesData = await getSeriesByHeroId(id)
      setSeries(seriesData.data.data.results)
      setLoading(false)
    } catch (error) {
      setSeries(null)
      setLoading(false)
    }
  }

  const handleHeroInformation = async () => {
    try {
      setLoading(true)
      const response = await getHeroById(id)
      setHero(response.data.data.results)
      handleSerieInfo()
      setLoading(false)
    } catch (error) {
      setHero(null)
      setLoading(false)
    }
  }

  useEffect(() => {
    handleHeroInformation()
  }, [])

  return <HeroDetails hero={hero} series={series} isloading={loading} />
}

export default HeroesDetailsPage
