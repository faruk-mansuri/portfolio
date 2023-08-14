import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import video from '../assets/videos/connect.mp4';

const Connect = () => {
  return (
    <Wrapper>
      <video controls loop autoPlay muted className='video-container'>
        <source src={video} type='video/mp4' />
        sorry, your browser does not support embedded videos
      </video>

      <div className='video-banner'>
        <div className='section-title'>
          <h2>let's get in touch</h2>
          <div className='underline'></div>
        </div>

        <div className='video-text'>
          <p className='video-text'>
            I've honed my skills as a developer by staying connected to the
            ever-evolving tech landscape. My portfolio showcases my journey,
            from understanding the core concepts to implementing cutting-edge
            solutions. With a strong connect to coding and a passion for
            problem-solving, I'm ready to shape the digital world with
            innovation and expertise.
          </p>
          <Link to='contact' className='btn'>
            contact me
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 40vh;
  position: relative;
  padding: 10rem 0 5rem 0;
  margin: 5rem 0;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-primary-5);
    opacity: 0.5;
    z-index: -1;
  }
  display: grid;
  place-items: center;

  .section-title {
    margin-bottom: 2rem;
  }

  .video-text {
    max-width: 30rem;
  }
  .video-banner {
    background: var(--clr-primary-10);
    padding: 3rem 5rem 12rem 5rem;
    text-align: center;

    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      75% 75%,
      75% 100%,
      50% 75%,
      0% 75%
    );
  }
`;
export default Connect;
