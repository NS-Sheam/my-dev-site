import React from 'react';

const SubPageBanner = ({ title, description }) => {
    return (
        <section className="sub-page-banner my-container bg-band-orange text-slate-800 pb-14 md:pb-20 pt-24 md:pt-36 text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="text-xl md:text-2xl">{description}</p>
        </section>
    );
};

export default SubPageBanner;