import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiFlutter, SiExpress, SiMongodb, SiFirebase, SiTypescript, SiDart, SiRazorpay } from 'react-icons/si';
import { MdApi } from 'react-icons/md';

const skills = [
    {
        category: 'Programming Languages',
        items: [
            { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
            { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
            { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
            { name: 'Dart', icon: <SiDart className="text-blue-400" /> },
        ],
    },
    {
        category: 'Front-end Technologies',
        items: [
            { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
            { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
            { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
            { name: 'Flutter', icon: <SiFlutter className="text-blue-400" /> },
        ],
    },
    {
        category: 'Back-end & Databases',
        items: [
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
            { name: 'RESTful APIs', icon: <MdApi className="text-indigo-400" /> },
            { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
            { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
            { name: 'SQL', icon: <FaDatabase className="text-blue-300" /> },
        ],
    },
    {
        category: 'DevOps & Tools',
        items: [
            { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
            { name: 'GitHub', icon: <FaGithub className="text-white" /> },
            { name: 'Razorpay', icon: <SiRazorpay className="text-blue-500" /> },
        ],
    },
];

const Skills = () => {
    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col justify-center items-center py-0">
            <div className="w-full max-w-7xl px-4 py-16">
                <h2 className="text-5xl font-bold text-center text-white mb-16 tracking-tight">
                    Skills
                </h2>
                <div className="flex flex-col gap-16">
                    {skills.map((skill) => (
                        <div key={skill.category} className="w-full">
                            <h3 className="text-3xl font-semibold text-blue-400 mb-8 text-center">
                                {skill.category}
                            </h3>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                                {skill.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex flex-col items-center bg-gray-800 rounded-xl shadow-lg p-6 w-full hover:scale-105 transition-transform duration-300"
                                    >
                                        <span className="mb-3 text-4xl">{item.icon}</span>
                                        <span className="text-gray-200 text-lg font-medium">{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
