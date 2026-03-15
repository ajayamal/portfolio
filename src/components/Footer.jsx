import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ThemeContext } from '../App';

const Footer = () => {
    const { isDark } = useContext(ThemeContext);

    const socials = [
        { icon: <Github size={18} />, href: 'https://github.com/ajayamal', label: 'GitHub' },
        { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/ajay-amal-95554912a', label: 'LinkedIn' },
        { icon: <Mail size={18} />, href: 'mailto:ajayamalprof@gmail.com', label: 'Email' },
    ];

    return (
        <footer style={{
            borderTop: '1px solid rgba(223,255,0,0.1)',
            padding: '2.5rem 2rem',
            backgroundColor: '#0C0C0C',
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1.5rem',
            }}>
                {/* Left: Name + tagline */}
                <div>
                    <p style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 900,
                        fontSize: '1.1rem',
                        letterSpacing: '-0.03em',
                        color: '#DFFF00',
                        textTransform: 'uppercase',
                    }}>
                        AJAY AMAL
                    </p>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.45)',
                        marginTop: '0.2rem',
                    }}>
                        © {new Date().getFullYear()} · Designed & Built with passion
                    </p>
                </div>

                {/* Right: Social icons */}
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    {socials.map(s => (
                        <motion.a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            whileHover={{ y: -3, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(223,255,0,0.08)',
                                border: '1px solid rgba(223,255,0,0.15)',
                                color: '#DFFF00',
                                textDecoration: 'none',
                                transition: 'border-color 0.2s ease, background-color 0.2s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'rgba(223,255,0,0.5)';
                                e.currentTarget.style.backgroundColor = 'rgba(223,255,0,0.15)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(223,255,0,0.15)';
                                e.currentTarget.style.backgroundColor = 'rgba(223,255,0,0.08)';
                            }}
                        >
                            {s.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
