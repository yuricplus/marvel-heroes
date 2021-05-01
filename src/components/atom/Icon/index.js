import React from 'react'

import './style.scss'
const Icon = ({ name, click }) => (
  <i className={`icon icon-${name} ${click}`}></i>
)

export default Icon
