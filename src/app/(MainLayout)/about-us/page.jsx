import React from 'react';
import Image from 'next/image';
import ContactUs from '../../../components/home/ContactUs/ContactUs';
import whoWeAreImage from '../../../assets/about-us/who-we-are.png';
import ourValuesImage from '../../../assets/about-us/our-values.jpg';
import ourMissionImage from '../../../assets/about-us/our-mission.png';
import ourVisionImage from '../../../assets/about-us/our-vision.png';
const AboutUs = () => {

    const sections = [
        {
            title: 'Who We Are',
            content: 'At QuikFrontend, we are a team of passionate developers and designers dedicated to delivering exceptional web solutions. With a focus on creativity and innovation, we transform ideas into visually appealing and user-friendly websites and applications.',
            image: whoWeAreImage,
        },
        {
            title: 'Our Values',
            content: {
                innovation: 'Embracing the latest technologies and trends.',
                collaboration: 'Working closely with our clients for the best results.',
                quality: 'Ensuring top-notch performance, security, and user experience.',
                customizing: 'Tailoring solutions to meet unique project requirements.',
            },
            image: ourValuesImage,
        },
        {
            title: 'Our Mission',
            content: 'Our mission is to empower businesses and individuals with innovative, user-friendly, and high-performance websites. We aim to create digital solutions that not only meet but exceed the expectations of our clients, helping them achieve their goals and enhance their online presence.',
            image: ourMissionImage,
        },
        {
            title: 'Our Vision',
            content: 'Our vision is to be a leading force in the web development industry, setting new standards of creativity, innovation, and excellence. We aspire to create a digital landscape where businesses thrive through cutting-edge web technologies and seamless user experiences. QuikFrontend envisions a future where every online interaction is engaging, intuitive, and impactful.',
            image: ourVisionImage,
        }
    ]

    return (
        <div className="pt-16">
            <section className="my-container text-center space-y-4">
                <h1 className="text-2xl md:text-5xl font-bold text-band-orange">Welcome to QuikFrontend</h1>
                <p className="text-xl md:text-2xl text-white">Your Partner in Crafting Stunning Web Experiences</p>
            </section>
            {
                sections.map(({ title, content, image }, index) => <section key={index} className={`my-container py-6 md:flex items-center gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} `}>
                    <div className="md:w-1/2">
                        <Image src={image} alt={title.slice(0, 2)} width={500} className="rounded-lg" />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-center md:text-left text-2xl md:text-4xl font-bold mb-4 text-band-orange">{title}</h2>
                        {
                            title !== 'Our Values' ? <p className="text-white text-xl md:text-2xl">{content}</p> : <ul className="list-disc list-inside text-white text-xl md:text-2xl" >
                                <li><strong>Innovation: </strong>{content.innovation}</li>
                                <li><strong>Collaboration: </strong>{content.collaboration}</li>
                                <li><strong>Quality:</strong>{content.quality}</li>
                                <li><strong>Customizing: </strong>{content.customizing}</li>
                            </ul>
                        }
                    </div>
                </section>)
            }
            <ContactUs />
        </div>
    );
};

export default AboutUs;