import React from 'react'

import Logo from '../../molecule/Logo'
import Search from '../../molecule/Form-Search'

import './style.scss'

const Nav = ({ size = 'default', colorInput }) => (
  <div className="container-header">
    <div className={`content-center size-${size}`}>
      <Logo size={size} />
      <h1 className="title-font">Explore o universo</h1>
      <p className="description">
        Mergulhe no dominio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!{' '}
      </p>
      <Search placeholder="Procure por heróis" inputStyle={colorInput} />
    </div>
  </div>
)

export default Nav
