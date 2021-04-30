import React from 'react'

import './style.scss'

const Toggle = (props) => {
  const {
    size = 'default',
    checked,
    onChange,
    offstyle = 'btn-danger',
    onstyle = 'btn-success',
  } = props

  const displayStyle = checked ? onstyle : offstyle
  return (
    <>
      <label>
        <span className={`${size} switch-wrapper`}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e)}
          />
          <span className={`${displayStyle} switch`}>
            <span className="switch-handle" />
          </span>
        </span>
      </label>
    </>
  )
}

export default Toggle
