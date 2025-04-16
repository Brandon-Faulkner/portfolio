import { FaReact, FaNodeJs, FaDatabase, FaJava, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import {
    SiJavascript, SiExpress, SiTailwindcss, SiNextdotjs, SiFirebase, SiC, SiCplusplus, SiGooglecloud,
    SiIntellijidea, SiEclipseide, SiApachenetbeanside, SiAndroidstudio
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import { MdApi } from "react-icons/md";

export const skills = [
    {
        name: 'Frontend Technologies',
        tech: [
            { name: 'React', icon: FaReact, color: '#61DAFB' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
            { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        ],
    },
    {
        name: 'Backend Technologies',
        tech: [
            { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
            { name: 'Express.js', icon: SiExpress, color: '#272727' },
            { name: 'SQL', icon: FaDatabase, color: '#336791' },
            { name: 'Firebase', icon: SiFirebase, color: '#FFC000' },
            { name: 'RESTful APIs', icon: MdApi, color: '#4A4A4A' },
        ],
    },
    {
        name: 'Programming Languages',
        tech: [
            { name: 'Java', icon: FaJava, color: '#007396' },
            { name: 'Python', icon: FaPython, color: '#3776AB' },
            { name: 'C', icon: SiC, color: '#A8B9CC' },
            { name: 'C++', icon: SiCplusplus, color: '#00599C' },
            { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F0DC55' },
        ],
    },
    {
        name: 'Tools & Platforms',
        tech: [
            { name: 'Git', icon: FaGitAlt, color: '#F05032' },
            { name: 'GitHub', icon: FaGithub, color: '#181717' },
            { name: 'Google Cloud Platform', icon: SiGooglecloud, color: '#4285F4' },
            { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
            { name: 'Visual Studio', icon: VscVscode, color: '#5C2D91' },
            { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: '#000000' },
            { name: 'Eclipse', icon: SiEclipseide, color: '#2C2255' },
            { name: 'NetBeans', icon: SiApachenetbeanside, color: '#1B6AC6' },
            { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
            { name: 'SQL Server Mgmt Studio', icon: FaDatabase, color: '#CC2927' },
        ],
    },
];
