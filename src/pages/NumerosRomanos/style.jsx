import styled from 'styled-components';

const Container = styled.div`
  input {
    border: none;
    border-bottom: 3px solid black;
    text-align: center;
    color: white;
    :focus {
      box-shadow: none;
      border-color: black;
    }
    ::placeholder {
      color: white;
    }
  }
`;

export default Container;
