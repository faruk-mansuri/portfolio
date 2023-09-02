import { styled } from 'styled-components';

const About = () => {
  return (
    <Wrapper className='section'>
      <div className='section-title'>
        <h1>about me</h1>
        <div className='underline'></div>
      </div>

      <p>
        Hello, I am Faruk Mansuri and I am a web developer and App Developer. I
        live and study in pune. I spend most of my day, experimenting with HTML,
        CSS, JavaScript, NodeJS, ReactJS and React Native. I enjoy coding and
        the challenge of learning something new everyday.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  min-height: calc(100vh - 5rem - 171px);

  p {
    width: 90vw;
    max-width: 768px;
    margin: 0 auto;
    letter-spacing: 2px;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export default About;
