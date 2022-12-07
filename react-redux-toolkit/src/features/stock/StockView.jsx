import React from 'react'
import { useSelector } from 'react-redux'

function StockView() {
  const stocks = useSelector((state) => state.stock.stock)
  return (
    <div>Number of Stocks: {stocks}</div>
  )
}

export default StockView