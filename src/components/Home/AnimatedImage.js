import React, { useEffect, useState } from 'react';
import LogoM from '../../assets/images/myimage.jpg';
import './AnimatedImage.scss';

const AnimatedImage = () => {
  const [animationState, setAnimationState] = useState('initial');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState('frame');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`image-container ${animationState}`}>
      <div className="image-zone">
        <img src={LogoM} className="profile-image" alt="Profile" />
      </div>
    </div>
  );
};

export default AnimatedImage;