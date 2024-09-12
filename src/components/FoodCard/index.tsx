import { useState } from 'react';
import {
  CardContainer,
  ModalContent,
  FoodImg,
  FoodInfos,
  FoodName,
  ImgFood,
  Modal,
  ModalInfos,
  CloseModal,
} from './styles';
import BtnCardModal from '../Buttons/FoodCardModal';
import ImgClose from '../../assets/images/close.png';

type Props = {
  foodImg: string;
  foodName: string;
  foodInfos: string;
  foodPortion: string;
  foodPrice: string;
};

const FoodCard = ({
  foodImg,
  foodName,
  foodInfos,
  foodPortion,
  foodPrice,
}: Props) => {
  const maxLengthInfos = (lengthInfos: string) => {
    if (lengthInfos.length > 179) {
      return lengthInfos.slice(0, 176) + '...';
    }
    return lengthInfos;
  };

  const [modalIsActive, setModalIsActive] = useState(false);

  return (
    <>
      <CardContainer>
        <FoodImg src={foodImg} />
        <FoodName>{foodName}</FoodName>
        <FoodInfos>{maxLengthInfos(foodInfos)}</FoodInfos>
        <BtnCardModal onClick={() => setModalIsActive(true)}>
          Mais detalhes
        </BtnCardModal>
      </CardContainer>
      <Modal className={modalIsActive ? 'visible' : ''}>
        <ModalContent className="container">
          <ImgFood src={foodImg} alt="Prato do restaurante" />
          <ModalInfos>
            <h4>{foodName}</h4>
            <span>{foodInfos}</span>
            <span> {foodPortion}</span>
            <BtnCardModal>{`Adicionar ao carrinho - ${foodPrice}`}</BtnCardModal>
          </ModalInfos>
          <CloseModal src={ImgClose} onClick={() => setModalIsActive(false)} />
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsActive(false)}></div>
      </Modal>
    </>
  );
};

export default FoodCard;
