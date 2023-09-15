import React from 'react'

export default function About() {
  return (
    <div className="main_part about_page text-white">
      <div className="container d-flex flex-column justify-content-center 
  align-items-center ">
        <h2 className="fs-1 text-uppercase  text-center">
          about component
        </h2>
        <div className="divider d-flex justify-content-center align-items-center">
          <div className="line_divider"></div>
          <i className="fa-solid fa-star mx-3 my-3"></i>
          <div className="line_divider"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-5">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-5">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
