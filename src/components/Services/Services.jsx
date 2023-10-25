import React from 'react';
import customDevelopmentImage from "../../assets/services/custom-website.jpg";
import ecommerceDevelopmentImage from "../../assets/services/e-commerce-website.jpg";
import responsiveDesignImage from "../../assets/services/responsive-website.jpg";
import cmsImage from "../../assets/services/cms-website.jpg"
import maintenanceImage from "../../assets/services/maintanence-website.jpg"
import redesignImage from "../../assets/services/redesign-website.jpg"
import researchImg from "../../assets/services/research.jpg";
import wireframingImg from "../../assets/services/wireframing.jpg";
import visualDesignImg from "../../assets/services/visual-design.jpg";
import webAppImg from "../../assets/services/web-design.jpg";
import usabilityTestingImg from "../../assets/services/usability-testing.jpg";
import Image from 'next/image';
const Services = ({ serviceType }) => {
    const webDevelopmentServicesData = [
        {
            title: "Custom Website Development",
            description: "Tailored websites with unique features and functionalities.",
            image: customDevelopmentImage
        },
        {
            title: "E-commerce Development",
            description: "Create a seamless online shopping experience for your customers.",
            image: ecommerceDevelopmentImage
        },
        {
            title: "Mobile Responsive Design",
            description: "We ensure your website looks great on all devices and screen sizes.",
            image: responsiveDesignImage
        },
        {
            title: "Content Management System (CMS)",
            description: "We build websites with easy-to-use CMS to manage your content.",
            image: cmsImage
        },
        {
            title: "Website Maintenance",
            description: "We provide ongoing website maintenance to ensure your website is up-to-date and secure.",
            image: maintenanceImage
        },
        {
            title: "Website Redesign",
            description: "We redesign outdated websites to improve their functionality and user experience.",
            image: redesignImage
        }
    ]
    const uiuxServicesData = [
        {
            title: "User Research",
            description: "In-depth user analysis to understand behaviors and preferences.",
            image: researchImg
        },
        {
            title: "Wireframing & Prototyping",
            description: "Create detailed wireframes and interactive prototypes for user testing.",
            image: wireframingImg
        },
        {
            title: "Visual Design",
            description: "Craft visually appealing interfaces with a focus on aesthetics and usability.",
            image: visualDesignImg
        },
        {
            title: "Web App Design",
            description: "Create engaging and responsive web applications for seamless user experiences.",
            image: webAppImg
        },
        {
            title: "Usability Testing",
            description: "Conduct usability tests to evaluate the effectiveness and efficiency of the design.",
            image: usabilityTestingImg
        },
    ];

    const devopsServicesData = [
        {
            title: "Continuous Integration",
            description: "Implement automated CI pipelines for code integration and testing.",
            image: customDevelopmentImage
        },
        {
            title: "Continuous Deployment",
            description: "Automate deployment processes to ensure rapid and reliable releases.",
            image: ecommerceDevelopmentImage
        },
        {
            title: "Infrastructure as Code",
            description: "Manage infrastructure using code to enable versioning and scalability.",
            image: responsiveDesignImage
        },
        {
            title: "Containerization",
            description: "Utilize container technologies like Docker for efficient application deployment.",
            image: researchImg
        },
        {
            title: "Monitoring and Logging",
            description: "Implement robust monitoring and logging solutions for real-time insights.",
            image: wireframingImg
        },
        {
            title: "Security and Compliance",
            description: "Enforce security best practices and ensure compliance with industry standards.",
            image: visualDesignImg
        },
    ];

    const itSupportServicesData = [
        {
            title: "Help Desk Support",
            description: "24/7 help desk support for quick issue resolution and user assistance.",
            image: customDevelopmentImage

        },
        {
            title: "Network Troubleshooting",
            description: "Diagnose and resolve network issues to ensure seamless connectivity.",
            image: ecommerceDevelopmentImage

        },
        {
            title: "Hardware Maintenance",
            description: "Regular maintenance and repair services for computers and peripherals.",
            image: responsiveDesignImage
        },
        {
            title: "Software Support",
            description: "Assistance with software installation, updates, and problem-solving.",
            image: researchImg
        },
        {
            title: "Security Solutions",
            description: "Implement cybersecurity measures to protect against threats and attacks.",
            image: wireframingImg
        },
        {
            title: "Data Backup and Recovery",
            description: "Automated data backup and recovery solutions to prevent data loss.",
            image: visualDesignImg
        },
    ];

    const itConsultancyServicesData = [
        {
            title: "Technology Strategy",
            description: "Developing a comprehensive technology strategy aligned with business goals.",
            image: customDevelopmentImage
        },
        {
            title: "Digital Transformation",
            description: "Guidance on adopting digital technologies to enhance operational efficiency.",
            image: ecommerceDevelopmentImage
        },
        {
            title: "IT Infrastructure Planning",
            description: "Designing and planning scalable IT infrastructure for business growth.",
            image: responsiveDesignImage
        },
        {
            title: "Cloud Computing Solutions",
            description: "Implementing cloud-based solutions for flexibility, scalability, and cost-effectiveness.",
            image: researchImg
        },
        {
            title: "Cybersecurity Consulting",
            description: "Assessing and improving cybersecurity measures to protect against threats.",
            image: wireframingImg
        },
        {
            title: "IT Project Management",
            description: "Managing IT projects from planning to execution for successful outcomes.",
            image: visualDesignImg
        },
    ];

    const digitalMarketingServicesData = [
        {
            title: "Search Engine Optimization (SEO)",
            description: "Optimizing websites to rank higher on search engine results pages.",
            image: customDevelopmentImage
        },
        {
            title: "Pay-Per-Click Advertising (PPC)",
            description: "Creating targeted online advertising campaigns to drive traffic and conversions.",
            image: responsiveDesignImage
        },
        {
            title: "Social Media Marketing",
            description: "Building brand presence and engaging with audiences on social media platforms.",
            image: researchImg
        },
        {
            title: "Content Marketing",
            description: "Creating and distributing valuable content to attract and engage a defined audience.",
            image: ecommerceDevelopmentImage
        },
        {
            title: "Email Marketing",
            description: "Designing and executing targeted email campaigns to nurture leads and customers.",
            image: wireframingImg
        },
        {
            title: "Analytics and Reporting",
            description: "Analyzing digital marketing data to measure performance and make data-driven decisions.",
            image: visualDesignImg
        },
    ];

    const cloudServicesData = [
        {
            title: "Cloud Infrastructure Setup",
            description: "Designing and configuring cloud-based infrastructure tailored to your business needs.",
            image: customDevelopmentImage
        },
        {
            title: "Cloud Migration Services",
            description: "Seamlessly migrating your applications and data to cloud platforms for scalability and efficiency.",
            image: ecommerceDevelopmentImage
        },
        {
            title: "Data Backup and Recovery",
            description: "Implementing secure cloud-based backup solutions and disaster recovery plans for your data.",
            image: responsiveDesignImage
        },
        {
            title: "Cloud Security Solutions",
            description: "Ensuring robust security measures for your cloud environment, including data encryption and access control.",
            image: researchImg
        },
        {
            title: "Serverless Computing",
            description: "Developing applications without managing servers, utilizing serverless computing on cloud platforms.",
            image: wireframingImg
        },
        {
            title: "Managed Cloud Services",
            description: "Outsourcing the management of cloud resources, allowing you to focus on your core business.",
            image: visualDesignImg
        },
    ];

    const servicesData = serviceType === "web-development" ? webDevelopmentServicesData : serviceType === "ui-ux-design" ? uiuxServicesData : serviceType === "devops" ? devopsServicesData : serviceType === "it-support" ? itSupportServicesData : serviceType === "it-consultancy" ? itConsultancyServicesData : serviceType === "digital-marketing" ? digitalMarketingServicesData : serviceType === "cloud-services" ? cloudServicesData : "";

    return (
        <section className="my-14 my-container space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-band-orange mb-8 text-center">Our Web Development Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map(({ title, description, image }, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                    >
                        <div className="relative w-full h-48 mb-4 rounded-lg border-2 border-band-orange">
                            <Image
                                src={image}
                                alt={title}
                                className="object-cover w-full h-full"
                                fill
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-bg-color">{title}</h3>
                        <p className="text-gray-600 text-xl">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;