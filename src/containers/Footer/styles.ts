import styled from 'styled-components';
import { colors } from '../../styles';

export const ContainerFooter = styled.div`
  width: 100%;
  height: 298px;
  display: block;
  background-color: ${colors.pink_light};
  padding: 40px 0;
  justify-content: center;

  span {
    display: flex;
    margin: 0 auto;
    width: 480px;
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    color: ${colors.pink_baby};
  }
`;

export const ImgLogo = styled.img`
  display: flex;
  margin: 0 auto;
  margin-bottom: 40px;
  width: 125px;
  height: 57.5px;
`;

export const SocialMediaImg = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 60px;
  width: fit-content;

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;
