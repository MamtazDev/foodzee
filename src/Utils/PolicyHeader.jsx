import React from "react";

const PolicyHeader = ({title,update}) => {
  return (
    <div className="policy_header">
      <h1>{title}</h1>
      <p className="f_inter">{update}</p>
    </div>
  );
};

export default PolicyHeader;
