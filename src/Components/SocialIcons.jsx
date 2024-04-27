import { styled } from 'styled-components';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SocialIcons = () => {
  return (
    <Wrapper>
      <Link
        to='https://www.linkedin.com/in/faruk-mansuri-5900a1272'
        target='_blank'
      >
        <AiFillLinkedin className='icon' />
      </Link>
      <Link to='https://github.com/faruk-mansuri' target='_blank'>
        <AiFillGithub className='icon' />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1rem;

  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    font-size: 1.75rem;
    color: var(--clr-grey-5);
  }
  .icon:hover {
    color: var(--clr-primary-10);
  }
`;
export default SocialIcons;
