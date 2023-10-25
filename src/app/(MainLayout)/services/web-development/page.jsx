import React from "react";
import Services from "../../../../components/Services/Services";
import ContactUs from "../../../../components/home/ContactUs/ContactUs";
import SubPageBanner from "../../../../components/SubPageBanner/SubPageBanner";
const WebDevelopment = () => {


    return (
        <div>
            {/* Banner Section */}
            <SubPageBanner title="Web Development Services" description="We create stunning and responsive websites tailored to your business needs" />

            {/* Services Section */}

            <Services serviceType="web-development" />

            {/* Contact Section */}
            <ContactUs />
        </div>
    );
};

export default WebDevelopment;
