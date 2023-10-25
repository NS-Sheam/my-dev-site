import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import htmlImage from '../../../assets/technology-image/html.png';
import cssImage from '../../../assets/technology-image/css.png';
import jsImage from '../../../assets/technology-image/js.png';
import reactImage from '../../../assets/technology-image/react.png';
import nodeImage from '../../../assets/technology-image/nodejs.png';
import expressImage from '../../../assets/technology-image/expressjs.png';
import mongodbImage from '../../../assets/technology-image/mongodb.png';
import postgresImage from '../../../assets/technology-image/postgres.png';
import sqlImage from '../../../assets/technology-image/sql.png';
import awsImage from '../../../assets/technology-image/aws.png';
import tailwindImage from '../../../assets/technology-image/tailwind.png';
import boostrapImage from '../../../assets/technology-image/bootstrap.png';
import mysqlImage from '../../../assets/technology-image/mysql.png';
import Image from 'next/image';
const Technology = () => {

    const [showedTechnology, setShowedTechnology] = useState('frontend');

    useEffect(() => {
        AOS.init()
    }, [])

    const technologies = [
        {
            frontend: [
                {
                    name: 'HTML',
                    image: htmlImage
                },
                {
                    name: 'CSS',
                    image: cssImage
                },
                {
                    name: 'Javascript',
                    image: jsImage
                },
                {
                    name: 'React',
                    image: reactImage
                },
                {
                    name: 'Tailwind',
                    image: tailwindImage
                },
                {
                    name: 'Bootstrap',
                    image: boostrapImage
                },

            ],
        },
        {
            backend: [
                {
                    name: 'Node',
                    image: nodeImage
                },
                {
                    name: 'Express',
                    image: expressImage
                }
            ],
        }, {
            database: [
                {
                    name: 'MongoDB',
                    image: mongodbImage
                },
                {
                    name: 'Postgres',
                    image: postgresImage
                },
                {
                    name: 'SQL',
                    image: sqlImage
                },
                {
                    name: 'MySQL',
                    image: mysqlImage
                }
            ],
            devops: [
                {
                    name: 'AWS',
                    image: awsImage
                }
            ],
        }

    ]

    return (
        <section className='my-container space-y-4 py-6'>
            <h1 className="text-3xl md:text-6xl font-bold text-band-orange text-center">Technology</h1>
            <h2 className="text-xl md:text-3xl font-bold text-white text-center">
                Comprehensive Software Development Services.
            </h2>
            <p className="text-xl md:text-2xl text-white text-center">
                ASoftware development services include Custom Software Development, Web and Mobile Application Design &
                Development, UI/UX design, DevOps, Software Testing, Maintenance, and Continuous Support. These services
                streamline processes, improve productivity, and enhance user experiences by creating tailored software
                solutions.
            </p>
            <div className='md:grid grid-cols-3 gap-5 items-start'>
                {/* button side  */}
                <div className='col-span-1 flex flex-col justify-center items-center gap-8'>
                    {["Frontend", "Backend", "Database", "Devops"].map((item, index) => (
                        <button
                            onClick={() => setShowedTechnology(item.toLowerCase())}
                            key={index}
                            className={`text-2xl font-bold bg-[#322464] py-5 w-full text-white rounded-lg ${showedTechnology === item.toLowerCase() ? 'bg-band-orange' : ''}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                {/* Data side */}
                <div className='col-span-2 py-4'>
                    {
                        technologies.map((technology, index) => {
                            return (
                                Object.keys(technology).map((key, index) => {
                                    return (
                                        key === showedTechnology && (
                                            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3 mx-auto' key={index}>
                                                {
                                                    technology[key].map((item, index) => {
                                                        return (
                                                            <div
                                                                data-aos="zoom-in"
                                                                data-aos-duration="500"
                                                                className='flex flex-col justify-center items-center gap-8 bg-[#322464] p-5 border border-band-orange rounded-lg'
                                                                key={index}
                                                            >
                                                                <Image src={item.image} width={100} alt="" />
                                                                <h3 className='text-xl font-bold text-band-orange'>{item.name}</h3>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    )
                                })
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Technology;