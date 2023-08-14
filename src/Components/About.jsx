import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/images/about-img.svg';

const About = () => {
  return (
    <Wrapper className='section'>
      <div className='section-center about-center'>
        {/* about-img */}
        <article className='about-img'>
          <img src={aboutImg} alt='about-image' />
        </article>

        {/* about info */}
        <article className='about-info'>
          {/* section title */}
          <div className='section-title about-title'>
            <h2>about</h2>
            <div className='underline'></div>
          </div>
          <p>
            I'm a friendly and dedicated React and full-stack developer with
            over 2.5 years of immersive learning experience. My journey has
            equipped me with advanced JavaScript skills and a deep understanding
            of front-end and back-end technologies. I take pride in creating
            user-centric applications that seamlessly blend innovation and
            functionality
          </p>

          <Link className='btn' to='about'>
            about me
          </Link>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about-title {
    text-align: left;
    margin-bottom: 2rem;
  }
  .underline {
    margin-left: 0;
  }
  .about-center {
    display: grid;
    gap: 3rem 2rem;
  }
  .about-img {
    /* border: 1px solid red; */
    width: 25rem;
    max-height: 30rem;
    margin: 0 auto;
  }
  p {
    text-align: left;
  }
  @media (min-width: 992px) {
    .about-center {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
export default About;
