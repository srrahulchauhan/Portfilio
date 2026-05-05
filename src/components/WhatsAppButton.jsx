import React from 'react';
import { motion } from 'framer-motion';

import { socialData } from '../data';

const WhatsAppButton = () => {
    return (
        <motion.a
            href={`https://wa.me/91${socialData.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            title="Chat on WhatsApp"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <i className="bi bi-whatsapp"></i>
            <span className="whatsapp-tooltip">Chat with me</span>
        </motion.a>
    );
};

export default WhatsAppButton;
