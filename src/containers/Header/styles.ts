import styled from 'styled-components';
import { colors } from '../../styles';
import { Props } from './index';

export const BackGroundImg = styled.div<Props>`
  width: 100%;
  height: ${props => (props.headernav === 'active' ? '186px' : '384px')};
  display: ${props => (props.headernav === 'active' ? 'flex' : 'block')};
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.pink_baby};
  padding: 40px 0;

  h1 {
    display: flex;
    width: 539px;
    height: 84px;
    font-size: 36px;
    font-weight: 900;
    text-align: center;
    margin: 162.5px auto 0 auto;
  }
`;

export const ImgLogo = styled.img<Props>`
  display: flex;
  width: 125px;
  height: 57.5px;
  margin: ${props => (props.headernav === 'active' ? '0' : '0 auto')};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
`;
