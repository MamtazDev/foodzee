import React from "react";

const PolicyHeader = ({ title, update, updateTwo, updateThree, updateFour, updateFive, updateSix }) => {
  return (
    <div className="policy_header">
      <h1>{title}</h1>
      <p className="f_inter mb-3">{update}</p>
      <p className="f_inter mb-3">
        {updateTwo}
      </p>
      <p className="f_inter mb-3">
        {updateThree}
      </p>
      <p className="f_inter mb-3">
        {updateFour}
      </p>
      <p className="f_inter mb-3">
        {updateFive}
      </p>
      <p className="f_inter mb-3">
        {updateSix}
      </p>
    </div>
  );
};

export default PolicyHeader;
