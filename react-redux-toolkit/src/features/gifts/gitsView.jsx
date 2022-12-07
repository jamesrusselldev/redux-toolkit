import React from 'react'
import { useSelector } from 'react-redux'

function GiftsView() {
  const giftAvailable = useSelector((state) => state.gift.numOfGifts)
  return (
    <div>Gifts Available: {giftAvailable}</div>
  )
}

export default GiftsView