import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner-images/softwer-solution.png";
import bannerImg2 from "../../../assets/banner-images/team.png";
import bannerImg3 from "../../../assets/banner-images/client-approach.png";
import Image from 'next/image';
import { FaArrowRight, FaTeamspeak } from 'react-icons/fa';
import Link from 'next/link';
const Banner = () => {

    const carouselData = [
        {
            heading: "Innovative Software Solutions",
            description: "We specialize in creating cutting-edge software solutions tailored to your unique business needs. Empowering your business through technology.",
            image: bannerImg1,
            button: { buttonText: "Our Services", path: "/company/services", icon: <FaArrowRight /> }
        },
        {
            heading: "Expert Development Team",
            description: "Our team of skilled developers and engineers is dedicated to delivering high-quality software products. We bring your ideas to life with expertise and passion.",
            image: bannerImg2,
            button: { buttonText: "Our Team", path: "/company/team", icon: <FaTeamspeak /> }
        },
        {
            heading: "Client-Centric Approach",
            description: "Your satisfaction is our priority. We collaborate closely with our clients, ensuring transparent communication and delivering software that exceeds expectations.",
            image: bannerImg3,
            button: { buttonText: "Our Approach", path: "/company/about", icon: <FaArrowRight /> }
        },
    ];

    return (
        <section className='my-container py-10'>
            <Carousel showArrows={false} autoPlay interval={4000} infiniteLoop showStatus={false} emulateTouch>
                {
                    carouselData.map(({ image, heading, description, button }, index) => (
                        <div key={index} className='flex flex-col md:flex-row  justify-center items-center'>
                            <div className="text-left space-y-4">
                                <h1 className="text-3xl md:text-6xl font-bold text-band-orange">{heading}</h1>
                                <p className="mt-4 text-xl md:text-2xl text-white">{description}</p>
                                <button className='text-black bg-band-orange px-4 py-3 rounded-md hover:bg-band-orange hover:bg-opacity-90'>
                                    <Link className='inline-flex items-center gap-3 font-bold' href={button.path}>{button.buttonText} {button.icon}</Link>
                                </button>
                            </div>
                            <Image src={image} alt={`image ${index}`} />
                        </div>
                    ))
                }
            </Carousel>
        </section>
    );
};

export default Banner;