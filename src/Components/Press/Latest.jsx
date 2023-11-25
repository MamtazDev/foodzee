import latest1 from "../../assets/latest1.png";
import latest2 from "../../assets/latest2.png";
import latest3 from "../../assets/latest3.png";
import latest4 from "../../assets/latest4.png";
import latest5 from "../../assets/latest5.png";
import latest6 from "../../assets/latest6.png";

const Latest = () => {
  const list = [
    {
      pic: latest1,
      description:
        "The Environmental Impact of Food  Waste and How Foodzee Is Making    a Difference",
    },
    {
      pic: latest2,
      description:
        "Affordable Dining: Navigating the   Cost of Living Crisis with Foodzee",
    },
    {
      pic: latest3,
      description:
        "Behind the Scenes: How Foodzee   Connects Diners and Restaurants for Sustainable Dining",
    },
    {
      pic: latest4,
      description:
        "Spotlight on Sustainability: Success   Stories from Restaurants Partnering   with Foodzee",
    },
    {
      pic: latest5,
      description:
        "From Waste to Feast: How Foodzee  Turns Excess Food into Affordable  Meals",
    },
    {
      pic: latest6,
      description:
        "Dining Trends: How Foodzee Is  Shaping the Future of Sustainable  Restaurants",
    },
  ];
  return (
    <div className="latest">
      <div className="container">
        <h1>Latest <span>Press Releases</span></h1>
        <div className="row g-4">
          {list.map((data, index) => (
            <div key={index} className="col-md-6  col-lg-4">
              <div className="latest_card d-flex flex-column h-100">
                <img className="img-fluid" src={data.pic} alt="" />
                <p className="f_inter flex-grow-1">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
