import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import SocialIcons from './SocialIcons';
import heroImg from '../assets/images/hero-img.svg';
const Hero = () => {
  return (
    <Wrapper>
      <header className='hero'>
        <div className='section-center hero-center'>
          <article className='hero-info'>
            <div className='underline'></div>
            <h1>i'm faruk</h1>
            <h4>
              Typescript, NextJS, React, React Native and full stack developer
            </h4>

            <Link to='contact' className='btn hero-btn'>
              hire me
            </Link>

            <SocialIcons className='hero-icons' />
          </article>

          <article className='hero-img'>
            <img src={heroImg} alt='hero-image' className='hero-photo' />
          </article>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon {
    color: var(--clr-grey-1);
  }
  .icon:hover {
    color: var(--clr-grey-5);
  }
  .underline {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
  .hero-img {
    display: none;
  }
  .hero {
    background: var(--clr-primary-10);
  }
  .hero-center {
    /* height: calc(100vh - 5rem); */
    min-height: calc(100svh - 5rem);
    display: grid;
    place-items: center;
  }
  .hero-info h4 {
    line-height: 1.5rem;
    color: var(--clr-grey-5);
  }
  .hero-btn {
    margin-top: 1.25rem;
  }

  @media (min-width: 992px) {
    .hero-img {
      display: block;
    }
    .hero-center {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
export default Hero;
