import styled from 'styled-components';

const Container = styled.div`
  aspect-ratio: 1 / 1;
  max-height: 600px;
  max-width: 600px;
  width: 100%;
  //
  padding: 0.4rem;
  gap: 0.4rem;
  .line {
    flex: 1 1;
    gap: 0.4rem;
    .cell {
      flex: 1 1;
      background-color: ${({ theme }) => theme.colors.darkGray};
      box-shadow: inset 0px 0px 11px -1px #000000;
      &.true {
        background-color: ${({ theme }) => theme.colors.yellow};
        box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;

export default Container;
