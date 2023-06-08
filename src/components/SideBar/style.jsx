import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 9px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 0px 18px 9px rgba(96, 96, 96, 0.2);
  .sb-content {
    ul > li {
      ::before {
        content: '';
        transform: translateY(-3px);
        margin-right: 10px;
        height: 5px;
        width: 5px;
        border-radius: 50%;
        display: inline-block;
        background-color: ${(props) => props.theme.colors.tGray};
      }
      &.active {
        color: ${(props) => props.theme.colors.yellow};
      }
      :hover {
        color: ${(props) => props.theme.colors.yellow};
        ::before {
          background-color: ${(props) => props.theme.colors.yellow};
        }
      }
    }
  }
`;

export default Container;
