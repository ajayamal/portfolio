import React, { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../App';
import { Menu, X, Sun, Moon, Printer, FileDown, ChevronRight, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const links = [
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
    ];

    const navBg = scrolled || mobileOpen
        ? isDark ? 'rgba(12,12,12,0.95)' : 'rgba(223,255,0,0.95)'
        : 'transparent';

    const textColor = isDark ? '#DFFF00' : '#0C0C0C';

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                className="navbar"
                style={{
                    backgroundColor: navBg,
                    boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.07)' : 'none',
                }}
            >
                <div className="navbar-inner">
                    {/* Left Group: Logo + Nav */}
                    <div className="flex items-center gap-16">
                        {/* Logo */}
                        <a
                            href="#"
                            className="font-display font-black text-xl tracking-tighter font-[100]"
                            style={{ color: textColor }}
                        >
                            AJAY<span style={{ opacity: 0.25 }}>.DEV</span>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-10">
                            {links.map(l => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    className="font-body font-light text-sm uppercase tracking-widest transition-all hover:opacity-50 hover:translate-y-[-1px]"
                                    style={{ color: textColor }}
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Controls Group */}
                    <div className="flex items-center gap-4">
                        {/* Resume Link Button (Desktop) */}
                        <motion.a
                            href="https://ajayamalresume.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: isDark ? '0 0 25px rgba(223, 255, 0, 0.4)' : '0 0 25px rgba(0, 0, 0, 0.2)' }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center gap-3 px-6 py-2.5 rounded-full font-display font-black text-xs uppercase transition-colors no-print"
                            style={{
                                backgroundColor: isDark ? '#DFFF00' : '#0C0C0C',
                                color: isDark ? '#0C0C0C' : '#DFFF00',
                                border: `1px solid ${isDark ? '#DFFF00' : '#0C0C0C'}`,
                                padding: "0.5rem 1rem",
                                textDecoration: 'none'
                            }}
                        >
                            <FileDown size={14} />
                            <span>RESUME</span>
                            <ChevronDown size={14} style={{ opacity: 0.6 }} />
                        </motion.a>

                        {/* Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: isDark ? 'rgba(223,255,0,0.1)' : 'rgba(0,0,0,0.08)' }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="flex items-center justify-center w-11 h-11 rounded-xl transition-all"
                            style={{
                                backgroundColor: isDark ? 'rgba(223,255,0,0.05)' : 'rgba(0,0,0,0.04)',
                                border: `1px solid ${isDark ? 'rgba(223,255,0,0.2)' : 'rgba(0,0,0,0.1)'}`,
                                color: textColor,
                            }}
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>

                        {/* Mobile Hamburger */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl transition-all"
                            style={{
                                backgroundColor: isDark ? 'rgba(223,255,0,0.05)' : 'rgba(0,0,0,0.04)',
                                border: `1px solid ${isDark ? 'rgba(223,255,0,0.2)' : 'rgba(0,0,0,0.1)'}`,
                                color: textColor,
                            }}
                            onClick={() => setMobileOpen(m => !m)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </motion.button>
                    </div>

                </div>
            </motion.nav>

            {/* Mobile Full-Screen Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mobile-menu"
                        style={{ backgroundColor: isDark ? '#0C0C0C' : '#DFFF00' }}
                    >
                        {links.map((l, i) => (
                            <motion.a
                                key={l.href}
                                href={l.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: i * 0.07 }}
                                className="font-display font-black uppercase"
                                style={{
                                    fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                                    color: isDark ? '#DFFF00' : '#0C0C0C',
                                }}
                                onClick={() => setMobileOpen(false)}
                            >
                                {l.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="https://ajayamalresume.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setMobileOpen(false);
                            }}
                            className="mt-4 flex items-center gap-3 px-8 py-4 rounded-2xl font-display font-black text-xl uppercase transition-colors"
                            style={{
                                backgroundColor: isDark ? '#DFFF00' : '#0C0C0C',
                                color: isDark ? '#0C0C0C' : '#DFFF00',
                                border: `1px solid ${isDark ? '#DFFF00' : '#0C0C0C'}`,
                                boxShadow: isDark ? '0 0 30px rgba(223, 255, 0, 0.3)' : '0 0 30px rgba(0, 0, 0, 0.15)',
                                textDecoration: 'none'
                            }}
                        >
                            <FileDown size={28} />
                            <span>RESUME</span>
                            <ChevronRight size={24} style={{ opacity: 0.6 }} />
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
