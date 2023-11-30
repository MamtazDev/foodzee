import React from 'react'
import { Link } from 'react-router-dom'

const PartnerGrowth = () => {
    return (
        <section id='partner_growth' className='section_padding'>
            <div className="container">
                <div className="partner_growth_wrapper">
                    <div className="partner_growth_content text-center">
                        <h2 className='fs_60 fw_extrabold text-white mb-4'>
                            Your Partner in Growth
                        </h2>

                        <p className='f_inter fw-normal fs-6 text-white mb-5'>
                            Foodzee's restaurant portal streamlines operations, engages diners, <br />
                            and enhances revenue, all in one intuitive platform.
                        </p>

                        <button className='partner_growth_btn'>
                            <Link style={{ color: "#075759" }} to={"https://appfzeitappdevuw02.azurewebsites.net/Auth/Register/Cover"} className='text-decoration-none' target='_blank'>
                                Create account
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnerGrowth