import React, { useState } from 'react'

import Icon from '../../atom/Icon'
import Toggle from '../../atom/Toogle'

import './style.scss'

export const Ordernation = (props) => {
  const { label, firtsIcon, secondIcon, secondText, firstText } = props
  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setChecked(e.target.checked)
    console.log('oi')
  }

  return (
    <section className="cnt-ordenation">
      <div className="content">
        <div className="item-algn-left">
          <span className="label-text color-gray">{label}</span>
        </div>
        <div className="itens-algn-right">
          <div className="icon-label">
            <Icon name={firtsIcon} />
            <span className="label-text color-red">{firstText}</span>
          </div>
          <div>
            <Toggle
              checked={checked}
              size="default"
              disabled={false}
              onChange={handleChange}
              offstyle="btn-danger"
              onstyle="btn-success"
            />
          </div>
          <div className="icon-label">
            <Icon name={secondIcon} />
            <span className="label-text color-red">{secondText}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
