import React from 'react'
import styled from 'styled-components'

function Card({ value, image, suit }) {
  console.log(value, image, suit)
  return (
    <div>
      {value}
      {suit}
      <img width={200} height={200} style={{objectFit:"contain"}} src={image} />
    </div>
  )
}

export default Card