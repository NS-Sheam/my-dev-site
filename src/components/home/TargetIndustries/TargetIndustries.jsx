
import React from 'react';
import {
    FaBuilding,
    FaShoppingCart,
    FaHospital,
    FaPlane,
    FaLaptopCode,
    FaMusic,
    FaCar,
    FaGamepad,
    FaUtensils,
    FaBriefcase,
    FaHotel,
    FaBook,
    FaFilm,
    FaGlobe,
    FaGraduationCap,
    FaHeadphones,
    FaHome,
    FaMicrochip,
    FaMobileAlt,
    FaPaw,
    FaRecycle,
    FaShippingFast,
    FaStore,
} from 'react-icons/fa';

const TargetIndustries = () => {
    const industriesData = [
        {
            icon: <FaBuilding />,
            title: 'Real Estate',
        },
        {
            icon: <FaShoppingCart />,
            title: 'E-Commerce',
        },
        {
            icon: <FaHospital />,
            title: 'Healthcare',
        },
        {
            icon: <FaPlane />,
            title: 'Travel & Tourism',
        },
        {
            icon: <FaLaptopCode />,
            title: 'Software Development',
        },
        {
            icon: <FaMusic />,
            title: 'Entertainment',
        },
        {
            icon: <FaCar />,
            title: 'Automotive',
        },
        {
            icon: <FaGamepad />,
            title: 'Gaming',
        },
        {
            icon: <FaUtensils />,
            title: 'Food & Beverage',
        },
        {
            icon: <FaBriefcase />,
            title: 'Professional Services',
        },
        {
            icon: <FaHotel />,
            title: 'Hospitality',
        },
        {
            icon: <FaBook />,
            title: 'Education',
        },
        {
            icon: <FaFilm />,
            title: 'Media & Film',
        },
        {
            icon: <FaGlobe />,
            title: 'Internet',
        },
        {
            icon: <FaGraduationCap />,
            title: 'Academic',
        },
        {
            icon: <FaHeadphones />,
            title: 'Music',
        },
        {
            icon: <FaHome />,
            title: 'Home & Garden',
        },
        {
            icon: <FaMicrochip />,
            title: 'Technology',
        },
        {
            icon: <FaMobileAlt />,
            title: 'Mobile',
        },
        {
            icon: <FaPaw />,
            title: 'Pets & Animals',
        },
        {
            icon: <FaRecycle />,
            title: 'Environment',
        },
        {
            icon: <FaShippingFast />,
            title: 'Logistics',
        },
        {
            icon: <FaStore />,
            title: 'Retail',
        },
        // Add more objects as needed
    ];
    return (
        <section className='my-container space-y-4 py-6'>
            <h1 className='text-3xl md:text-6xl font-bold text-band-orange text-center'>Target Industries</h1>

            <p className='text-xl md:text-2xl text-white text-center'>
                A Software development services include Custom Software Development, Web and Mobile Application Design &
                Development, UI/UX design, DevOps, Software Testing, Maintenance, and Continuous Support. These services
                streamline processes, improve productivity, and enhance user experiences by creating tailored software
                solutions.
            </p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:w-3/4 mx-auto'>
                {industriesData.map((industry, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center justify-center space-y-2 text-center text-white p-4 rounded-lg bg-band-orange'
                    >
                        <div className='text-4xl'>{industry.icon}</div>
                        <div className='text-xl font-bold'>{industry.title}</div>
                    </div>
                ))}
            </div>
            {/* <div className='flex justify-center items-center h-80'>
                <TagCloud
                    options={(w) => ({
                        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                        maxSpeed: 'fast',
                    })}
                    onClick={(tag, ev) => alert(tag)}
                    onClickOptions={{ passive: true }}
                >
                    {industriesData.slice(0, 11).map((industry, index) => (
                        <div key={index} className='text-white'>
                            {industry.title}
                        </div>
                    ))}
                </TagCloud>
            </div> */}
        </section>
    );
};

export default TargetIndustries;