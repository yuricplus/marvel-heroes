import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Logo = () => (
  <Link to="/">
    <div className="logo-image-lg header-logo"></div>
  </Link>
)

export default Logo
