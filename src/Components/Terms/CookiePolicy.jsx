import React from 'react';
import TermsLayout from '../../Layouts/TermsLayout';
import PolicyHeader from '../../Utils/PolicyHeader';
import { cookie } from '../../Utils/TermsAndRules';

const CookiePolicy = () => {
    return (
        <TermsLayout>
        <PolicyHeader title="Cookie Policy" update="Last Updated: February 05, 2023"/>
        <div className="terms_option">
          {cookie.map((data, index) => (
            <div key={index}>
              <h2>{data?.title}</h2>
              <p className="f_inter ">{data?.content}</p>
              <div className="sub_info">
                {data?.subInfo?.map((subData, index) => (
                  <div key={index}>
                    <h3>{subData?.title}</h3>
                    <p className="f_inter">{subData?.content}</p>
                    <div className="d-flex flex-column gap-2">
                      {subData?.options?.map((option, index) => (
                        <p
                          style={{ color: "#075759" }}
                          className=" f_inter"
                          key={index}
                        >
                          {option}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TermsLayout>
    );
};

export default CookiePolicy;