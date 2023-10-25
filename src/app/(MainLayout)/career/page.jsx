import React from 'react';

const jobListings = [
    {
        title: 'Frontend Developer',
        location: 'New York, NY',
        description: 'We are looking for a skilled Frontend Developer to join our team. The ideal candidate has experience with React.js and responsive web design.',
    },
    {
        title: 'UI/UX Designer',
        location: 'San Francisco, CA',
        description: 'We are seeking a creative UI/UX Designer to design and shape unique, user-centric products and experiences. Proficiency in tools like Sketch, Figma, or Adobe XD is required.',
    },
    {
        title: 'Backend Developer',
        location: 'Chicago, IL',
        description: 'We are hiring a Backend Developer with expertise in server-side technologies and database management. Experience in Node.js and MongoDB is preferred.',
    },
    {
        title: 'Digital Marketing Specialist',
        location: 'Los Angeles, CA',
        description: 'We need a Digital Marketing Specialist to develop, implement, track, and optimize our digital marketing campaigns across various platforms. Knowledge of SEO, SEM, and social media marketing is essential.',
    },
];

const CareerPage = () => {
    return (
        <div className="my-container pt-28 space-y-4">
            <h1 className="text-center text-2xl md:text-5xl font-bold text-band-orange">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-white text-center">Explore exciting career opportunities with us.</p>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                <div className="md:col-span-1">
                    <h2 className="md:text-left text-xl md:text-3xl font-bold text-band-orange mb-4">Current Job Openings</h2>
                    <ul className="list-disc space-y-4">
                        {jobListings.map((job, index) => (
                            <li key={index} className="text-white">
                                <h3 className="text-lg font-bold">{job.title}</h3>
                                <p className="text-left font-semibold">{job.location}</p>
                                <p className="">{job.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:col-span-1">
                    <h2 className="md:text-left text-xl md:text-3xl font-bold text-band-orange mb-4">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">Full Name</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">Email Address</label>
                            <input type="email" className="mt-1 p-2 w-full border rounded-md" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">Message</label>
                            <textarea className="mt-1 p-2 w-full border rounded-md h-32" required></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default CareerPage;
