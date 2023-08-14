import { styled } from 'styled-components';
import { timelines } from '../utils/timeline';

const Timeline = () => {
  return (
    <Wrapper>
      <div className='section-title'>
        <h2>Timeline</h2>
        <div className='underline'></div>
      </div>

      <div className='section-center timeline-center'>
        {timelines.map((timeline) => {
          const { id, info, year, number } = timeline;
          return (
            <article key={id} className='timeline-item'>
              <h4>{year}</h4>
              <p>{info}</p>
              <span className='number'>{number}</span>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .timeline-center {
    width: 80vw;
    max-width: 40rem;
  }
  .timeline-item {
    border-bottom: 2px dashed var(--clr-primary-5);
    margin: 0;
    padding: 4rem 2rem;
    position: relative;
  }
  .timeline-item:nth-child(even) {
    border-left: 2px dashed var(--clr-primary-5);
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    transform: translateX(-20px);
  }
  .timeline-item:nth-child(odd) {
    border-right: 2px dashed var(--clr-primary-5);
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
  .timeline-item:first-child {
    border-top-right-radius: 0;
  }
  .number {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: var(--clr-primary-1);
    font-weight: bold;
  }

  .timeline-item:nth-child(even) .number {
    left: 0;
    transform: translateX(-15px);
  }
  .timeline-item:nth-child(odd) .number {
    right: 0;
    transform: translate(15px, -15px);
  }
  p {
    margin-bottom: 0;
  }
  margin-bottom: 5rem;
`;
export default Timeline;
