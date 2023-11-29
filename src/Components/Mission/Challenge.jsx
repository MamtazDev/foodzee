import challenge from "../../assets/challenge.png";
import magnitude from "../../assets/magnitude.png";
import environment from "../../assets/environmental.png";
import resource from "../../assets/resourch.png";
import struggle from "../../assets/strugle.png";

const Challenge = () => {
  const list = [
    {
      pic: magnitude,
      title: "Global Magnitude",
      content:
        "Food waste is a pressing issue with global  ramifications, involving millions of tons of  discarded food annually.",
    },
    {
      pic: environment,
      title: "Environmental Consequences",
      content:
        "The impact extends beyond waste, contributing  to environmental degradation through landfills and greenhouse gas emissions",
    },
    {
      pic: resource,
      title: "Resource Drain",
      content:
        "The wastage of food implies squandering vital resources like water and energy, intensifying   the strain on our planet.",
    },
    {
      pic: struggle,
      title: "Affordability Struggles",
      content:
        "The problem of food waste and the difficulty of   individuals and families to find reasonably priced  dining options within their financial limits....",
    },
  ];
  return (
    <div className="challenge">
      <div className="container">
        <div className="challenge_header">
          <h6 className="f_inter title_btn">
            Navigating the Environmental and Economic Impact
          </h6>
          <h1 className="fs_60">
            <span>Food Waste:</span> A Global Challenge
          </h1>
          <p className="fs_18">
            For diners, Foodzee is your avenue to purposeful dining. Recognizing
            the importance of affordability, especially in challenging economic
            times, Foodzee ensures you can relish dining out without straining
            your budget. It's about savoring delightful meals at discounted
            prices while actively participating in a meaningful initiative to
            reduce food waste.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="d-flex flex-column gap-4">
              {list.slice(0, 2).map((data, index) => (
                <div className="challenge_card" key={index}>
                  <img className="mb-3" src={data.pic} alt="" />
                  <p className="title">{data.title}</p>
                  <p className="content">{data.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img className="img-fluid" src={challenge} alt="" />
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="d-flex flex-column gap-4">
              {list.slice(2, 4).map((data, index) => (
                <div className="challenge_card" key={index}>
                  <img className="mb-3" src={data.pic} alt="" />
                  <p className="title">{data.title}</p>
                  <p className="content">{data.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
