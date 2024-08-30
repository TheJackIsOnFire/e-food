import styled from 'styled-components';
import { colors } from '../../styles';

export const ContainerCard = styled.div`
  border: none;
  width: 472px;
  height: 398px;
  position: relative;
  margin-bottom: 40px;
`;

export const ImgCard = styled.div`
  width: 100%;
  height: 217px;
`;

export const ImgFood = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfosCard = styled.div`
  width: 100%;
  height: 181px;
  display: block;
  color: ${colors.pink_baby};
  border: solid 1px ${colors.pink_baby};
  border-top: none;
  padding: 8px;
`;

export const InfosTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const TitleCard = styled.h4`
  font-size: 18px;
  font-weight: 700;
`;

export const StarsCard = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 21px;
    height: 21px;
    margin-left: 8px;
  }
`;

export const CurrentStarts = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const Description = styled.span`
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: 400px;
  margin-bottom: 16px;
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
