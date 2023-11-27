import React from 'react';
import PageBanner from '../Utils/PageBanner';
import CookiePolicy from '../Components/Terms/CookiePolicy';

const Cookie = () => {
    return (
        <div>
      <PageBanner title="Cookie Policy" />
      <CookiePolicy />
    </div>
    );
};

export default Cookie;