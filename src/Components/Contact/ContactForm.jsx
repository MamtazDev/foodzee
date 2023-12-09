import React, { useState } from "react";
import { sendEmail } from "../../api/message";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const sendMessage = async (data) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/Public/PostCreateEnquiry`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "962ed46b12364215a95e976478809de1",
      },
      body: JSON.stringify(data),
    }
  );
  return res.json();
};

const ContactForm = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const form = event.target;

    const name = form.name.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;
    const message = form.message.value;

    const data = {
      Name: name,
      TelephoneNumber: phoneNumber,
      EmailAddress: email,
      Message: message,
    };

    try {
      const res = await sendMessage(data);
      console.log(res, "ddd");
      // if (res?.data?.success) {
      if (res?.Content) {
        setIsLoading(false);

        form.reset();

        Swal.fire({
          title: "Message sent!",
          text: "Message sent successfully!",
          icon: "success",
        });

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      Swal.fire({
        title: "Oops...",
        text: "Something went wrong!",
        icon: "error",
      });
    }
  };
  return (
    <div className="contact_form">
      <h2>Send us a message</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name*"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Your Phone Number</label>
          <input
            id="phone"
            name="phoneNumber"
            type="tel"
            placeholder="Enter your phone number*"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email*"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Your Message</label>

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Text here........."
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Message Sending..." : " Submit Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
