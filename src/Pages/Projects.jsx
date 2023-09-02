import { styled } from 'styled-components';
import { AiFillHome, AiFillGithub } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projects } from '../utils/latestProjects';

const Projects = () => {
  return (
    <Wrapper>
      <header className='project-hero'>
        <div className='section-title'>
          <h1>My Projects</h1>
          <div className='underline'></div>
        </div>
      </header>

      <div className='section'>
        <div className='section-center projects-center'>
          {projects.map((project) => {
            const {
              id,
              title,
              desc,
              url: img,
              info,
              sourceCode,
              liveProject,
            } = project;

            return (
              <article key={id} className='single-project'>
                <div className='project-container'>
                  <Link>
                    <img src={img} alt='img' />
                  </Link>
                  <Link
                    to={liveProject}
                    target='_blank'
                    className='project-icon'
                  >
                    <AiFillHome />
                  </Link>
                </div>
                <div className='project-details'>
                  <h4>{title}</h4>
                  <p>{info}</p>
                  <div className='project-footer'>
                    <div className='footer-item'>
                      <Link
                        to={sourceCode}
                        target='_blank'
                        className='footer-text'
                      >
                        <FaReact />
                      </Link>
                    </div>
                    <div className='footer-item'>
                      <Link
                        to={sourceCode}
                        target='_blank'
                        className='footer-text'
                      >
                        <AiFillGithub />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h1 {
    margin-top: 0;
  }
  .project-hero {
    height: 40vh;
    background: var(--clr-primary-10);
    display: grid;
    place-items: center;
  }
  .section-title {
    margin-bottom: 0;
  }

  .single-project {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
  }
  .project-container img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }
  .project-container {
    position: relative;
  }
  .project-icon {
    position: absolute;
    font-size: 1.75rem;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    background: var(--clr-primary-5);
    border-radius: 50%;
    color: var(--clr-primary-1);
    border: 0.375rem solid var(--clr-grey-10);
  }
  .project-details {
    padding: 2rem 1.5rem;
  }

  .project-footer {
    display: flex;
    gap: 1rem;
  }
  .footer-item {
    font-size: 1.75rem;
  }
  .project-footer a {
    color: var(--clr-primary-5);
    text-transform: capitalize;
    transition: var(--transition);
    justify-self: end;
  }
  .project-footer a:hover {
    color: var(--clr-primary-1);
  }
  .projects-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 2rem;
  }
  img {
    height: 15rem;
    object-fit: cover;
  }
`;
export default Projects;
