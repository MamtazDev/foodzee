import React from 'react';
import Contact from '../Components/Support/Contact';
import PageBanner from '../Utils/PageBanner';
import Faq from '../Components/Support/Faq';

const Support = () => {
    return (
        <div>
            <PageBanner title="Support"/>
            <Faq/>
            <Contact/>
        </div>
    );
};

export default Support;