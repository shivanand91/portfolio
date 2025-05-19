import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission (e.g., send to API)
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
            <div className="w-full max-w-lg bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Me</h2>
                {submitted ? (
                    <div className="text-green-400 text-center text-lg font-semibold">
                        Thank you for reaching out! I'll get back to you soon.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-gray-300 mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                                id="message"
                                name="message"
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-white font-semibold rounded-lg hover:from-gray-600 hover:to-gray-800 transition"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;