import solution from "../../assets/solution.png";

const Solution = () => {
  return (
    <div className="solution">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-8">
            <img className="img-fluid" src={solution} alt="" />
          </div>
          <div className="col-lg-4">
            <div className="solution_right">

            <h1>
              <span>The Foodzee</span> Solution
            </h1>
            </div>
          </div>
        </div>
        <div className="note">
          <div className="note_inner">
            <p>
              Food waste is a significant challenge on a global scale. It not
              only has an environmental impact but also contributes to economic
              losses. Each year, millions of tons of food are discarded, filling
              up landfills, emitting harmful greenhouse gases, and wasting
              resources like water and energy. At the same time, many
              individuals and families struggle to find affordable dining
              options that fit their budgets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
