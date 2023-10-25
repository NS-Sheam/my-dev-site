import React from "react";
import Services from "../../../../components/Services/Services";
import ContactUs from "../../../../components/home/ContactUs/ContactUs";
import SubPageBanner from "../../../../components/SubPageBanner/SubPageBanner";
const ItSupport = () => {


    return (
        <div>
            {/* Banner Section */}
            <SubPageBanner title="IT Support" description="WReliable IT support services ensuring seamless operations, rapid issue resolution, and proactive maintenance to keep your business technology running smoothly" />

            {/* Services Section */}

            <Services serviceType="it-support" />

            {/* Contact Section */}
            <ContactUs />
        </div>
    );
};

export default ItSupport;
