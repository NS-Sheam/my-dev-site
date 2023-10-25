"use client";
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        // Reset the form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-green-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-green-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md h-32 focus:outline-none focus:border-green-500"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
            >
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
