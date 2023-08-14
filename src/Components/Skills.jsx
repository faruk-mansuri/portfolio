import { styled } from 'styled-components';
import { skills } from '../utils/skills';
import SingleSkill from './SingleSkill';

const Skills = () => {
  return (
    <Wrapper className='section bg-grey'>
      {/* section title */}
      <div className='section-title '>
        <h2>skills</h2>
        <div className='underline'></div>
      </div>

      <div className='section-center section-skill'>
        {skills.map((skill, index) => {
          return <SingleSkill key={index} {...skill} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-skill {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem 1rem;
  }
`;
export default Skills;
