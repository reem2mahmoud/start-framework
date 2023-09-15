import React from 'react'
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="text-white ">
            <div className="footer_about">
                <div className="container">
                    <div className="row text-center py-5">
                        <div className="col-sm-6 col-md-4 footer_about_block my-5">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className="col-sm-6 col-md-4 footer_about_block my-5">
                            <h3>AROUND THE WEB</h3>
                            <ul className="list-unstyled d-flex justify-content-center">
                                <li><Link href="">
                                    <i className="fa-brands fa-facebook"></i></Link></li>
                                <li><Link href="">
                                    <i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link href="">
                                    <i className="fa-brands fa-linkedin-in"></i></Link></li>
                                <li><Link href="">
                                    <i className="fa-solid fa-globe"></i></Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-4 footer_about_block my-5">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_copyRights py-3 d-flex justify-content-center align-items-center">
                <div className="row">
                    <p>Copyright © Your Website 2021</p>
                </div>
            </div>

        </footer>
    )
}
