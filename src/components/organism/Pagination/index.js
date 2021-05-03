import React from 'react'
import { useHistory } from 'react-router-dom'

const Pagination = ({ offset }) => {
  const pages = offset / 20
  // eslint-disable-next-line radix
  const list = new Array(parseInt(pages.toFixed(0))).fill('')
  const history = useHistory()

  const handleSearch = (index) => {
    history.push(`/?page=${index + 1}`)
    window.location.reload()
  }
  return (
    <div className="cnt-pagination">
      {list.map((item, index) => (
        <button
          type="button"
          key={Math.random}
          className="btn-page"
          onClick={() => handleSearch(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}
export default Pagination
