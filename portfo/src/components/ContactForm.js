import React from 'react';
import './ContactForm.css';

const ContactForm = ({ onSubmitted }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        
        try {
            const response = await fetch("https://formspree.io/f/mwpbrjrz", {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                onSubmitted('Message sent successfully!');
                form.reset();
            } else {
                onSubmitted('Error: Failed to send message.');
            }
        } catch (error) {
            onSubmitted('Error: Network problem.');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">_name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">_email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">_message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">[send]</button>
            </form>
        </section>
    );
};

export default ContactForm; 