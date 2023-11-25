import React from 'react'
import FoodZeeRightImg from '../../assets/join_foodze3.png'


const JoinFoodzee = () => {
    return (
        <section id='joinFoodZee' className='section_padding joinFoodZee_right_shape position-relative'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="joinFoodZee_left_content">
                            <div className="joinFoodZee_content_title pb_25">
                                <h2 className='fs_48 fw_extrabold text-black'>
                                    Join the <span className='f_clr_00'>Foodzee?</span> Family
                                </h2>
                            </div>
                            <div className="joinFoodZee_content_des pb_40">
                                <p className='fs_18 fw_medium f_inter'>
                                    Partnering with Foodzee means joining a network of culinary enthusiasts and professionals. Together, we can create delightful dining experiences for customers while ensuring your restaurant thrives. Sign up today to start maximizing your revenue and minimizing waste with Foodzee.
                                </p>
                            </div>
                            <div className="joinFoodZee_content_btn">
                                <button className="download_btn f_inter">
                                    Create account
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="joinFoodZee_right_img d-flex align-items-lg-end align-items-center">
                            <img className='img-fluid' src={FoodZeeRightImg} alt="foodzeeimg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinFoodzee