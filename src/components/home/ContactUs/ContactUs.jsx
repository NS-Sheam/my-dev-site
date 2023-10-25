"use client"

import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';
const ContactUs = () => {
    const router = useRouter();
    return (
        <section className=' my-container my-6 '>
            <div className='rounded-2xl mx-4 sm:mx-4 md:mx-6 lg:mx-10 xl:mx-14 bg-[#322464] p-8 md:p-16 space-y-4'>
                <h2 className='text-3xl md:text-5xl font-bold text-band-orange text-center md:text-left'>Wanna disscuss with us!</h2>
                <p className='text-xl md:text-2xl text-white'>Explore your dream project with us! Our skilled international team is ready to collaborate. Book a free consultation to talk about your requirements and ideas.</p>
                <button onClick={() => router.push("/contact")} className='text-xl md:text-2xl font-bold bg-band-orange px-2 md:px-4 py-3 rounded-md flex items-center justify-center gap-3 text-white'>Contact Us <FaArrowRight /> </button>
            </div>
        </section>
    );
};

export default ContactUs;