import { createContext, useContext, useState, useEffect } from "react";

const translations = {
    id: {
        // Navbar
        navProjects: "Proyek",
        navAbout: "Tentang",
        navProcess: "Proses",
        navContact: "Kontak",
        navHireMe: "Hire Me",

        // Hero
        heroEyebrow: "Mahasisawa Pendidikan Teknologi Informasi UNESA",
        heroTitle1: "Menciptakan",
        heroTitle2: "Inovasi Digital",
        heroTitle3: "Berdampak.",
        heroDesc: "Memiliki ketertarikan kuat terhadap pengembangan solusi teknologi yang inovatif dan berdampak nyata. Berdedikasi untuk terus berkembang baik melalui jalur akademik maupun kompetisi hackathon.",
        heroCtaProj: "Lihat Proyek",
        heroCtaContact: "Hubungi Saya",
        heroBadge: "Siap Berkontribusi",
        heroStat1: "Tahun Exp",
        heroStat2: "Semester",
        heroStat3: "Hackathon",
        heroExplore: "Explore Projects",

        // About
        aboutLabel: "Tentang",
        aboutTitle1: "Kode yang",
        aboutTitle2: "bicara sendiri.",
        aboutP1: `<strong style="color: #f4f2ee; font-weight: 600">Indra Bachtiar Zakaria</strong> — Mahasiswa aktif Program Studi Pendidikan Teknologi Informasi di <strong style="color: #f4f2ee; font-weight: 600">Universitas Negeri Surabaya (UNESA)</strong>, saat ini menempuh semester 4. Dengan latar belakang di IT, saya memiliki ketertarikan kuat dalam pengembangan solusi teknologi inovatif dan berdampak nyata.`,
        aboutP2: `Selama setahun terakhir, saya aktif berpartisipasi dalam berbagai kompetisi <strong style="color: #f4f2ee; font-weight: 600">hackathon</strong>. Pengalaman ini telah mempertajam pikiran kritis saya, keterampilan kolaborasi tim, serta kemampuan merancang dan mengeksekusi ide secara cepat di bawah tekanan waktu.`,
        aboutP3: `Kompetisi tersebut memperkuat tidak hanya keterampilan teknis saya, tetapi juga <strong style="color: #f4f2ee; font-weight: 600">soft skills</strong> seperti problem-solving, komunikasi, dan adaptabilitas. Saya berkomitmen penuh untuk terus berkembang dan siap berkontribusi unggul di dunia teknologi melalui jalur akademik maupun kompetitif.`,
        aboutRole: "Mahasiswa PTI",
        aboutAvailable: "Siap Belajar",
        aboutSkills: "Skills & Tools",

        // Process
        processLabel: "Cara Kerja",
        processTitle1: "Dari Ide Menjadi",
        processTitle2: "Solusi Nyata.",
        processDesc: "Melalui pendekatan yang terstruktur, saya mengubah ide dan tantangan (terutama dalam hackathon) menjadi prototipe dan aplikasi yang siap berdampak.",

        // Projects
        projectsLabel: "Portofolio",
        projectsTitle1: "Kerja",
        projectsTitle2: "Nyata.",
        filterAll: "Semua",
        filterWeb: "Web",
        filterMobile: "Mobile",
        filterDesktop: "Desktop",
        caseStudy: "Lihat Studi Kasus",
        visitApp: "Kunjungi WENWORK App",
        visitGithub: "Lihat Repository GitHub",
        techStack: "Tech Stack",
        payment: "Pembayaran",
        platform: "Platform",

        // Testimonials
        testiLabel: "Testimoni",
        testiTitle1: "Belum ada",
        testiTitle2: "klien profesional.",
        testiDesc: '"Saat ini saya masih fokus pada pengembangan diri, studi akademik, dan partisipasi di berbagai kompetisi hackathon. Saya sangat terbuka untuk peluang kolaborasi atau proyek yang menantang di masa depan!"',

        // Contact
        contactLabel: "Kontak",
        contactTitle1: "Ada proyek",
        contactTitle2: "menarik?",
        contactDesc: "Saya selalu terbuka untuk proyek baru dan kolaborasi yang menarik. Ceritakan ide Anda — saya akan merespons dalam 24 jam.",
        contactEmail: "Email",
        contactLocation: "Lokasi",
        contactLocationVal: "Kediri, Indonesia",
        contactAvailability: "Availability",
        contactAvailabilityVal: "Open for work",
        formName: "Nama",
        formEmail: "Email",
        formProject: "Jenis Proyek",
        formSelect: "Pilih jenis...",
        formOther: "Lainnya",
        formMessage: "Pesan",
        formMessagePlaceholder: "Ceritakan tentang proyek Anda...",
        formSubmit: "Kirim Pesan",
        contactSuccess: "Pesan Terkirim!",
        contactSuccessMsg: "Saya akan menghubungi Anda dalam 24 jam.",

        // WhatsApp Template
        waGreeting: "Halo Indra, saya tertarik untuk berdiskusi lebih lanjut.",
        waName: "Nama",
        waEmail: "Email",
        waProject: "Jenis Proyek",
        waMessage: "Pesan",

        // Footer
        footerCrafted: "Crafted with precision.",
        footerBack: "Back to Top ↑",
    },
    en: {
        // Navbar
        navProjects: "Projects",
        navAbout: "About",
        navProcess: "Process",
        navContact: "Contact",
        navHireMe: "Hire Me",

        // Hero
        heroEyebrow: "Information Technology Education Student at UNESA",
        heroTitle1: "Creating",
        heroTitle2: "Impactful",
        heroTitle3: "Digital Innovations.",
        heroDesc: "I have a strong passion for developing innovative and impactful tech solutions. Dedicated to continuous growth through both academic paths and hackathon competitions.",
        heroCtaProj: "View Projects",
        heroCtaContact: "Contact Me",
        heroBadge: "Ready to Contribute",
        heroStat1: "Years Exp",
        heroStat2: "Semesters",
        heroStat3: "Hackathons",
        heroExplore: "Explore Projects",

        // About
        aboutLabel: "About",
        aboutTitle1: "Code that",
        aboutTitle2: "speaks for itself.",
        aboutP1: `<strong style="color: #f4f2ee; font-weight: 600">Indra Bachtiar Zakaria</strong> — Active Information Technology Education student at <strong style="color: #f4f2ee; font-weight: 600">Universitas Negeri Surabaya (UNESA)</strong>, currently in my 4th semester. With an IT background, I have a profound interest in developing innovative and impactful tech solutions.`,
        aboutP2: `Over the past year, I have actively participated in various <strong style="color: #f4f2ee; font-weight: 600">hackathons</strong>. This experience has sharpened my critical thinking, team collaboration, and ability to quickly design and execute ideas under time pressure.`,
        aboutP3: `These competitions strengthened not only my technical skills but also my <strong style="color: #f4f2ee; font-weight: 600">soft skills</strong> such as problem-solving, communication, and adaptability. I am fully committed to growing continuously and making exceptional contributions to the tech world.`,
        aboutRole: "IT Student",
        aboutAvailable: "Ready to Learn",
        aboutSkills: "Skills & Tools",

        // Process
        processLabel: "Process",
        processTitle1: "From Idea to",
        processTitle2: "Working Solution.",
        processDesc: "Through a structured approach, I transform ideas and challenges (especially in hackathons) into prototypes and applications ready to make an impact.",

        // Projects
        projectsLabel: "Portfolio",
        projectsTitle1: "Real",
        projectsTitle2: "Work.",
        filterAll: "All",
        filterWeb: "Web",
        filterMobile: "Mobile",
        filterDesktop: "Desktop",
        caseStudy: "View Case Study",
        visitApp: "Visit WENWORK App",
        visitGithub: "View GitHub Repository",
        techStack: "Tech Stack",
        payment: "Payment",
        platform: "Platform",

        // Testimonials
        testiLabel: "Testimonials",
        testiTitle1: "No professional",
        testiTitle2: "clients yet.",
        testiDesc: '"Currently, I am focusing on self-development, academic studies, and participating in various hackathons. I am very open to collaboration opportunities or challenging projects in the future!"',

        // Contact
        contactLabel: "Contact",
        contactTitle1: "Got an interesting",
        contactTitle2: "project?",
        contactDesc: "I am always open to new projects and exciting collaborations. Tell me about your idea — I will respond within 24 hours.",
        contactEmail: "Email",
        contactLocation: "Location",
        contactLocationVal: "Kediri, Indonesia",
        contactAvailability: "Availability",
        contactAvailabilityVal: "Open for work",
        formName: "Name",
        formEmail: "Email",
        formProject: "Project Type",
        formSelect: "Select type...",
        formOther: "Other",
        formMessage: "Message",
        formMessagePlaceholder: "Tell me about your project...",
        formSubmit: "Send Message",
        contactSuccess: "Message Sent!",
        contactSuccessMsg: "I will get back to you within 24 hours.",

        // WhatsApp Template
        waGreeting: "Hello Indra, I am interested in discussing further.",
        waName: "Name",
        waEmail: "Email",
        waProject: "Project Type",
        waMessage: "Message",

        // Footer
        footerCrafted: "Crafted with precision.",
        footerBack: "Back to Top ↑",
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("id");

    useEffect(() => {
        const savedLang = localStorage.getItem("lang");
        if (savedLang) setLang(savedLang);
    }, []);

    const toggleLang = () => {
        const newLang = lang === "id" ? "en" : "id";
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    const t = (key) => {
        return translations[lang][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
