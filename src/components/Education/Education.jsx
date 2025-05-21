import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const educations = [
    {
        degree: "Bachelor of Technology",
        field: "Computer Science and Engineering",
        institution: "BN College of Engineering and Technology Lucknow, Uttar Pradesh",
        year: "2022 - 2026",
        grade: "8.0 SGPA",
        link: "https://www.bncet.com",
    },
    {
        degree: "12th Class",
        field: "Science",
        Board: "Bihar School Examination Board, Patna",
        year: "2019 - 2021",
        grade: "72%",
        link: "https://www.bseb.in",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
    }),
};

const Education = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center py-16 px-4">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-white text-4xl font-bold mb-10 tracking-wider drop-shadow-lg"
            >
                Education
            </motion.h2>
            <div className="w-full max-w-2xl">
                {educations.map((edu, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="bg-white/5 border border-gray-700 rounded-2xl shadow-xl p-8 mb-7 text-white backdrop-blur-md relative overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                            <div>
                                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                                <p className="text-indigo-300 font-medium">{edu.field}</p>
                                <Link
                                    to={edu.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-400 underline hover:text-indigo-200 transition"
                                >
                                    {edu.institution}
                                </Link>
                            </div>
                            <div className="text-right md:text-left mt-2 md:mt-0">
                                <p className="text-sm text-gray-300">{edu.year}</p>
                                <span className="inline-block bg-indigo-600/80 text-white text-xs px-3 py-1 rounded-full mt-1">
                                    {edu.grade}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;