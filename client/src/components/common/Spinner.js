import React from 'react'
import spinner from '../../utils/images/spinner.gif'
export default () => {
  return (
    <div className='spinner'>
      <img
        alt="Loading"
        src={spinner}
      />
    </div>
  )
}
