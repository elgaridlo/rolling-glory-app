import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = ({size}) => {
  if(!size) size = 50

    return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        margin: 'auto',
        display: 'block',
      }}
    >
    </Spinner>
  )
}

export default Loader
