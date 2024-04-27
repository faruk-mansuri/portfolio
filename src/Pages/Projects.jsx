import { styled } from 'styled-components';
import { AiFillHome, AiFillGithub } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projects as projectList } from '../utils/latestProjects';
import { PROJECT_TYPES, PROJECT_TYPES_VARIABLES } from '../utils/constant';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [type, setType] = useState(PROJECT_TYPES_VARIABLES.ALL);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(() => {
      if (type === 'ALL') return projectList;
      return projectList.filter((project) => project.type === type);
    });
  }, [type]);

  return (
    <Wrapper>
      <header className='project-hero '>
        <div className='section-title'>
          <h1>My Projects</h1>
          <div className='underline'></div>
        </div>
      </header>
      <div className='btn-container'>
        {PROJECT_TYPES.map((projectType) => {
          return (
            <button
              key={projectType.name}
              className={`project-btn ${
                projectType.type === type
                  ? 'project-btn-active'
                  : 'project-btn-inactive'
              }`}
              onClick={() => setType(projectType.type)}
            >
              {projectType.type}
            </button>
          );
        })}
      </div>

      <section className='section'>
        <div className='small-header section-center'>
          <p>{type}</p>
          <div className='underline'></div>
          <p>{projects.length}</p>
        </div>
        <div className='section-center projects-center'>
          {projects.map((project) => {
            const {
              id,
              title,
              url: img,
              info,
              sourceCode,
              liveProject,
            } = project;

            return (
              <article key={id} className='single-project'>
                <div className='project-container'>
                  <img src={img} alt='img' />

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
                        to={liveProject}
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
      </section>
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
  .btn-container {
    padding: 2rem;
    margin-top: 2rem;
    background: var(--clr-grey-10);
    display: flex;
    flex-direction: column;
    gap: 0.375rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }
  .project-btn {
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    transition: var(--transition);
    letter-spacing: 2px;
    border: none;
    font-weight: 600;
  }
  .project-btn:hover {
    background-color: var(--clr-primary-5);
  }
  .project-btn-active {
    background-color: var(--clr-primary-5);
  }
  .project-btn-inactive {
    background-color: var(--clr-primary-7);
  }
  .small-header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.375rem;
    margin-bottom: 2rem;
    .underline {
      margin: 0;
      width: 100%;
    }
    p {
      margin: 0;
    }
  }
`;
export default Projects;
