import React from 'react';

const CardSection = () => {
    const cardData = [
        {
            title: "Dedicated Team",
            description: "We have a dedicated team of developers who are always ready to work on your project.",
        },
        {
            title: "Fast Delivery",
            description: "We are committed to delivering your project within the deadline.",
        },
        {
            title: "24/7 Support",
            description: "We are always ready to provide you with any kind of support.",
        },
        {
            title: "Money Back Guarantee",
            description: "We are committed to delivering your project within the deadline.",
        },
        {
            title: "100% Satisfaction",
            description: "We are committed to delivering your project within the deadline.",
        },
        {
            title: "Free Consultation",
            description: "We are committed to delivering your project within the deadline.",
        },
    ]
    return (
        <section className='my-container py-6 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                cardData.map(({ title, description }, index) => {
                    return (
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="500"
                            className='flex flex-col justify-center items-center gap-4 bg-[#322464] p-5 border border-band-orange rounded-lg text-center'
                            key={index}
                        >
                            <h3 className='text-3xl font-bold text-band-orange'>{title}</h3>
                            <p className='text-xl text-center text-white'>{description}</p>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default CardSection;