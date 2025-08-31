import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedImage from './AnimatedImage';
import './index.scss';
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showNav, setShowNav] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [jobTitle, setJobTitle] = useState('Web');
  const [jobTitleClass, setJobTitleClass] = useState('');

  const nameArray = ['f', 'r', 'e'];
  const nameDArray = ['H', 'l', 'y', ' ', 'B', 'r', 'e', 'w', 'e', 'd', '!']
  const jobArray = ['t', 'e', 'c', 'h', ' ', 'b', 'l', 'o', 'g', 's', '.'];
  const greetingArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o'];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowGreeting(true);
    }, 1000); 
  
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const jobTitles = ['Explore', 'Learn'];
    let currentIndex = 0;
  
    const intervalId = setInterval(() => {
      setJobTitleClass('fade-out');
      
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % jobTitles.length;
        setJobTitle(jobTitles[currentIndex]);
        setJobTitleClass('fade-in');
      }, 500);
    }, 2500);
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="glass-effect glass-1"></div>
        <div className="glass-effect glass-2"></div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            {showGreeting && (
              <AnimatedLetters
                letterClass={letterClass}
                strArray={greetingArray}
                idx={13}
              />
            )}
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <img style={{marginLeft:"20px"}}src={LogoTitle} alt="SARMISTHA" />
            <AnimatedLetters letterClass={letterClass} strArray={nameDArray} idx={16} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={18} />
          </h1>
          <h2>
            <span className={`job-title ${jobTitleClass}`}>{jobTitle}</span>
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Link 
          className="logo"
          to="https://www.linkedin.com/in/sarmistha-dash-bb5ab31b4/"
          target='blank'
          onClick={() => setShowNav(false)}>
          <img className="sub-logo" src={LogoSubtitle} alt="sarmistha" />
        </Link>
        <AnimatedImage />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;