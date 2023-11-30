import React from 'react'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './Footer.css'

const Footer = () => {

    return (
        <footer className='section_padding footer_clr'>
            <div className="container">
                <div className="footer_nav_wrapper">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer_left_info mb-4 mb-lg-0 text-center text-md-start">
                                <div className="footer_logo mb-4">
                                    <img className='img-fluid' src={logo} alt="" />
                                </div>
                                <div className="footer_left_content">
                                    <p className='f_inter f_clr_19c2 fw-normal fs_18 mb-2'>
                                        Our website is more than just a digital presence. It's an invitation, an opportunity, and a resource for everyone who believes in the power of sustainable dining. We are excited to have you here, and we encourage you to explore, learn, and take action.
                                    </p>

                                    {/* <Link to={"telto:08000582673"} className='f_inter f_clr_19c2 fw-normal fs_18 text-decoration-none'>
                                        <p className='f_inter f_clr_19c2 fw-normal fs_18 mb-2'>
                                            0800 058 2673
                                        </p>
                                    </Link> */}

                                    <Link to={"mailto:hello@foodzee.co.uk"} className='f_inter f_clr_19c2 fw-normal fs_18 text-decoration-underline'>
                                        <p className='mb-3'>
                                            hello@foodzee.co.uk
                                        </p>
                                    </Link>

                                    {/* <p className='f_inter f_clr_19c2 fw-normal fs_18 my-2'>
                                        Foodzee, Floor 2, Falcon Point, Heath Hayes, <br /> Cannock, WS12 2DE
                                    </p> */}

                                </div>
                                <div className="footer_left_socialMedia d-flex justify-content-center justify-content-md-start">
                                    <Link to={"https://linkedin.com/company/foodzeeuk"} className='footer_link fs_18' target='_blank'>
                                        <FaLinkedin />
                                    </Link>

                                    <Link to={"https://www.facebook.com/FoodzeeUK/"} className='footer_link fs_18' target='_blank'>
                                        <FaFacebookF />
                                    </Link>

                                    <Link to={"https://www.instagram.com/foodzeeuk"} className='footer_link fs_18' target='_blank'>
                                        <FaInstagram />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <div className="footer_nav mb-4 mb-lg-0 text-center text-md-start">
                                <div className="nav_title">
                                    <h6 className='fw-semibold f_inter fs-5 fs_clr_19'>
                                        Primary Pages
                                    </h6>
                                </div>
                                <ul className='nav_links list-unstyled'>
                                    <li className='nav_item'>
                                        <Link to={"/"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                            Home
                                        </Link>
                                    </li>
                                    <li className='nav_item'>
                                        <Link to={"/mission"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                            Our Mission
                                        </Link>
                                    </li>
                                    <li className='nav_item'>
                                        <Link to={"/support"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                            Support
                                        </Link>
                                    </li>
                                    <li className='nav_item'>
                                        <Link to={"/contact"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li className='nav_item'>
                                        <Link to={"/privacy-policy"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-3">
                            <div className='d-lg-flex justify-content-center mb-4 mb-lg-0 text-center text-md-start'>
                                <div className="footer_nav">
                                    <div className="nav_title">
                                        <h6 className='fw-semibold f_inter fs-5 fs_clr_19'>
                                            Utility pages
                                        </h6>
                                    </div>
                                    <ul className='nav_links list-unstyled'>
                                        <li className='nav_item'>
                                            <Link to={"/support"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                                Support
                                            </Link>
                                        </li>
                                        <li className='nav_item'>
                                            <Link to={"/press"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                                Press
                                            </Link>
                                        </li>
                                        <li className='nav_item'>
                                            <Link to={"/not-found"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                                404 Not found
                                            </Link>
                                        </li>
                                        <li className='nav_item'>
                                            <Link to={"/protected"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                                Password protected
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className='d-lg-flex justify-content-center mb-4 mb-lg-0 text-center text-md-start'>
                                <div className="footer_nav">
                                    <div className="nav_title">
                                        <h6 className='fw-semibold f_inter fs-5 fs_clr_19'>
                                            Resources
                                        </h6>
                                    </div>
                                    <ul className='nav_links list-unstyled'>
                                        <li className='nav_item'>
                                            <Link to={"/support"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                                Support
                                            </Link>
                                        </li>
                                        <li className='nav_item'>
                                            <Link to={"/privacy-policy"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                                Privacy policy
                                            </Link>
                                        </li>
                                        <li className='nav_item'>
                                            <Link to={"/terms-of-conditions"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                                Terms & Conditions
                                            </Link>
                                        </li>
                                        <li className='nav_item'>
                                            <Link to={"/strategic-finance"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                                Strategic finance
                                            </Link>
                                        </li>
                                        <li className='nav_item'>
                                            <Link to={"/video-guide"} className='fs_18 fw-normal f_inter f_clr_19c2 text-decoration-none'>
                                                Video guide
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <p className='copyright fs-6 f_inter fw-normal f_clr_19c2 text-center py-3'>
                    © Copyright 2023, All Rights Reserved by Foodzee
                </p>
            </div>
        </footer>
    )
}

export default Footer