import React from 'react';
import PageBanner from '../Utils/PageBanner';
import Map from '../Components/Contact/Map';
import VoiceMatters from '../Components/Contact/VoiceMatters';

const Contact = () => {
    return (
        <div>
            <PageBanner title="Contact Us"/>
            <VoiceMatters/>
            <Map/>
        </div>
    );
};

export default Contact;