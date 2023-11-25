import React from "react";

const ContactForm = () => {
  return (
    <div className="contact_form">
      <h2>Send us a message</h2>
      <form>
        <div>
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" placeholder="Enter your full name*" />
        </div>
        <div>
          <label htmlFor="phone">Your Phone Number</label>
          <input id="phone" type="tel" placeholder="Enter your phone number*" />
        </div>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input id="email" type="email" placeholder="Enter your email*" />
        </div>
        <div>
          <label htmlFor="message">Your Message</label>

          <textarea
            id="message"
            rows="5"
            placeholder="Text here........."
          ></textarea>
        </div>
        <button type="submit">Submit Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
