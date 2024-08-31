import styled from 'styled-components';
import { colors } from '../../styles';

export const BannerContainerImg = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  padding: 40px 0;
  color: ${colors.white};

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const FoodType = styled.h3`
  font-size: 32px;
  font-weight: 100;
  width: fit-content;
  height: fit-content;
`;

export const RestaurantName = styled.h2`
  font-size: 32px;
  font-weight: 900;
  width: fit-content;
  height: fit-content;
`;
