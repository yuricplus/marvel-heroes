import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Home } from '../../templates/Home'
import { getHeroes, getHeroesSearch } from '../../../shared/services'

export const HomePage = () => {
  const [heroes, setHeroes] = useState(null)
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0)

  function useQuery() {
    return useLocation().search
  }

  const query = useQuery()

  const handleListHeroes = async () => {
    let response
    setLoading(true)
    if (query.includes('?search='))
      response = await getHeroesSearch(checked ? '-name' : 'name')
    else
      response = await getHeroes(checked ? '-name' : 'name', query || '?page=1')
    try {
      // eslint-disable-next-line no-console
      setHeroes(response.data.data)
      setOffset(response.data.data.total)
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
      offset={offset}
    />
  )
}
