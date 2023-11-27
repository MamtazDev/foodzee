import React from 'react'
import achivementIcon from '../../assets/unlock_growup.png'
import achivementIcon2 from '../../assets/unlock_growup2.png'

const UnlockAchivement = () => {
    return (
        <section id='unlock_achivement' className='section_padding'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="unlock_achivement_card_wrapper bg_clr_91 d-flex flex-column flex-fill h-100">
                            <div className="unlock_achivement_card_head ">
                                <div className="unlock_achivement_card_icon ">
                                    <img className='img-fluid' src={achivementIcon} alt="icon" />
                                </div>
                                <div className="unlock_achivement_card_title">
                                    <h2 className='fs_30 fw_extrabold'>
                                        Unlock New Revenue Streams During Off-
                                    </h2>
                                </div>
                            </div>

                            <div className="unlock_achivement_card_content">
                                <div className="unlock_achivement_card_des">
                                    <p className='fs-5 fw-medium'>
                                        Peak Hours At Foodzee, we understand that every restaurant experiences quiet periods. Our platform is designed to help you turn these slower times into profitable opportunities. By partnering with us, you can attract more customers during these off-peak hours, ensuring a steady flow of business throughout the day.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="unlock_achivement_card_wrapper bg_clr_4d p-4 bg_clr_91 d-flex flex-column flex-fill h-100">
                            <div className="unlock_achivement_card_head ">
                                <div className="unlock_achivement_card_icon ">
                                    <img className='img-fluid' src={achivementIcon2} alt="icon" />
                                </div>

                                <div className="unlock_achivement_card_title">
                                    <h2 className='fs_30 fw_extrabold'>
                                        Innovative Solutions for Overstocked Ingredients
                                    </h2>
                                </div>
                            </div>

                            <div className="unlock_achivement_card_content">
                                <div className="unlock_achivement_card_des">
                                    <p className='fs-5 fw-medium'>
                                        We know that managing inventory is a delicate balance. With Foodzee, you can easily create special offers for dishes that utilize overstocked ingredients, helping you reduce waste and increase profit margins. Our platform makes it simple to promote these offers to a wide audience, ensuring that your surplus stock turns into an opportunity rather than a loss.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UnlockAchivement