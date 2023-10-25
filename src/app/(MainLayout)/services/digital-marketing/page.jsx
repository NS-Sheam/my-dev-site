import React from "react";
import Services from "../../../../components/Services/Services";
import ContactUs from "../../../../components/home/ContactUs/ContactUs";
import SubPageBanner from "../../../../components/SubPageBanner/SubPageBanner";
const DigitalMarketing = () => {


    return (
        <div>
            {/* Banner Section */}
            <SubPageBanner title="Digital Marketing" description="Drive digital success with our comprehensive digital marketing services, leveraging strategic campaigns, data-driven insights, and creative innovations to boost your online presence and ROI" />

            {/* Services Section */}
            <Services serviceType="digital-marketing" />

            {/* Contact Section */}
            <ContactUs />
        </div>
    );
};

export default DigitalMarketing;
