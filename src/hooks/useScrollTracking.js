import { useEffect } from 'react';

const useScrollTracking = (setActiveSection) => {
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'skills', 'projects', 'experience', 'education', 'about'];
            const scrollPosition = window.scrollY + 300;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [setActiveSection]);
};

export default useScrollTracking;
