import React from 'react'

import './style.scss'

const Loading = ({ isLoading }) => (
  <>{!!isLoading && <div className="loading-container"></div>}</>
)

export default Loading
