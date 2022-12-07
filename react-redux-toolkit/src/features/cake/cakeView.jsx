import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "../cake/cakeSlice";

function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const [stock, setStock] = useState()

  const handleChange = (e) => {
    setStock(+e.target.value)
  }

  const dispatch = useDispatch();
  const handleRestocked = () => {
    dispatch(restocked(stock))
    setStock('')
  }
  return (
    <>
      <h2>Number ot Cakes: {numOfCakes}</h2>
      <button className="btn" onClick={() => dispatch(ordered())}>
        Order Cake
      </button>

      <input type="text" value={stock} placeholder="Enter number of stock" onChange={handleChange} />
      <button className="btn-2" onClick={handleRestocked}>
        Restock Cake
      </button>
    </>
  );
}

export default CakeView;
