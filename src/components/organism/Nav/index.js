import React from 'react';

import Logo from '../../molecule/Logo'
import Search from '../../molecule/Form-Search';

import './style.scss'

const Nav = () => {
    return (
        <div className="container-header">
          <div className="content-center">
            <Logo/>
            <h1 className="title-font">Explore o universo</h1>
            <p className="description">Mergulhe no dominio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve! </p>
          </div>
          <div>
             <Search placeholder="Procure por heróis"/>
          </div>
        </div>
    )
}

export default Nav