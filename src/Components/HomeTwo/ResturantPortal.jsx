import React from 'react'
import resturantPortalImg from '../../assets/laptop-img-resturantportal.png'

const ResturantPortal = () => {
    return (
        <section id='resturant-portal' className='section_padding'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="resturant-portal-content-wrapper">
                            <div className="joinFoodZee_cachy_title pb_25">
                                <h2 className='fs_48 fw_extrabold text-white'>
                                    Welcome to <span className='f_clr_00'>Foodzee's</span> <br />
                                    Restaurant Portal
                                </h2>
                            </div>

                            <div className="joinFoodZee_cachy_content">
                                <p className='fs-5 fw-semibold text-white mb-4'>
                                    <span className='me-2 f_clr_00 fw-bold'>
                                        Customizable Team Access:
                                    </span>
                                    Assign role-specific access to your team,
                                    ensuring efficient management and data security.
                                </p>

                                <p className='fs-5 fw-semibold text-white mb-4'>
                                    <span className='me-2 f_clr_00 fw-bold'>
                                        Booking Oversight:
                                    </span>
                                    Easily track current and past reservations to optimize
                                    dining experiences and operational flow.
                                </p>

                                <p className='fs-5 fw-semibold text-white mb-4'>
                                    <span className='me-2 f_clr_00 fw-bold'>
                                        Creative Offer Management:
                                    </span>
                                    Design and publish unique offers, drawing
                                    in customers and boosting sales.
                                </p>

                                <p className='fs-5 fw-semibold text-white mb-4'>
                                    <span className='me-2 f_clr_00 fw-bold'>
                                        Revenue Tracking:
                                    </span>
                                    Monitor the success of your promotions and adjust
                                    strategies for maximum profitability.
                                </p>

                                <p className='fs-5 fw-semibold text-white mb-4'>
                                    <span className='me-2 f_clr_00 fw-bold'>
                                        Customer Analytics:
                                    </span>
                                    Gain insights into dining trends and customer preferences
                                    to tailor your services effectively.
                                </p>

                                <button className='partner_growth_btn'>
                                    Create account
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="resturant-img">
                            <img className='img-fluid' src={resturantPortalImg} alt="resturant-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResturantPortal