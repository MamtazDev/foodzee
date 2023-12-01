import React, { useState } from "react";
import { Terms } from "../../Utils/TermsAndRules";
import TermsLayout from "../../Layouts/TermsLayout";

const TermsDashboard = () => {
  return (
    <TermsLayout>
      <div className="terms_option">
        {Terms.map((data, index) => (
          <div key={index}>
            <h2>{data.title}</h2>
            <p className="f_inter mb-4">{data?.content}</p>
            <p className="f_inter mb-4">{data?.contentTwo}</p>
            <p className="f_inter mb-4">{data?.contentThree}</p>
            <p className="f_inter mb-4">{data?.contentFour}</p>
            <p className="f_inter mb-4">{data?.contentFive}</p>
            <p className="f_inter mb-4">{data?.contentSix}</p>
            <p className="f_inter mb-4">{data?.contentSeven}</p>
            <p className="f_inter mb-4">{data?.contentEight}</p>
            <p className="f_inter mb-4">{data?.contentNine}</p>
            <p className="f_inter mb-4">{data?.contentTen}</p>
          </div>
        ))}
      </div>
    </TermsLayout>
  );
};

export default TermsDashboard;
