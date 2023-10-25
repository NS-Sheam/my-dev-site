import React from "react";
import Services from "../../../../components/Services/Services";
import ContactUs from "../../../../components/home/ContactUs/ContactUs";
import SubPageBanner from "../../../../components/SubPageBanner/SubPageBanner";
const UiUxDesign = () => {


    return (
        <div>
            {/* Banner Section */}
            <SubPageBanner title="UI/UX Design" description="Elevate user experiences and enhance brand aesthetics with our UI/UX design services, where creativity meets functionality to craft visually stunning and intuitive digital interfaces" />

            {/* Services Section */}

            <Services serviceType="ui-ux-design" />

            {/* Contact Section */}
            <ContactUs />
        </div>
    );
};

export default UiUxDesign;
