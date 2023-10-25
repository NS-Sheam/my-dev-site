import React from 'react';
import teamImg1 from '../../../assets/team/team-img1.jpg';
import teamImg2 from '../../../assets/team/team-img2.jpg';
import teamImg3 from '../../../assets/team/team-img3.jpg';
import teamImg4 from '../../../assets/team/team-img4.jpg';
import teamImg5 from '../../../assets/team/team-img5.jpg';
import teamImg6 from '../../../assets/team/team-img6.jpg';
import teamImg7 from '../../../assets/team/team-img7.jpg';
import teamImg8 from '../../../assets/team/team-img8.jpg';
import Image from 'next/image';
const teamMembers = [
    {
        name: 'John Doe',
        role: 'Founder & CEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies quam vitae semper feugiat.',
        image: teamImg1,
    },
    {
        name: 'Alex Smith',
        role: 'Lead Developer',
        description: 'Sed euismod aliquam tellus, a bibendum purus imperdiet non. Proin nec semper justo, nec efficitur purus.',
        image: teamImg2,
    },
    {
        name: 'Jerry Williams',
        role: 'Lead Designer',
        description: 'Sed euismod aliquam tellus, a bibendum purus imperdiet non. Proin nec semper justo, nec efficitur purus.',
        image: teamImg3,
    },
    {
        name: 'Miles Moralis',
        role: 'Lead Tester',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies quam vitae semper feugiat.',
        image: teamImg4,
    },
    {
        name: 'Eva Max',
        role: 'Lead Tester',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies quam vitae semper feugiat.',
        image: teamImg5,
    },
    {
        name: 'Pitar Watson',
        role: 'Marketing Specialist',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        image: teamImg6,
    },
    {
        name: 'Sophia Adams',
        role: 'UX/UI Designer',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        image: teamImg7,
    },
    {
        name: 'Emma Wilson',
        role: 'Software Engineer',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        image: teamImg8,
    }

];

const TeamPage = () => {
    return (
        <div className="my-container pt-28 space-y-4">
            <h1 className="text-center text-2xl md:text-5xl font-bold text-band-orange">Meet Our Team</h1>
            <p className='text-xl md:text-2xl text-white text-center'>Meet our dedicated team members.</p>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-8 border border-band-orange rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-band-orange">
                                <Image src={member.image} alt={member.name} layout="responsive" className="object-cover w-full h-full" />
                            </div>
                            <h2 className="text-2xl text-band-orange font-bold mb-2 text-center">{member.name}</h2>
                            <p className="text-slate-800 font-bold text-center mb-2">{member.role}</p>
                            <p className="text-slate-800 text-center">{member.description}</p>
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default TeamPage;
