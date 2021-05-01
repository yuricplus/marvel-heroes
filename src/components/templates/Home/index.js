import React from 'react'

import Nav from '../../organism/Nav'
import { List } from '../../organism/List'

export const Home = ({
  data,
  ordernationChange,
  checked,
  loading,
  favHero,
}) => (
  <section>
    <Nav />
    <List
      data={data}
      ordernationChange={ordernationChange}
      checked={checked}
      loading={loading}
      favHero={favHero}
    />
  </section>
)
