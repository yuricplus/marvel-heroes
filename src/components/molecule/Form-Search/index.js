import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Icon from '../../atom/Icon'

import './style.scss'

const Search = ({ placeholder, inputStyle }) => {
  const [value, setValue] = useState('')
  const history = useHistory()

  const handleSearch = () => {
    history.push(`/?search=${value}`)
    window.location.reload()
  }

  return (
    <div className={`form-seach form-lg ${inputStyle}`}>
      <input
        type="text"
        className="input-search"
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />

      <button
        className="search-btn"
        type="button"
        onClick={() => handleSearch()}
      >
        <Icon name="search" />
      </button>
    </div>
  )
}

export default Search
