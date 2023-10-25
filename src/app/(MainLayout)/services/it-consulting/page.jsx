import React from "react";
import Services from "../../../../components/Services/Services";
import ContactUs from "../../../../components/home/ContactUs/ContactUs";
import SubPageBanner from "../../../../components/SubPageBanner/SubPageBanner";
const ItConsultancy = () => {


    return (
        <div>
            {/* Banner Section */}
            <SubPageBanner title="IT Consultancy" description="Expert IT consultancy providing strategic insights and tailored solutions, optimizing your technology infrastructure for efficiency, security, and business growth" />

            {/* Services Section */}

            <Services serviceType="it-consultancy" />

            {/* Contact Section */}
            <ContactUs />
        </div>
    );
};

export default ItConsultancy;
