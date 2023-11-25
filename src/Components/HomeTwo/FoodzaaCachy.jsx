import React from 'react'
import FoodZeeCachyImg from '../../assets/join_foodze4.png'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const FoodzaaCachy = () => {
    return (
        <section id='foodzaaCachy' className='section_padding_80'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="joinFoodZee_cachy_img">
                            <img className='img-fluid' src={FoodZeeCachyImg} alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="joinFoodZee_cachy_content">
                            <div className="joinFoodZee_cachy_title pb_25">
                                <h2 className='fs_48 fw_extrabold text-black'>
                                    <span className='f_clr_00'>Cachy?</span> Slogans
                                </h2>
                            </div>

                            <div className="joinFoodZee_cachy_accordion">
                                <Accordion allowZeroExpanded>

                                    <AccordionItem >
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What harsh truths do you prefer to ignore?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                                cupidatat occaecat ut occaecat consequat est minim minim
                                                esse tempor laborum consequat esse adipisicing eu
                                                reprehenderit enim.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FoodzaaCachy