import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import {
    ExternalLink, Github, Linkedin, Mail,
    Briefcase, LayoutGrid, Cpu, Send,
} from 'lucide-react';
import { ThemeContext } from '../App';

/* ---------- helpers ---------- */
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay },
});

/* ---------- data ---------- */
const experiences = [
    {
        company: 'TCS (Qualcomm Team)',
        role: 'Frontend Developer',
        period: 'May 2023 - Present',
        description: "Developing qualcomm.com using React and AEM. Building modular components, optimizing performance, and ensuring cross-browser compatibility. Also supported Amazon CodeWhisperer by validating code samples for AI generation.",
    },
    {
        company: 'WEB3 CITADEL',
        role: 'Full Stack Developer',
        period: 'Jun 2021 - Dec 2022',
        description: "Built full-stack Next.js and NestJS applications with PostgreSQL. Contributed to '8Mint', an NFT platform, developing REST APIs, handling web3 database interactions, and designing responsive UX flows.",
    },
    {
        company: 'F22 Labs',
        role: 'Backend Developer',
        period: 'Jan 2020 - Jul 2020',
        description: "Maintained backend services using Ruby on Rails, Node.js, and ExpressJS. Focused on API architecture, workflows, and scalability for early-stage products across multiple runtime environments.",
    },
    {
        company: 'Altius Technologies',
        role: 'Junior Full Stack Developer',
        period: 'Jun 2019 - Dec 2019',
        description: "Developed full-stack features using Angular, ExpressJS, and MongoDB. Gained hands-on experience in API design, database modeling, and end-to-end project execution.",
    },
];

const projects = [
    {
        name: 'PowerKick',
        desc: 'Developed a Flutter-based mobile app for PowerKick, a South Korean on-the-go charging startup, integrating with a Java Spring Boot backend.',
        tech: 'Flutter · Java Spring Boot',
    },
    {
        name: 'ARTO',
        desc: 'Arto is a digital art discovery platform that connects artists, galleries, and collectors, enabling users to explore artwork.',
        tech: 'Flutter · Java Spring Boot',
    },
    {
        name: 'JustAct',
        desc: 'Built back-end services and APIs for JustAct, an online dispute resolution platform, facilitating scalable workflows.',
        tech: 'Ruby on Rails · Node.js · ExpressJS',
        link: 'https://justact.co.in/'
    }
];

const skillGroups = [
    { title: 'Languages & Databases', skills: ['JavaScript (Advanced)', 'TypeScript', 'Dart', 'Java (Intermediate)', 'SQL', 'MongoDB', 'PostgreSQL'] },
    { title: 'Frontend Frameworks & Libs', skills: ['React', 'Next.js', 'Tailwind', 'Bootstrap', 'Styled Components', 'Redux', 'React Query'] },
    { title: 'Backend Frameworks', skills: ['Nest.js', 'Express', 'Spring Boot', 'Axios', 'Flutter'] },
    { title: 'Tools & Build Systems', skills: ['Git', 'CI/CD', 'SonarQube', 'Jenkins', 'ESLint', 'Docker', 'VSCode', 'NPM', 'Yarn', 'Webpack', 'Vite'] },
    { title: 'Cloud, CMS & Others', skills: ['AWS', 'CloudFront', 'Firebase', 'Google Analytics', 'Contentful CMS', 'Netlify', 'Vercel'] },
    { title: 'Testing & Interests', skills: ['Jest', 'Testing Library', 'Vitest', 'IoT', 'AI', 'MCP servers', 'Game Dev', 'Home Lab'] },
];

/* ---------- sub-components ---------- */
const SectionTag = ({ children, color }) => (
    <span className="section-tag" style={{ color }}>
        <span style={{ display: 'inline-block', width: '1rem', height: '1.5px', backgroundColor: color, opacity: 0.5 }} />
        {children}
    </span>
);

const BentoGrid = () => {
    const { isDark } = useContext(ThemeContext);

    return (
        <div style={{ paddingBottom: '4rem' }}>
            {/* ══════════════════════════════════
                SECTION 1 – BENTO INTRO
            ══════════════════════════════════ */}
            <div id="projects" className="bento-grid">

                {/* Bio card */}
                <motion.div {...fadeUp(0)} className="acid-card acid-card-dark col-8">
                    <SectionTag color="var(--text-muted)">ABOUT ME</SectionTag>
                    <h2 className="display-2" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
                        FULL STACK<br />DEVELOPER
                    </h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: '440px' }}>
                        I'm Ajay — a software developer with 5+ years of experience delivering
                        robust, user-centric apps across fintech, web3, and enterprise domains.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
                        <a href="mailto:ajayamalprof@gmail.com" className="btn btn-lime">
                            HAVE A CHAT <Send size={16} />
                        </a>
                        <a
                            href="https://ajayamalresume.vercel.app/"
                            target="_blank" rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ borderColor: 'var(--card-border)' }}
                        >
                            Resume <ExternalLink size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* Quick stats card */}
                <motion.div {...fadeUp(0.1)} className="acid-card acid-card-lime col-4">
                    <SectionTag color="var(--text-muted)">BY THE NUMBERS</SectionTag>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                        {[
                            { n: '5+', label: 'Years Experience' },
                            { n: '12+', label: 'Projects Shipped' },
                            { n: '4', label: 'Companies' },
                        ].map(s => (
                            <div key={s.n}>
                                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2.8rem', lineHeight: 1 }}>{s.n}</div>
                                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>

            {/* ══════════════════════════════════
                SECTION 2 – EXPERIENCE (TIMELINE)
            ══════════════════════════════════ */}
            <div id="experience" className="bento-grid">
                <motion.div {...fadeUp(0)} className="acid-card acid-card-white col-12">
                    <SectionTag color="var(--text-muted)">
                        <Briefcase size={12} style={{ marginRight: '0.25rem' }} />WORK HISTORY
                    </SectionTag>
                    <h2 className="display-2" style={{ marginTop: '0.5rem', marginBottom: '2.5rem' }}>
                        EXPERIENCE
                    </h2>

                    <div className="timeline">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: i * 0.1 }}
                                className="timeline-item"
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                    <span style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.08em',
                                        color: 'var(--text-muted)',
                                    }}>
                                        {exp.period}
                                    </span>
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 900,
                                        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                                        letterSpacing: '-0.02em',
                                        marginTop: '0.1rem',
                                    }}>
                                        {exp.company}
                                    </h3>
                                    <span style={{
                                        display: 'inline-flex', alignItems: 'center',
                                        padding: '0.3rem 0.9rem',
                                        border: '1px solid var(--card-border)',
                                        borderRadius: '100px',
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        width: 'fit-content',
                                        marginTop: '0.3rem',
                                        backgroundColor: 'var(--pill-bg)'
                                    }}>
                                        {exp.role}
                                    </span>
                                    <p style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.95rem',
                                        lineHeight: 1.65,
                                        color: 'var(--text-muted)',
                                        marginTop: '0.6rem',
                                        maxWidth: '600px',
                                    }}>
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>


            {/* ══════════════════════════════════
                SECTION 3 – PROJECTS
            ══════════════════════════════════ */}
            <div id="projects" className="bento-grid">
                <motion.div {...fadeUp(0)} className="acid-card acid-card-dark col-12">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <SectionTag color="var(--text-muted)">
                                <LayoutGrid size={12} style={{ marginRight: '0.25rem' }} /> SELECTED WORK
                            </SectionTag>
                            <h2 className="display-2" style={{ marginTop: '0.5rem' }}>PROJECTS</h2>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                        {projects.map((p, i) => (
                            <motion.a
                                key={i}
                                href={p.link}
                                {...fadeUp(i * 0.1)}
                                style={{
                                    display: 'block',
                                    padding: '1.75rem',
                                    borderRadius: '1.5rem',
                                    backgroundColor: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none',
                                }}
                                whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.07)' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)', fontWeight: 900,
                                        fontSize: '1.35rem', letterSpacing: '-0.02em',
                                    }}>
                                        {p.name}
                                    </h3>
                                    {p.link && <ExternalLink size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />}
                                </div>
                                <p style={{
                                    fontFamily: 'var(--font-body)', fontSize: '0.88rem',
                                    color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem',
                                }}>
                                    {p.desc}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                    {p.tech.split('·').map(t => (
                                        <span key={t.trim()} style={{
                                            fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600,
                                            padding: '0.25rem 0.75rem', borderRadius: '100px',
                                            backgroundColor: 'rgba(223,255,0,0.12)',
                                            color: 'var(--neon-lime)',
                                            border: '1px solid rgba(223,255,0,0.2)',
                                        }}>
                                            {t.trim()}
                                        </span>
                                    ))}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ══════════════════════════════════
                SECTION 4 – SKILLS
            ══════════════════════════════════ */}
            <div id="skills" className="bento-grid">
                <motion.div {...fadeUp(0)} className="acid-card acid-card-lime col-12">
                    <SectionTag color="var(--text-muted)">
                        <Cpu size={12} style={{ marginRight: '0.25rem' }} /> TECH STACK
                    </SectionTag>
                    <h2 className="display-2" style={{ marginTop: '0.5rem', marginBottom: '2.5rem' }}>
                        SKILLS
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                        {skillGroups.map((group, i) => (
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <h4 style={{
                                    fontFamily: 'var(--font-display)', fontWeight: 900,
                                    fontSize: '1rem', letterSpacing: '-0.01em',
                                    marginBottom: '1rem',
                                }}>
                                    {group.title}
                                </h4>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.6rem',
                                    alignItems: 'center',
                                }}>
                                    {group.skills.map(skill => (
                                        <motion.div
                                            key={skill}
                                            whileHover={{ y: -2, backgroundColor: 'rgba(223,255,0,0.12)' }}
                                            style={{
                                                padding: '0.4rem 0.85rem',
                                                borderRadius: '100px',
                                                backgroundColor: 'var(--pill-bg)',
                                                border: '1px solid var(--card-border)',
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.85rem',
                                                fontWeight: 500,
                                                color: 'var(--text-primary)',
                                                cursor: 'default',
                                                transition: 'border-color 0.2s ease',
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(223,255,0,0.4)'}
                                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--card-border)'}
                                        >
                                            {skill}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ══════════════════════════════════
                SECTION 5 – EDUCATION + CONTACT
            ══════════════════════════════════ */}
            <div id="contact" className="bento-grid">

                {/* Education */}
                <motion.div {...fadeUp(0)} className="acid-card acid-card-dark col-7">
                    <SectionTag color="var(--text-muted)">EDUCATION</SectionTag>
                    <h2 className="display-2" style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
                        BACKGROUND
                    </h2>
                    <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.15)', paddingLeft: '1.5rem' }}>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255, 255, 255, 0.6)' }}>
                            2014 - 2017
                        </span>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.3rem', letterSpacing: '-0.02em', margin: '0.4rem 0 0.3rem', color: '#FFFFFF' }}>
                            BCA
                        </h3>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(223, 255, 0, 0.7)' }}>
                            Arulmigu kalasalingam collage of Arts and Science, Tamil Nadu
                        </p>
                    </div>
                    <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.15)', paddingLeft: '1.5rem', marginTop: '1.5rem' }}>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255, 255, 255, 0.6)' }}>
                            2017 - 2019
                        </span>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.3rem', letterSpacing: '-0.02em', margin: '0.4rem 0 0.3rem', color: '#FFFFFF' }}>
                            MCA
                        </h3>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(223, 255, 0, 0.7)' }}>
                            SNS College of Technology, Tamil Nadu
                        </p>
                    </div>
                </motion.div>

                {/* Contact / Socials */}
                <motion.div {...fadeUp(0.1)} className="acid-card acid-card-lime col-5">
                    <SectionTag color="var(--text-muted)">CONNECT</SectionTag>
                    <h2 className="display-2" style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
                        LET'S TALK
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { icon: <Github size={20} />, label: 'GITHUB', href: 'https://github.com/ajayamal' },
                            { icon: <Linkedin size={20} />, label: 'LINKEDIN', href: 'https://linkedin.com/in/ajay-amal-95554912a' },
                            { icon: <Mail size={20} />, label: 'EMAIL', href: 'mailto:ajayamalprof@gmail.com' },
                        ].map(s => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                                    padding: '1rem 1.25rem', borderRadius: '1rem',
                                    backgroundColor: 'var(--pill-bg)',
                                    color: 'inherit',
                                    fontFamily: 'var(--font-display)', fontWeight: 900,
                                    fontSize: '1rem', letterSpacing: '-0.01em',
                                    transition: 'all 0.2s ease',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--pill-bg)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                            >
                                {s.icon} {s.label}
                            </a>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default BentoGrid;
