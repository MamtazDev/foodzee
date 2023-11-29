import React from "react";

const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.317888912338!2d-2.013408487484627!3d52.69035437198991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a755993765c3b%3A0x6c47ae12f7eacf45!2sPark%20Plaza!5e0!3m2!1sen!2sbd!4v1701259256885!5m2!1sen!2sbd"
        width="100%"
        height="730"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
