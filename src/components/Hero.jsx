import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { ThemeContext } from '../App';

const Hero = () => {
    const { isDark } = useContext(ThemeContext);

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ paddingTop: '7rem', paddingBottom: '4rem' }}>
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]" style={{ backgroundColor: 'var(--neon-lime)' }} />
            </div>

            <div className="container relative z-10">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'end' }}>
                    {/* Top label row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                    >
                        <span style={{
                            display: 'inline-block', width: '2.5rem', height: '2px',
                            backgroundColor: 'var(--accent)', opacity: 0.4,
                        }} />
                        <span className="label" style={{ color: 'var(--accent)' }}>
                            AVAILABLE FOR WORK
                        </span>
                        <span style={{
                            width: '8px', height: '8px', borderRadius: '50%',
                            backgroundColor: '#00FF88', display: 'inline-block',
                            boxShadow: '0 0 0 3px rgba(0,255,136,0.25)',
                        }} />
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h1 className="display-1" style={{ color: 'var(--text-primary)' }}>
                            FULL STACK<br />
                            DEVELOPER
                        </h1>
                    </motion.div>

                    {/* Summary + CTA row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                            lineHeight: 1.65,
                            maxWidth: '600px',
                            color: 'var(--text-muted)',
                            fontWeight: 400,
                        }}>
                            Full-stack developer with 5+ years of experience building web applications across startup and enterprise environments. Currently at TCS developing qualcomm.com, with strong full-stack expertise using React, Next.js, NestJS, and PostgreSQL.
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                            <a href="https://ajayamalresume.vercel.app/" target="_blank" rel="noopener noreferrer"
                                className="btn btn-outline"
                                style={{ borderColor: 'var(--card-border)' }}
                            >
                                RESUME
                            </a>
                        </div>

                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            {[
                                { icon: <Github size={18} />, href: 'https://github.com/ajayamal', label: 'GitHub' },
                                { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/ajay-amal-95554912a', label: 'LinkedIn' },
                                { icon: <Mail size={18} />, href: 'mailto:ajayamalprof@gmail.com', label: 'Email' },
                            ].map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    style={{
                                        width: '42px', height: '42px', borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        backgroundColor: 'var(--pill-bg)',
                                        color: 'var(--accent)',
                                        transition: 'all 0.2s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{
                    position: 'absolute', bottom: '2rem', left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
                    color: 'var(--text-muted)',
                }}
            >
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.15em' }}>SCROLL</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                >
                    <ArrowDown size={16} />
                </motion.div>
            </motion.div>

            {/* BG decorative word */}
            <div style={{
                position: 'absolute', inset: 0, display: 'flex',
                alignItems: 'center', justifyContent: 'flex-end',
                pointerEvents: 'none', overflow: 'hidden', zIndex: 0,
            }}>
                <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(8rem, 20vw, 18rem)',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: 'transparent',
                    WebkitTextStroke: '1px var(--pill-bg)',
                    userSelect: 'none',
                    paddingRight: '1rem',
                }}>
                    DEVELOPER
                </span>
            </div>
        </section>
    );
};

export default Hero;
