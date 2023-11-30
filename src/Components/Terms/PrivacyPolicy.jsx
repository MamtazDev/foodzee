import TermsLayout from "../../Layouts/TermsLayout";
import PolicyHeader from "../../Utils/PolicyHeader";
import { privacy } from "../../Utils/TermsAndRules";

const PrivacyPolicy = () => {
  return (
    <TermsLayout>
      <PolicyHeader title="Privacy Policy"
        update="Your privacy is important to us. It is Foodzee's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including via our app, Foodzee, and its associated services."
        updateTwo={"Personal information is any information about you which can be used to identify you. This includes information about you as a person (such as name, address, and date of birth), your devices, payment details, and even information about how you use an app or online service."}
        updateThree={"In the event our app contains links to third-party sites and services, please be aware that those sites and services have their own privacy policies. After following a link to any third-party content, you should read their posted privacy policy information about how they collect and use personal information. This Privacy Policy does not apply to any of your activities after you leave our app."}
        updateFour={"This policy is effective as of 25 November 2023."}
        updateSix={"Last updated: 26 November 2023"}
      />
      <div className="terms_option">
        {privacy.map((data, index) => (
          <div key={index}>
            <h2>{data?.title}</h2>
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
            <div className="sub_info">
              {data?.subInfo?.map((subData, index) => (
                <div key={index}>
                  <h3>{subData?.title}</h3>
                  <p className="f_inter mb-3">{subData?.content}</p>
                  <div className="d-flex flex-column gap-2">
                    {subData?.options?.map((option, content, index) => (
                      <>
                        <p
                          style={{ color: "#075759" }}
                          className=" f_inter"
                          key={index}
                        >
                          {option}
                        </p>
                      </>
                    ))}
                  </div>
                  <p className="mt-3">
                    {subData?.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TermsLayout>
  );
};

export default PrivacyPolicy;
