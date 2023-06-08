import styled from 'styled-components';
import Background from '../assets/bg_tech.png';

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(270px, 2fr) minmax(280px, 6fr);
  grid-template-areas: 'sidebar content';
  padding: 2rem;
  gap: 2rem;
  min-height: 100vh;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'content';
  }

  @media screen and (max-width: 360px) {
    padding: 0.7rem;
    gap: 0.7rem;
  }
`;

export default Container;
