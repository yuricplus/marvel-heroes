import React from 'react'

import Nav from '../../organism/Nav'
import { List } from '../../organism/List'
import Pagination from '../../organism/Pagination'

export const Home = ({
  data,
  ordernationChange,
  checked,
  loading,
  favHero,
  offset,
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
    <Pagination offset={offset} />
  </section>
)
