import spinner from '../assets/Winter.gif'

import React from 'react'

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '100px', margin: 'auto', display: 'box' }}
    />
  )
}

export default Spinner
