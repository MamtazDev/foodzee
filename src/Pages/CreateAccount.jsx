import React, { useEffect } from "react";

const CreateAccount = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    document.body.appendChild(script);
  }, []);
  return (
    <section id="create_account">
      <div className="container">
        <div
          data-tf-widget="biQL9Idh"
          data-tf-opacity="100"
          data-tf-iframe-props="title=New Restaurant Sign Up Form"
          data-tf-transitive-search-params
          data-tf-medium="snippet"
          data-tf-hidden="hubspot_utk=,hubspot_page_name=,hubspot_page_url="
          style={{ height: "500px" }}></div>
      </div>
    </section>
  );
};

export default CreateAccount;
