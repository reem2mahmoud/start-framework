import React from 'react'
import portfolio_img1 from "../../assets/port1.png"
import portfolio_img2 from "../../assets/port2.png"
import portfolio_img3 from "../../assets/port3.png"
import $ from './../../../node_modules/jquery/dist/jquery.min.js';

export default function Portfolio() {
  $(function () {
    $(".portfolio_block").click(function () {
      let index = $(".portfolio_block").index(this)
      console.log(index)
      let imgSrc = $("img").eq(index).attr("src")
      console.log(imgSrc)
      $(".imgPreview").css("display", "flex")
      $(".imgPreview img").attr("src", imgSrc)
    })
    $(".imgPreview").click(function () {
      $(".imgPreview").css("display", "none")
    })
  })
  return (
    <div className="main_part portfolio_page">
      <div className="container">
        <div className="black_header text-center mt-5">
          <h2 className="fs-1 fw-bold text-uppercase">portfolio componenet</h2>
          <div className="divider d-flex justify-content-center align-items-center">
            <div className="line_divider"></div>
            <i className="fa-solid fa-star mx-3 my-3"></i>
            <div className="line_divider"></div>
          </div>
        </div>
        <div className="portfolio_content row g-5 py-3">
          <div className="col-md-4 portfolio_block" >
            <div className="img_container position-relative">
              <div className="content_overlay ">
                <i className="fa-solid fa-plus text-white  fw-bold"></i>
              </div>
              <img src={portfolio_img1} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-md-4 portfolio_block">
            <div className="img_container position-relative">
              <div className="content_overlay ">
                <i className="fa-solid fa-plus text-white  fw-bold"></i>
              </div>
              <img src={portfolio_img2} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-md-4 portfolio_block">
            <div className="img_container position-relative">
              <div className="content_overlay ">
                <i className="fa-solid fa-plus text-white  fw-bold"></i>
              </div>
              <img src={portfolio_img3} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-md-4 portfolio_block">
            <div className="img_container position-relative">
              <div className="content_overlay ">
                <i className="fa-solid fa-plus text-white  fw-bold"></i>
              </div>
              <img src={portfolio_img1} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-md-4 portfolio_block">
            <div className="img_container position-relative">
              <div className="content_overlay ">
                <i className="fa-solid fa-plus text-white  fw-bold"></i>
              </div>
              <img src={portfolio_img2} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-md-4 portfolio_block">
            <div className="img_container position-relative">
              <div className="content_overlay ">
                <i className="fa-solid fa-plus text-white  fw-bold"></i>
              </div>
              <img src={portfolio_img3} alt="" className="w-100" />
            </div>
          </div>


        </div>

      </div>
      <div className="imgPreview ">
        <img alt="image" src="" />
      </div>
    </div>
  )
}