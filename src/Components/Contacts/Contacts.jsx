import React from 'react'

export default function Contacts() {
  return (
    <div className="main_part contacts_page">
      <div className="container">
        <div className="black_header text-center my-5">
          <h2 className="fs-1 fw-bold text-uppercase">contact section</h2>
          <div className="divider d-flex justify-content-center align-items-center">
            <div className="line_divider"></div>
            <i className="fa-solid fa-star mx-3 my-3"></i>
            <div className="line_divider"></div>
          </div>
        </div>
        <div className="contact_form row d-flex justify-content-center">
          <form action="" className="col-md-7">
            <div className="form-floating mb-4">
              <input type="text" className="form-control border-0 border-bottom" id="floatingInputName" placeholder="name@example.com" />
              <label htmlFor="floatingInputName">userName :</label>
            </div>
            <div className="form-floating mb-4">
              <input type="text" className="form-control border-0 border-bottom" id="floatingInputAge" placeholder="name@example.com" />
              <label htmlFor="floatingInputAge">userAge : </label>
            </div>
            <div className="form-floating mb-4">
              <input type="email" className="form-control border-0 border-bottom" id="floatingInputEmail" placeholder="name@example.com" />
              <label htmlFor="floatingInputEmail">userEmail :</label>
            </div>
            <div className="form-floating mb-4">
              <input type="password" className="form-control border-0 border-bottom" id="floatingInputPass" placeholder="name@example.com" />
              <label htmlFor="floatingInputPass">userPassword : </label>
            </div>
            <button className="btn send_btn mb-5">send Message </button>
          </form>
        </div>

      </div>

    </div>
  )
}
