import React from 'react';
// import '../App.css';
import { Button } from './UI/Button';
import '../styles/Banner.css';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function Banner() {
  const { signin } = useAuth();
  const history = useHistory();
  const handleSignIn = async () => {
    await signin();
    history.push('/dashboard');
  };
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleSignIn}
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={handleSignIn}
        >
          ENROLL NOW <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Banner;