import styled from 'styled-components';
import { colors } from '../../styles';
import dump from '../../assets/images/dump.png';
import { ContainerBtn } from '../../components/Buttons/Default/styles';

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const SideBar = styled.aside`
  z-index: 1;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.pink_baby};
  padding: 32px 8px;

  ${ContainerBtn} {
    width: 100%;
  }
`;

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.pink_light};
  padding: 16px 8px;
  position: relative;
  color: ${colors.pink_baby};
  margin-bottom: 24px;

  img {
    width: 80px;
    height: 80px;
    margin-right: 16px;
    object-fit: cover;
  }

  h5 {
    font-size: 18px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }
`;

export const Dump = styled.button`
  background-image: url(${dump});
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: 16px;
  right: 8px;
  cursor: pointer;
`;

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;

  span {
    color: ${colors.pink_light};
    font-size: 14px;
    font-weight: 700;
  }
`;
