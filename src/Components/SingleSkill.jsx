import { styled } from 'styled-components';
import { BsCodeSlash, BsServer, BsFileCodeFill } from 'react-icons/bs';

const SingleSkill = ({ title, Icon, languages }) => {
  return (
    <Wrapper>
      <span className='service-icon'>
        <Icon />
      </span>
      <h3>{title}</h3>
      <div className='underline'></div>

      <div className='skill'>
        {languages.map((skill, index) => {
          const { Icon, title } = skill;

          return (
            <div key={index} className='info'>
              <span className='service-icon'>{/* <Icon /> */}</span>
              <p className='skill-info'>
                {Icon && <Icon className='skill-icon' />}
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
  box-shadow: var(--light-shadow);

  h3 {
    color: var(--clr-grey-3);
  }
  &:hover {
    box-shadow: var(--dark-shadow);
  }
  .service-icon {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--clr-grey-2);
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
      font-size: 1.5rem;
      color: white;
    }
    .skill-info {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: var(--clr-grey-1);
      margin: 0 2rem;
      margin-top: 1rem;
      border-radius: var(--border-radius);
      padding: 0.5rem;
      background-color: var(--clr-primary-5);
      box-shadow: var(--light-shadow);
      transition: var(--transition);

      &:hover {
        transform: scale(1.02);
        background: var(--clr-primary-7);
        box-shadow: var(--dark-shadow);
        color: var(--clr-white);
      }
    }
  }
`;

export default SingleSkill;
