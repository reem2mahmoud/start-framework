import React from 'react'
import avatar from "../../assets/avataaars.svg"

export default function Home() {


  return (
    <div className="main_part home_page">
      <div className="text-center text-white">
        <div className="w-75 mt-2 mb-4 mx-auto">
          <img src={avatar} alt="avatar" className="d-block"/>
        </div>
        <div>
          <h2 className="fs-1 fw-bold text-uppercase">start framework</h2>
          <div className="divider d-flex justify-content-center align-items-center">
            <div className="line_divider"></div>
            <i className="fa-solid fa-star mx-3 my-3"></i>
            <div className="line_divider"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>

    </div>

  )
}
