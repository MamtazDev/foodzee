import React from 'react'
import FoodZeeCachyImg from '../../assets/join_foodze4.png'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
// import 'react-accessible-accordion/dist/fancy-example.css';
import arrowRight from "../../assets/arrow-right.png";
import { Link } from 'react-router-dom';

const FoodzaaCachy = () => {
    return (
        <section id='foodzaaCachy' className='section_padding_80'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="joinFoodZee_cachy_img">
                            <img className='img-fluid' src={FoodZeeCachyImg} alt="img" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="joinFoodZee_cachy_content">

                            <div className="joinFoodZee_cachy_title pb_25">
                                <h2 className='fs_48 fw_extrabold text-black'>
                                    The <span className='f_clr_00'>Foodzee</span> Way
                                </h2>
                            </div>

                            <div className="joinFoodZee_cachy_links">
                                <Link to="#" className='joinFoodZee_chachy_linksItem text-decoration-none fs-4 fw_medium text-black d-flex align-items-center justify-content-between'>
                                    Foodzee: Where Every Meal is a Deal!
                                    <span>
                                        <img src={arrowRight} alt="right-arrow" />
                                    </span>
                                </Link>
                            </div>

                            <div className="joinFoodZee_cachy_links">
                                <Link to="#" className='joinFoodZee_chachy_linksItem text-decoration-none fs-4 fw_medium text-black d-flex align-items-center justify-content-between'>
                                    Dine Smart, Save Big - Welcome To Foodzee
                                    <span>
                                        <img src={arrowRight} alt="right-arrow" />
                                    </span>
                                </Link>
                            </div>

                            <div className="joinFoodZee_cachy_links">
                                <Link to="#" className='joinFoodZee_chachy_linksItem text-decoration-none fs-4 fw_medium text-black d-flex align-items-center justify-content-between'>
                                    Foodzee Turning Tables Into Opportunities
                                    <span>
                                        <img src={arrowRight} alt="right-arrow" />
                                    </span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FoodzaaCachy