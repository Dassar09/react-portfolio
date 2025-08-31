import React, { useRef, useState, useEffect } from 'react'; 
import Portfolio from '../Portfolio'
import './index.scss'
import logo from '../../assets/images/home-logo.png';
import { FaArrowRight } from 'react-icons/fa';
import AnimatedLetters from '../AnimatedLetters'

const projectData = [
  {
    title: 'FINTECH B2B INVOICE MANAGEMENT APPLICATION',
    description: 'The AI-Enabled FinTech B2B Invoice Management Application aims to simplify and streamline the process of managing invoices in a B2B environment. By providing features such as grid display, CRUD operations, pagination, search functionality, and AI-based prediction, the application empowers businesses to effectively manage their invoices and make informed decisions.',
    techStack: 'React JS, Java, Python, MySQL',
    projectLink: '',
    image: 'link_to_image1.jpg',
  },
  {
    title: 'MY RESTAURANT',
    description: 'This is a fullstack project that was prepared during internship period. At the base of the project is a restaurant management system. The backend is made in C#(.NET and Entity Framework) and frontend is made in Angular.',
    techStack: 'Angular, Java',
    projectLink: '',
    image: 'link_to_image2.jpg',
  },
  {
    title: 'Portfolio',
    description: 'Personal Portfolio Website',
    techStack: 'Bootstrap, HTML, CSS, JS',
    projectLink: 'https://satyajeetbehera.netlify.app/',
    image: logo,
  },
  {
    title: 'Freshly Brewed',
    description: 'Educational Website',
    techStack: 'Bootstrap, HTML, CSS, JS',
    projectLink: 'https://satyajeet21.github.io/FReshLY-BREWED/',
    image: logo,
  }

 
];

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const projectsRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup function
    return () => clearTimeout(timeoutId)
  }, [])

  const scrollRight = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollBy({
        left: 300, // Adjust this value for how much you want to scroll
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="projects-page">
    <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
          idx={15}
        />
    </h1>
    <div className="projects-container">
      <div className="projects-list" ref={projectsRef}>
        {projectData.map((project, index) => (
          <Portfolio 
            key={index} 
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            projectLink={project.projectLink}
            image={project.image}
          />
        ))}
      </div>
      <button className="scroll-arrow" onClick={scrollRight}>
        <FaArrowRight />
      </button>
    </div>
  </div>
  );
};

export default Projects;
