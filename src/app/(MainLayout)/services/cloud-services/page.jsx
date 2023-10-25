import React from "react";
import Services from "../../../../components/Services/Services";
import ContactUs from "../../../../components/home/ContactUs/ContactUs";
import SubPageBanner from "../../../../components/SubPageBanner/SubPageBanner";
const cloudServices = () => {


    return (
        <div>
            {/* Banner Section */}
            <SubPageBanner title="Cloud Services" description="Transform your business with scalable cloud solutions, from seamless migrations to robust security, ensuring optimal performance and efficiency" />

            {/* Services Section */}

            <Services serviceType="cloud-services" />

            {/* Contact Section */}
            <ContactUs />
        </div>
    );
};

export default cloudServices;
