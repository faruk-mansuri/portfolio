import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = ({ toggleSidebar }) => {
  const [size, setSize] = useState(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSize(window.pageYOffset);
    });
  }, []);

  return (
    <Wrapper>
      <div className={`${size > 80 ? 'container navbar-fixed' : 'container'}`}>
        <div className='nav'>
          <div className={`nav-center`}>
            {/* nav header */}
            <div className='nav-header'>
              <img className='nav-logo' src={logo} alt='logo' />
              <button className='nav-btn' onClick={toggleSidebar}>
                <FaBars className='toggle-btn' />
              </button>
            </div>

            {/* nav links */}
            <div className='nav-links'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='about'>About</NavLink>
              <NavLink to='contact'>Contact</NavLink>
              <NavLink to='projects'>Projects</NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .nav-links {
    display: none;
  }

  .container {
    height: 5rem;
    padding: 1rem;
    display: grid;
    align-items: center;
    transition: var(--transition);
  }

  .nav-center {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .nav-btn {
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    font-size: 2rem;
    cursor: pointer;
    justify-self: end;
  }

  @media (min-width: 768px) {
    background: var(--clr-primary-10);
    .nav-btn {
      display: none;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
    }
    .nav-links {
      display: block;
      display: flex;
      gap: 2rem;
      place-items: center;
      text-transform: capitalize;
      color: var(--clr-grey-1);
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
    }
    .nav-links a:hover {
      color: var(--clr-primary-5);
    }
  }

  /* fixed navbar */
  .navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--clr-white);
    box-shadow: var(--light-shadow);
    z-index: 2;
  }
`;

export default Navbar;
