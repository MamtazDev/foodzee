import React from 'react'
import whychoose1 from '../../assets/whychoose1.png'
import whychoose2 from '../../assets/whychoose2.png'
import whychoose3 from '../../assets/whychoose3.png'
import whychoose4 from '../../assets/whychoose4.png'
import whychoose5 from '../../assets/whychoose5.png'

const WhyChoose = () => {
    const whyChooseData = [
        {
            img: whychoose1,
            title: "Increase Visibility",
            des: "Get noticed by a broader audience. Our platform puts your restaurant in front of food lovers in your area, helping you grow your customer base."
        },
        {
            img: whychoose2,
            title: "Flexibility at Your Fingertips",
            des: "Create offers that work for you. Whether it’s a last-minute deal or a week-long promotion, our platform provides the flexibility to tailor your offers."
        },
        {
            img: whychoose3,
            title: "Data-Driven Insights",
            des: "Gain valuable insights into customer preferences and buying patterns. Use our data analytics tools to make informed decisions about your promotions and menu offerings."
        },
        {
            img: whychoose4,
            title: "Community Engagement",
            des: "Connect with your community. Foodzee helps you engage with local food enthusiasts, building lasting relationships that encourage repeat business."
        },
        {
            img: whychoose5,
            title: "Easy to Use",
            des: "Easy to Use: Our user-friendly interface makes managing your promotions hassle-free. Spend less time on setup and more time delighting your customers."
        },
    ]
    return (
        <section id='why_choose' className='section_padding_80 bg_clr'>
            <div className="container">
                <div className="section_heading pb_60">
                    <h2 className='fs_48 fw_extrabold text-white text-center '>
                        Why Choose <span className='f_clr_00'>Foodzee?</span>
                    </h2>
                </div>
                <div className="row justify-content-center">
                    {
                        whyChooseData.map((data, index) => (
                            <div className="col-lg-4 mb-4" key={index}>
                                <div className="why_choose_card bg_clr_f2 d-flex flex-column flex-fill h-100">
                                    <div className="why_choose_card_head pb_64">
                                        <div className="why_choose_img">
                                            <img src={data.img} alt="icon" />
                                        </div>
                                    </div>

                                    <div className="why_choose_content">
                                        <div className="why_choose_title pb_14">
                                            <h3 className='fs-4 fw-bold text-black'>
                                                {data.title}
                                            </h3>
                                        </div>
                                        <div className="why_choose_des">
                                            <p className='f_inter fs_18 fw_medium'>
                                                {data.des}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default WhyChoose