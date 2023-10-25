import React from 'react';
import ContactForm from '../../../components/Contact/ContactForm';

const Contact = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="my-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-center md:text-left text-2xl md:text-4xl font-bold mb-4 text-band-orange">Get in Touch</h2>
                        <p className="text-center md:text-left text-slate-800 text-xl md:text-2xl mb-6">Have a project in mind or need further information? Drop us a message, and our team will get back to you shortly.</p>
                        <ul className="flex space-x-4 text-slate-500">
                            <li><strong>Email:</strong> info@example.com</li>
                            <li><strong>Phone:</strong> +1 123 456 7890</li>
                        </ul>
                        <ul className="flex space-x-4 mt-4 text-slate-500">
                            <li><strong>Address:</strong> 123 Main Street, City, Country, 12345</li>
                        </ul>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
