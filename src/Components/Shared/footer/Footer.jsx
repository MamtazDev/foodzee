import React from 'react'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './Footer.css'

const Footer = () => {

    return (
        <footer className='section_padding footer_clr'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer_left_info">
                            <div className="footer_logo mb-4">
                                <img className='img-fluid' src={logo} alt="" />
                            </div>
                            <div className="footer_left_content mb-4">
                                <p className='f_inter f_clr_19 fw-normal fs_18'>
                                    Our website is more than just a digital presence. It's an invitation, an opportunity, and a resource for everyone who believes in the power of sustainable dining. We are excited to have you here, and we encourage you to explore, learn, and take action.
                                </p>
                                <Link to={"mailto:hello@foodzee.co.uk"} className='f_inter f_clr_19 fw-normal fs_18 text-decoration-underline'>
                                    hello@foodzee.co.uk
                                </Link>
                            </div>
                            <div className="footer_left_socialMedia d-flex">
                                <Link to={"#"} className='footer_link fs_18'>
                                    <FaTwitter />
                                </Link>
                                <Link to={"#"} className='footer_link fs_18'>
                                    <FaFacebookF />
                                </Link>
                                <Link to={"#"} className='footer_link fs_18'>
                                    <FaInstagram />
                                </Link>
                                <Link to={"#"} className='footer_link fs_18'>
                                    <FaGithub />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-1">
                        1212
                    </div>
                    <div className="col-lg-3">
                        212
                    </div>
                    <div className="col-lg-2">
                        12
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer