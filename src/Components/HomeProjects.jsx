import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { projects } from '../utils/latestProjects';

const HomeProjects = () => {
  return (
    <Wrapper className='section projects'>
      <div className='section-title'>
        <h2>latest works</h2>
        <div className='underline'></div>

        <p className='projects-text'>
          I've built a diverse range of projects. Continuously learning and
          innovating, I've created web applications that showcase my growth and
          passion for development
        </p>
      </div>

      <div className='section-center projects-center'>
        {projects.map((project) => {
          if (!project.featuredProject) return;
          const { id, title, desc, url } = project;
          return (
            <Link key={id} to='projects' className={id}>
              <article className='project'>
                <img src={url} alt='single project' className='project-img' />

                <div className='project-info'>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .projects-text {
    width: 85vw;
    max-width: 30rem;
    margin: 0 auto;
  }
  .project {
    position: relative;
    background: var(--clr-primary-5);
    border-radius: var(--radius);
    margin-bottom: 2rem;
    box-shadow: var(--dark-shadow);
  }
  .project-info {
    text-align: center;
    color: var(--clr-white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: var(--transition);
    opacity: 0;
  }
  .project-info p {
    text-transform: capitalize;
    color: var(--clr-white);
  }
  .project:hover .project-info {
    opacity: 1;
  }
  .project-img {
    border-radius: var(--radius);
    transition: var(--transition);
    height: 15rem;
    object-fit: cover;
  }
  .project:hover .project-img {
    opacity: 0.1;
  }
  .project::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0.25rem solid var(--clr-white);
    border-radius: var(--radius);
    transition: var(--transition);
    /* opacity: 0; */
  }
  .project:hover::after {
    opacity: 1;
    transform: scale(0.8);
  }

  @media (min-width: 676px) {
    .projects-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
  .section-title p {
    margin-top: 1rem;
  }
`;

export default HomeProjects;
