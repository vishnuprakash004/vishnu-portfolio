import React from "react";
import todolist from '../assets/todolist.png';  
import portfolio from '../assets/portfolio.png'; 
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title === 'To-Do List App' && (
                <a href="#">
                    <img className="w-full rounded-t-lg h-auto object-cover" src={todolist} alt="To-Do List App" />
                </a>
            )}
            {title === 'React Portfolio' && (
                <a href="https://github.com/vishnuprakash004/vishnu-portfolio">
                    <img className="w-full rounded-t-lg h-auto object-cover" src={portfolio} alt="React Portfolio" />
                </a>
            )}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                        {title}
                    </h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'To-Do List App',
        description: 'A simple yet functional To-Do List application built with Core Java. Users can add, update, and delete tasks, with data persistence using file handling.',
        image: { todolist },
        git: 'https://github.com/yourusername/todo-java-app',
        technologies: ['Java', 'OOPs', 'File Handling']
    },
    {
        title: 'React Portfolio',
        description: 'My personal portfolio website built using React JS and Tailwind CSS. It showcases my skills, projects, and contact information with a modern UI and responsive design.',
        image: { portfolio },
        git: 'https://github.com/yourusername/react-portfolio',
        technologies: ['ReactJS', 'Tailwind CSS', 'Responsive Design']
    }
];

export default Projects;
