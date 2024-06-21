import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Introduction</p>
          <p>Personal Data We Collect</p>
          <p>Cookie Policy</p>
          <p>Retention & Deletion</p>
          <p>Your Rights to Your Personal Data</p>
          <p>Changes</p>
          <p>Contact Us</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
