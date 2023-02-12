import "./topbar.css"
import React from "react"
import {Link} from "react-router-dom"

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-linkedin"></i>
      </div>
      <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">
          <Link className="link"  to="/">Home</Link></li>
        <li className="topListItem">
          <Link className="link"  to="/About">About</Link></li>

      </ul>
      </div>
      <div className="topRight">
<img className="topImg" src = "pp.jpg" alt=""/>
<i className ="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
  )
}

