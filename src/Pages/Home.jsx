import React from 'react';
import { styled } from 'styled-components';

import {
  Hero,
  About,
  Skills,
  HomeProjects,
  Connect,
  Timeline,
} from '../Components';

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <About />
      <Skills />
      <HomeProjects />
      <Connect />
      <Timeline />
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Home;
