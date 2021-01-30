import styled from 'styled-components';
import { paddingSizes, StyledBtnSizeProp, fontSizes } from './sizes';

export default styled.button`
  background: transparent;
  border-color: rgb(29, 161, 242);
  border-style: solid;
  color: rgb(29, 161, 242);
  cursor: pointer;
  border-radius: 2rem;
  padding: ${(props: StyledBtnSizeProp) => (props.size ? paddingSizes[props.size] : paddingSizes.m)};
  font-size: ${(props: StyledBtnSizeProp) => (props.size ? fontSizes[props.size] : fontSizes.m)};
  font-weight: bold;

  &:hover,:focus {
    outline: none;
    background-color: rgba(21, 161, 242, 0.1);
    box-shadow: rgb(142 208 249) 0px 0px 0px 2px;
  }
`;
