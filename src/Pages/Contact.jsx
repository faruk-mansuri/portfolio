import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <Wrapper className='section'>
      <div className='section-title'>
        <h1>Contact</h1>
        <div className='underline'></div>
      </div>
      <p>
        If you are looking to get ahold of me, you can send me an email at
        <a href='mailto:faruqmansuri707@gmail.com'>faruqmansuri707@gmail.com</a>
      </p>

      <p>
        You can also reach me on Linkedin at
        <Link
          to='https://www.linkedin.com/in/faruk-mansuri-5900a1272/'
          // target='_blank'
        >
          @faruk
        </Link>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  /* min-height: calc(100vh - 5rem - 171px); */
  min-height: calc(100svh - 5rem - 171px);

  p {
    width: 90vw;
    max-width: 768px;
    margin: 0 auto;
    letter-spacing: 2px;
    font-size: 1rem;
    font-weight: 500;
  }
  a {
    color: var(--clr-primary-5);
    text-transform: uppercase;
  }
  a:hover {
    color: var(--clr-grey-1);
  }
  p {
    margin-top: 2rem;
  }
`;

export default Contact;
