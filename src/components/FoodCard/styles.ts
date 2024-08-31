import styled from 'styled-components';
import { colors } from '../../styles';

export const CardContainer = styled.div`
  width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 40px;
  background-color: ${colors.pink_baby};
  color: ${colors.pink_light};
`;

export const FoodImg = styled.img`
  width: 304px;
  height: 167px;
`;

export const FoodName = styled.h4`
  font-size: 16px;
  font-weight: 900;
`;

export const FoodInfos = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
