import React from 'react'

import './Result.css'

export default ({img, loading, error}) => {
  return (
    <div className="result">
      {
        error ? 
          <p className="error">{error}</p> :
        loading && !img ? 
          <span id="loading" className="animated flash infinite">...</span> :
          <img id="resImg" src={img} alt=""/>
      }
    </div>
  )
}

