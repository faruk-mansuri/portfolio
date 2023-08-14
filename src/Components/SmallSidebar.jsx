import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { FaTimes } from 'react-icons/Fa';
import logo from '../assets/images/logo.svg';
import SocialIcons from './SocialIcons';

const SmallSidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <Wrapper>
      <div className={`sidebar-container ${isSidebarOpen && 'show-sidebar'}`}>
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>

          <header>
            <img src={logo} alt='logo' />
          </header>

          {/* nav links */}
          <div className='sidebar-links'>
            <NavLink className='nav-link' to='/' onClick={toggleSidebar}>
              Home
            </NavLink>
            <NavLink className='nav-link' to='about' onClick={toggleSidebar}>
              About
            </NavLink>
            <NavLink className='nav-link' to='projects' onClick={toggleSidebar}>
              Projects
            </NavLink>
            <NavLink className='nav-link' to='contact' onClick={toggleSidebar}>
              Contact
            </NavLink>
          </div>

          <SocialIcons />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0; //top bottom left right: 0
    background: rgba(0, 0, 0, 0.7);
    display: grid;
    place-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--clr-grey-1);
    width: 95vw;
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 3rem;
    color: var(--red-dark);

    cursor: pointer;
  }
  img {
    margin: 5rem 0;
  }

  .sidebar-links {
    display: grid;
    align-items: center;
    padding: 1rem;
    text-transform: capitalize;
    transition: var(--transition);
  }

  .nav-link {
    margin: 0.375rem auto;
    font-size: 1.75rem;
    color: var(--clr-grey-5);
  }
  .nav-link:hover {
    color: var(--clr-primary-10);
  }

  .active {
    color: var(--clr-primary-5);
  }
`;
export default SmallSidebar;
