import { styled } from 'styled-components';

const SingleSkill = ({ title, icon, languages }) => {
  return (
    <Wrapper>
      <span className='service-icon'>{icon}</span>
      <h3>{title}</h3>
      <div className='underline'></div>

      <div className='skill'>
        {languages.map((skill, index) => {
          const { icon, title } = skill;
          return (
            <div key={index} className='info'>
              <p className='skill-info'>
                <span className='skill-icon'>{icon}</span>
                {title}
              </p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--clr-white);
  color: var(--clr-primary-5);
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: var(--radius);
  text-align: center;
  transition: var(--transition);
  font-weight: bold;

  &:hover {
    background: var(--clr-primary-5);
    color: var(--clr-white);
    .underline {
      background: var(--clr-white);
    }
    .skill .skill-info {
      color: var(--clr-white);
    }
  }
  .service-icon {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .underline {
    width: 3rem;
    height: 0.12rem;
    transition: var(--transition);
    margin-bottom: 1.5rem;
  }

  .info {
    transform: var(--transition);
    letter-spacing: var(--spacing);
    height: 2rem;
    margin: 0 auto;
    font-size: 1rem;

    .skill-icon {
      display: inline-block;
      margin-right: 0.75rem;
    }
    .skill-info {
      color: var(--clr-grey-1);
    }
  }
`;

export default SingleSkill;
