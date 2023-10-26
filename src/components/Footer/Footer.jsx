import Link from 'next/link';
import React from 'react';

const Footer = () => {

    const footerData = [
        {
            Company: [
                {
                    name: 'About Us',
                    link: '#'
                },
                {
                    name: 'Contact Us',
                    link: '#'
                },
                {
                    name: 'Privacy Policy',
                    link: '#'
                },
                {
                    name: 'Terms & Conditions',
                    link: '#'
                }
            ],
            Emergency: [
                {
                    name: '24/7 Emergency Service',
                    link: '#'
                },
                {
                    name: 'Support Service Area',
                    link: '#'
                },
                {
                    name: 'FAQ',
                    link: '#'
                }
            ],
            Address: [
                {
                    name: '1234 North Avenue Luke Lane, South Bend, IN 360001',
                }
            ]
        }
    ]

    return (
        <section className='overflow-hidden my-container py-6 relative'>
            <svg className='absolute lg:-top-36 pointer-events-none' viewBox="0 0 500 200" fill='#1A1139'>
                <path d="M 0,70 C 200,190 300,0 500,100 L 500,00 L 0,0"></path>
            </svg>

            <div className='grid grid-cols-1 md:grid-cols-3 bg-[#322464]'>

                {
                    footerData.map((item) => {
                        return (
                            Object.keys(item).map((key, index) => {
                                return (
                                    <div className=' p-8 md:p-16 space-y-4 mt-24' key={index}>
                                        <h3 className='text-xl md:text-3xl font-bold text-band-orange'>{key}</h3>
                                        {
                                            item[key].map((subItem, subIndex) => {
                                                return (
                                                    key === 'Address' ?
                                                        <p className='text-white text-xl md:text-2xl' key={subIndex}>{subItem.name}</p>
                                                        :
                                                        <Link className=' text-white text-xl md:text-2xl block hover:underline' href={subItem.link} key={subIndex}>
                                                            {subItem.name}
                                                        </Link>
                                                );
                                            })
                                        }
                                    </div>
                                )
                            })
                        )
                    })
                }

            </div>

        </section>
    );
};

export default Footer;