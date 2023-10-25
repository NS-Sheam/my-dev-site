import React from 'react';
import experienceImg from "../../../assets/why-choose-us/experience.png";
import clients from "../../../assets/why-choose-us/clients.png";
import engineer from "../../../assets/why-choose-us/engineer.png";
import success from "../../../assets/why-choose-us/success.png";
import ongoing from "../../../assets/why-choose-us/ongoing.png";
import engineer2 from "../../../assets/why-choose-us/software-engineer.png";
import team from "../../../assets/why-choose-us/teamwork.png";
import collaborate from "../../../assets/why-choose-us/collaborate.png";
import support from "../../../assets/why-choose-us/support.png";
import Image from 'next/image';
const WhyChooseUs = () => {

    const cardData = [
        {
            image: experienceImg,
            heading: "2+",
            description: "Years of Experience"
        },
        {
            image: clients,
            heading: "100+",
            description: "Respected Clients"
        },
        {
            image: engineer,
            heading: "50+",
            description: "Dedicated Engineers"
        },
        {
            image: success,
            heading: "100%",
            description: "Project Success Rate"
        },
        {
            image: ongoing,
            heading: "20+",
            description: "Ongoing Projects"
        }
    ]

    const circleData = [
        {
            image: engineer2,
            title: "Qualified Engineers",
        },
        {
            image: team,
            title: "Dedicated Teamwork",
        },
        {
            image: collaborate,
            title: "Collaboration Process",
        },
        {
            image: support,
            title: "Anytime Support",
        }
    ]

    return (
        <section className='my-container space-y-4 py-6'>
            <h1 className='text-3xl md:text-6xl font-bold text-band-orange'>Trailblazing Software Teams</h1>
            <p className='text-xl md:text-2xl text-white'>At our core, we are pioneers in software innovation, leveraging world-class expertise and unwavering commitment to exceptional delivery. Our teams craft ingenious software services and provide distinctive solutions that stand as a testament to unmatched performance. With a passion for turning dreams into reality, we reshape industries on a global scale, ushering in a new era of transformative technology.</p>
            <div className='flex flex-wrap md:flex-nowrap gap-4 mx-auto py-6'>
                {
                    cardData.map(({ image, heading, description }, index) => <div key={index} className='flex justify-center items-center gap-4 p-6 rounded-md bg-white border-2 border-band-orange shadow-2xl hover:scale-110 duration-300 w-full: w-56 h-56 mx-auto'>
                        <Image width={50} src={image} alt={`image ${index}`} />
                        <div>
                            <h1 className='text-4xl font-extrabold text-band-orange'>{heading}</h1>
                            <p className='text-black text-xl md:text-2xl'>{description}</p>
                        </div>
                    </div>)



                }
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {
                    circleData.map(({ image, title }, index) => <div key={index} className='flex flex-col justify-center items-center gap-4 rounded-full hover:scale-110 duration-300'>
                        <Image className=' border-4 p-6 border-white rounded-full' width={150} src={image} alt={`image ${index}`} />
                        <div>
                            <h1 className='text-2xl font-extrabold text-white w-1/2 mx-auto text-center'>{title}</h1>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default WhyChooseUs;