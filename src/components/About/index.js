import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faHtml5,
  faJsSquare,
  faMicrosoft,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup function
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['H', 'i', ' ', 'I', '’', 'm', ' ', 'S', 'a','r', 'm', 'i','s', 't', 'h', 'a', 'Nice to meet you.']}
              idx={15}
            />
          </h1>
          <p>
            I am a Software Developer Engineer in Test.
          </p>
          <p align="LEFT">
            I have expertise in automation testing, performance testing, and API validation.
            With strong hands-on experience in Cypress, Java, Cucumber, and JMeter, I build scalable test frameworks and ensure PCI-compliant, 
            high-quality software delivery.
          </p>
          <p>
            My skillset spans across frontend automation, backend validation, and high-concurrency performance testing.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faMicrosoft} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />

      
    </>
  )
}

export default About
