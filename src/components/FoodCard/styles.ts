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
  letter-spacing: 0.6px;
`;

export const FoodInfos = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;
  background-color: ${colors.pink_baby};
  display: flex;
  padding: 32px;
`;

export const ImgFood = styled.img`
  width: 280px;
  height: 280px;
  margin-right: 24px;
  object-fit: cover;
`;
export const ModalInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${colors.white};

  h4 {
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 0.5px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CloseModal = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
