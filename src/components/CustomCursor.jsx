import React, { useEffect, useState, useContext } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ThemeContext } from '../App';

const CustomCursor = () => {
    const { isDark } = useContext(ThemeContext);
    const [isVisible, setIsVisible] = useState(false);
    
    // Track mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Add spring physics for smooth, slight delay following
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const pacmanX = useSpring(mouseX, springConfig);
    const pacmanY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [mouseX, mouseY, isVisible]);

    // Don't render on mobile/touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    // Color based on theme (always lime in dark mode, black in light mode for visibility)
    const pacmanColor = isDark ? '#DFFF00' : '#0C0C0C';

    return (
        <motion.div
            className="custom-cursor"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                x: pacmanX,
                y: pacmanY,
                translateX: '-50%',
                translateY: '-50%',
                pointerEvents: 'none',
                zIndex: 9999,
                opacity: isVisible ? 1 : 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
            }}
        >
            {/* Top half of Pac-Man's mouth */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '32px',
                    height: '16px',
                    backgroundColor: pacmanColor,
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    top: 0,
                    transformOrigin: 'bottom center',
                }}
                animate={{
                    rotate: [-15, -45, -15]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 0.4,
                    ease: "linear"
                }}
            />
            {/* Bottom half of Pac-Man's mouth */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '32px',
                    height: '16px',
                    backgroundColor: pacmanColor,
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                    bottom: 0,
                    transformOrigin: 'top center',
                }}
                animate={{
                    rotate: [15, 45, 15]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 0.4,
                    ease: "linear"
                }}
            />
        </motion.div>
    );
};

export default CustomCursor;
