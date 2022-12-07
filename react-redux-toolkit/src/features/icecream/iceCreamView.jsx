import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from './icecreamSlice'

function IceCreamView() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch()

  return (
    <>
      <h2>Number of Ice Creams: {numOfIceCream}</h2>
      <button className="btn" onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <button className="btn-2" onClick={() => dispatch(restocked(1))}>Restock Ice Cream</button>
    </>
  );
}

export default IceCreamView;
