import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiTailwindcss, SiNextdotjs, SiFirebase } from 'react-icons/si';

export const skills = [
    {
        name: 'Frontend Development',
        tech: [
            { name: 'React', icon: FaReact, color: '#61DAFB' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F0DC55' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        ],
    },
    {
        name: 'Backend Development',
        tech: [
            { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
            { name: 'Express', icon: SiExpress, color: '#272727' },
            { name: 'Firebase', icon: SiFirebase, color: '#FFC000' },
            { name: 'SQL', icon: FaDatabase, color: '#336791' },
        ],
    },
];