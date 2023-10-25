import React from "react";
import Services from "../../../../components/Services/Services";
import ContactUs from "../../../../components/home/ContactUs/ContactUs";
import SubPageBanner from "../../../../components/SubPageBanner/SubPageBanner";
const Devops = () => {


    return (
        <div>
            {/* Banner Section */}
            <SubPageBanner title="Devops Services" description="Empower your development lifecycle with DevOps services, fostering collaboration, automation, and continuous integration, driving innovation and efficiency" />

            {/* Services Section */}

            <Services serviceType="web-development" />

            {/* Contact Section */}
            <ContactUs />
        </div>
    );
};

export default Devops;
