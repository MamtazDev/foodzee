import React from 'react'
import achivementImgOne from '../../assets/achivement1.png'
import achivementImgTwo from '../../assets/achivement2.png'
import achivementImgThree from '../../assets/achivement3.png'
import CountUp from 'react-countup'

const Achivement = () => {
    return (
        <section id='achivement' className='bg_clr section_padding'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="achivement_card_wrapper mb-5 mb-lg-0">

                            <div className="achivement_card_info text-center">
                                <div className="achivement_img">
                                    <img src={achivementImgOne} alt="achivement-one" />
                                </div>

                                <div className="counter my-2">
                                    <h2 className='fs_64 fw_extrabold text-white'>
                                        <CountUp start={100.0} decimals={1} end={8.0} duration={'5'} />M
                                    </h2>
                                </div>

                                <p className="text-white fs_18 fw_medium f_inter">
                                    The Too Good To Go app's users
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="achivement_card_wrapper mb-5 mb-lg-0">

                            <div className="achivement_card_info text-center">
                                <div className="achivement_img">
                                    <img src={achivementImgTwo} alt="achivement-one" />
                                </div>

                                <div className="counter my-2">
                                    <h2 className='fs_64 fw_extrabold text-white'>
                                        <CountUp start={22220.0} end={11220.0} duration={'5'} />
                                    </h2>
                                </div>

                                <p className="text-white fs_18 fw_medium f_inter">
                                    Active Businesses on the platform
                                </p>
                            </div>

                        </div>
                    </div>


                    <div className="col-lg-4">
                        <div className="achivement_card_wrapper mb-5 mb-lg-0">

                            <div className="achivement_card_info text-center">
                                <div className="achivement_img">
                                    <img src={achivementImgThree} alt="achivement-one" />
                                </div>

                                <div className="counter my-2">
                                    <h2 className='fs_64 fw_extrabold text-white'>
                                        <CountUp start={100.0} decimals={1} end={7.0} duration={'5'} />M
                                    </h2>
                                </div>

                                <p className="text-white fs_18 fw_medium f_inter">
                                    Surprise bags saved and counting
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Achivement