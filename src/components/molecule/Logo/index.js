import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Logo = ({ size }) => (
  <Link to="/">
    <div className={`logo-image-lg header-logo size-${size}`}></div>
  </Link>
)

export default Logo
