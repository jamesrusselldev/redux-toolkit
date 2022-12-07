import React from "react";
import { useSelector } from "react-redux";

function CookiesView() {
  const numOfCookies = useSelector((state) => state.cookie.numOfCookies);
  return (
    <>
      <h2>Number ot Cookies: {numOfCookies}</h2>
      <button className="btn">Order Cookies</button>
      <button className="btn-2">Restock Cookies</button>
    </>
  );
}

export default CookiesView;
