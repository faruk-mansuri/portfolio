import { styled } from 'styled-components';
import { SocialIcons } from '../Components';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <SocialIcons className='social-icons' />
      <p>&copy; {year} faruk mansuri. all rights reserved</p>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  padding: 2rem;
  background: #222;
  display: grid;
  place-items: center;
  /* margin-top: 5rem; */

  .icon {
    color: var(--clr-primary-5);
    margin-top: -2rem;
    gap: 1rem;
  }
  .icon:hover {
    color: var(--clr-primary-10);
  }
  p {
    margin-top: 1rem;
  }
  p:hover {
    color: var(--clr-grey-10);
  }
`;
export default Footer;
