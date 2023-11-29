import star from "../../assets/starr.png";
import girl from "../../assets/girl.png";
import man from "../../assets/man.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Review = () => {
  const list = [girl, man];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="review">
      <div className="review_inner">
        <div className="container">
          <h1>
            <span>Food Lover </span> like you achieve their goals through our
            food
          </h1>

          <div className="d-none d-md-block">
            <div className="row gy-4">
              {list.map((data, index) => (
                <div key={index} className="col-lg-6">
                  <div className="review_card">
                    <div className="d-flex align-items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <img key={index} src={star} alt="" />
                      ))}
                    </div>
                    <p className="description">
                      Our success stories are a testament to the difference
                      we're making, one meal at a time. Discover how Foodzee has
                      positively impacted restaurants, diners, and communities.
                      These stories are a reflection of our commitment to
                      creating a more sustainable and cost-effective future for
                      everyone.
                    </p>
                    <div className="d-flex align-items-center gap-3">
                      <img src={data} alt="" />
                      <div>
                        <h6>Kristin Watson</h6>
                        <p className="identity">
                          Student of Cambridge University, UK
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="d-block d-md-none">
            <Carousel
              arrows={false}
              showDots={true}
              responsive={responsive}
              className="pb-5 "
            >
              {list.map((data, index) => (
                <div key={index} className="col-lg-6">
                  <div className="review_card">
                    <div className="d-flex align-items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <img key={index} src={star} alt="" />
                      ))}
                    </div>
                    <p className="description">
                      Our success stories are a testament to the difference
                      we're making, one meal at a time. Discover how Foodzee has
                      positively impacted restaurants, diners, and communities.
                      These stories are a reflection of our commitment to
                      creating a more sustainable and cost-effective future for
                      everyone.
                    </p>
                    <div className="d-flex align-items-center gap-3">
                      <img src={data} alt="" />
                      <div>
                        <h6>Kristin Watson</h6>
                        <p className="identity">
                          Student of Cambridge University, UK
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
