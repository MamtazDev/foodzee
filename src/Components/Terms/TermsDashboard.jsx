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
            <p className="f_inter">{data.content}</p>
          </div>
        ))}
      </div>
    </TermsLayout>
  );
};

export default TermsDashboard;
