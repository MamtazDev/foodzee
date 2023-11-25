import greenPaper from "../../assets/green-paper-title.png";
import chat from "../../assets/chat.png";
import call from "../../assets/call.png";
import email from "../../assets/email.png";
import ContactForm from "./ContactForm";

const VoiceMatters = () => {
  const list = [
    {
      pic: chat,
      title: "Chat with us",
      content:
        "We're waiting to help you every Monday-Friday from 9am to 5pm. ",
    },
    {
      pic: call,
      title: "Give us a call",
      content:
        "Give us a ring at 0800-058-2673. Every monday-friday from 9am to 5pm.",
    },
    {
      pic: email,
      title: "Email Us",
      content:
        "Drop us an email at hello@foodzee.co.uk and you'll receive a reply within 24 hours.",
    },
  ];
  return (
    <div className="matters">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h1>
              Your Voice Matters at <span>Foodzee</span>{" "}
              <img src={greenPaper} alt="" />
            </h1>
            <div className="d-flex flex-column gap-4">
              {list.map((data, index) => (
                <div key={index} className="matters_card">
                  <img src={data.pic} alt="" />
                  <div>
                    <p>{data.title}</p>
                    <p className="f_inter">{data.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceMatters;
