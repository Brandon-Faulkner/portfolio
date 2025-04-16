import { FaBriefcase, FaGraduationCap, FaTrophy, FaCode } from 'react-icons/fa';

export const achievements = [
    {
        icon: FaGraduationCap,
        date: '2021',
        title: 'AAS in Computer Programming',
        description: 'Graduated with a 4.0 GPA',
        category: 'education'
    },
    {
        icon: FaCode,
        date: '2023',
        title: 'Cana CAM',
        description: 'Developed a web app for a local business',
        category: 'technical'
    },
    {
        icon: FaCode,
        date: '2024',
        title: 'LaunchPad',
        description: 'Developed a web app for a local business',
        category: 'technical'
    },
    {
        icon: FaCode,
        date: '2024',
        title: 'Cana Goals',
        description: 'Developed a web app for a local business',
        category: 'technical'
    },
    {
        icon: FaCode,
        date: '2025',
        title: 'CookieTrack',
        description: 'Developed a full-stack web app',
        category: 'technical'
    },
    {
        icon: FaGraduationCap,
        date: '2025',
        title: 'BS in Computer Science',
        description: 'Graduating with honors',
        category: 'education'
    },
];

export const categories = [
    { id: 'all', label: 'All' },
    //{ id: 'work', label: 'Work' },
    { id: 'education', label: 'Education' },
    //{ id: 'achievement', label: 'Achievements' },
    { id: 'technical', label: 'Technical' }
];