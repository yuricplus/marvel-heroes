import React, { useEffect, useState } from 'react'

import { Home } from '../../templates/Home'
import { getHeroes } from '../../../shared/services'

export const HomePage = () => {
  const [heroes, setHeroes] = useState(null)
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleListHeroes = async () => {
    setLoading(true)
    const response = await getHeroes(checked ? '-name' : 'name')
    try {
      setHeroes(response.data.data)
      setLoading(false)
    } catch (error) {
      setHeroes(null)
      setLoading(false)
    }
  }

  const handleOrdenationByName = (e) => {
    setChecked(e.target.checked)
  }

  const handleFavHero = async (heroId) => {
    let listFavStorage =
      JSON.parse(localStorage.getItem('listFavStorage')) || []

    if (listFavStorage.includes(heroId)) {
      listFavStorage = await listFavStorage.filter((item) => item !== heroId)

      localStorage.setItem('listFavStorage', JSON.stringify(listFavStorage))
      return
    }
    if (!listFavStorage.includes(heroId)) {
      listFavStorage.push(heroId)
      localStorage.setItem('listFavStorage', JSON.stringify(listFavStorage))
    }
  }

  useEffect(() => {
    handleListHeroes()
  }, [checked])

  return (
    <Home
      data={heroes}
      ordernationChange={handleOrdenationByName}
      checked={checked}
      loading={loading}
      favHero={handleFavHero}
    />
  )
}
