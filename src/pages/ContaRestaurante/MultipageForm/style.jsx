import styled from 'styled-components';

const Container = styled.div`
  form > *:not(select) {
    font-weight: 500;
    font-size: 1.2rem;
  }
  form {
    select {
      min-height: 60px;
    }
  }
`;

export default Container;
