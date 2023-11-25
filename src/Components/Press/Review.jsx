import star from "../../assets/starr.png";
import girl from "../../assets/girl.png";
import man from "../../assets/man.png";

const Review = () => {
  const list = [girl, man];
  return (
    <div className="review">
      <div className="review_inner">
        <div className="container">
          <h1>
            <span>Food Lover </span> like you achieve their goals through our
            food
          </h1>

          <div className="row">
            {list.map((data, index) => (
              <div key={index} className="col-lg-6">
                <div className="review_card">
                  <div className="d-flex align-items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <img key={index} src={star} alt="" />
                    ))}
                  </div>
                  <p className="description">
                    Our success stories are a testament to the difference we're
                    making, one meal at a time. Discover how Foodzee has
                    positively impacted restaurants, diners, and communities.
                    These stories are a reflection of our commitment to creating
                    a more sustainable and cost-effective future for everyone.
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <img src={data} alt="" />
                    <div>
                      <h6>Kristin Watson</h6>
                      <p className="identity">Student of Cambridge University, UK</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
