import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Phone } from 'lucide-react';
import { socialData } from '../data';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Construct WhatsApp message
        const message = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/91${socialData.phone}?text=${message}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-5 position-relative overflow-hidden">
            {/* Background Glow */}
            <div className="position-absolute top-50 start-50 translate-middle" style={{ 
                width: '600px', 
                height: '600px', 
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(3, 3, 3, 0) 70%)',
                zIndex: 0
            }}></div>

            <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <h2 className="section-title text-gradient d-inline-block mb-3">Get In Touch</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <motion.div 
                            className="glass-card p-4 p-md-5"
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="row g-5">
                                <div className="col-md-5 border-end border-white border-opacity-10 pe-md-5">
                                    <div className="h-100 d-flex flex-column">
                                        <h3 className="fw-bold mb-4 fs-3">Let's <span className="text-primary">Connect</span></h3>
                                        
                                        <div className="d-flex flex-column gap-4 flex-grow-1">
                                            <motion.div 
                                                className="d-flex align-items-center gap-4 p-3 rounded-4"
                                                style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}
                                                whileHover={{ x: 10, background: 'rgba(168, 85, 247, 0.08)', borderColor: 'rgba(168, 85, 247, 0.2)' }}
                                            >
                                                <div className="p-3 rounded-circle text-primary shadow-sm" style={{ background: 'rgba(168, 85, 247, 0.15)' }}>
                                                    <Mail size={24} />
                                                </div>
                                                <div className="overflow-hidden">
                                                    <small className="text-muted d-block fw-bold mb-1" style={{ fontSize: '0.7rem', letterSpacing: '2px' }}>EMAIL ME</small>
                                                    <a href={`mailto:${socialData.email}`} className="text-white text-decoration-none fw-bold text-truncate d-block" style={{ fontSize: '1rem' }}>{socialData.email}</a>
                                                </div>
                                            </motion.div>
                                            
                                            <motion.div 
                                                className="d-flex align-items-center gap-4 p-3 rounded-4"
                                                style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}
                                                whileHover={{ x: 10, background: 'rgba(37, 211, 102, 0.08)', borderColor: 'rgba(37, 211, 102, 0.2)' }}
                                            >
                                                <div className="p-3 rounded-circle text-success shadow-sm" style={{ background: 'rgba(37, 211, 102, 0.15)' }}>
                                                    <Phone size={24} />
                                                </div>
                                                <div>
                                                    <small className="text-muted d-block fw-bold mb-1" style={{ fontSize: '0.7rem', letterSpacing: '2px' }}>WHATSAPP</small>
                                                    <a href={`tel:${socialData.phone}`} className="text-white text-decoration-none fw-bold" style={{ fontSize: '1rem' }}>+91 {socialData.phone}</a>
                                                </div>
                                            </motion.div>
                                        </div>

                                        <div className="mt-5">
                                            <h6 className="fw-bold mb-4 small text-muted text-uppercase" style={{ letterSpacing: '2px' }}>Follow My Work</h6>
                                            <div className="d-flex gap-3">
                                                <motion.a 
                                                    href={socialData.github} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="d-flex align-items-center justify-content-center rounded-circle text-white shadow-sm"
                                                    style={{ width: '45px', height: '45px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                                                    whileHover={{ y: -5, background: 'var(--primary)', borderColor: 'var(--primary)', scale: 1.1 }}
                                                >
                                                    <i className="bi bi-github fs-5"></i>
                                                </motion.a>
                                                <motion.a 
                                                    href={socialData.linkedin} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="d-flex align-items-center justify-content-center rounded-circle text-white shadow-sm"
                                                    style={{ width: '45px', height: '45px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                                                    whileHover={{ y: -5, background: '#0077b5', borderColor: '#0077b5', scale: 1.1 }}
                                                >
                                                    <i className="bi bi-linkedin fs-5"></i>
                                                </motion.a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-7 ps-md-5">
                                    <form onSubmit={handleSubmit} className="h-100 d-flex flex-column">
                                        <div className="row g-4 mb-4">
                                            <div className="col-sm-6">
                                                <label className="form-label text-muted small fw-bold mb-2 ms-2" style={{ letterSpacing: '1px' }}>NAME</label>
                                                <div className="position-relative">
                                                    <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted">
                                                        <User size={18} />
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="form-control glass-input py-3 ps-5" 
                                                        placeholder="Rahul Chauhan" 
                                                        required 
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="form-label text-muted small fw-bold mb-2 ms-2" style={{ letterSpacing: '1px' }}>EMAIL</label>
                                                <div className="position-relative">
                                                    <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted">
                                                        <Mail size={18} />
                                                    </span>
                                                    <input 
                                                        type="email" 
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="form-control glass-input py-3 ps-5" 
                                                        placeholder="rahul@example.com" 
                                                        required 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4 flex-grow-1">
                                            <label className="form-label text-muted small fw-bold mb-2 ms-2" style={{ letterSpacing: '1px' }}>MESSAGE</label>
                                            <div className="position-relative h-100">
                                                <span className="position-absolute top-0 start-0 mt-3 ms-3 text-muted">
                                                    <MessageSquare size={18} />
                                                </span>
                                                <textarea 
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="form-control glass-input py-3 ps-5" 
                                                    rows="5" 
                                                    placeholder="Tell me about your project..." 
                                                    required
                                                    style={{ minHeight: '150px' }}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <motion.button 
                                            type="submit" 
                                            className="btn btn-primary w-100 py-3 rounded-4 fw-bold d-flex align-items-center justify-content-center gap-3 shadow-lg mt-auto"
                                            style={{ 
                                                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                                border: 'none',
                                                fontSize: '1.1rem',
                                                letterSpacing: '1px'
                                            }}
                                            whileHover={{ scale: 1.02, boxShadow: '0 0 25px var(--primary-glow)' }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Send size={20} /> Send Message to WhatsApp
                                        </motion.button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .glass-input {
                    background: rgba(255, 255, 255, 0.03) !important;
                    border: 1px solid rgba(255, 255, 255, 0.08) !important;
                    color: white !important;
                    border-radius: 16px !important;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    backdrop-filter: blur(10px);
                }
                .glass-input:focus {
                    background: rgba(255, 255, 255, 0.07) !important;
                    border-color: var(--primary) !important;
                    box-shadow: 0 0 15px rgba(168, 85, 247, 0.15) !important;
                    outline: none;
                    transform: translateY(-2px);
                }
                .glass-input::placeholder {
                    color: rgba(255, 255, 255, 0.2) !important;
                    font-size: 0.9rem;
                }
            `}} />
        </section>
    );
};

export default Contact;
