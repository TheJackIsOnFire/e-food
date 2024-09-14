import { useSelector, useDispatch } from 'react-redux';
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
import BtnDefault from '../Buttons/Default/index';
import ImgClose from '../../assets/images/close.png';
import { useState } from 'react';
import { RootReducer } from '../../Redux/store';
import { open, add } from '../../Redux/slice/Cart/slice';
import { formatPrice } from '../../containers/FoodList';

type Props = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

const FoodCard = ({ foto, preco, id, nome, descricao, porcao }: Props) => {
  const maxLengthInfos = (lengthInfos: string) => {
    if (lengthInfos.length > 179) {
      return lengthInfos.slice(0, 176) + '...';
    }
    return lengthInfos;
  };

  const [modalIsActive, setModalIsActive] = useState(false);

  const dispatch = useDispatch();

  const addCart = () => {
    const product = { id, nome, descricao, porcao, foto, preco };
    dispatch(add(product));
    dispatch(open());
    setModalIsActive(false);
  };

  const {} = useSelector((state: RootReducer) => state.cart);

  return (
    <>
      <CardContainer>
        <FoodImg src={foto} />
        <FoodName>{nome}</FoodName>
        <FoodInfos>{maxLengthInfos(descricao)}</FoodInfos>
        <BtnDefault onClick={() => setModalIsActive(true)}>
          Mais detalhes
        </BtnDefault>
      </CardContainer>
      <Modal className={modalIsActive ? 'visible' : ''}>
        <ModalContent className="container">
          <ImgFood src={foto} alt="Prato do restaurante" />
          <ModalInfos>
            <h4>{nome}</h4>
            <span>{descricao}</span>
            <span> {porcao}</span>
            <BtnDefault
              onClick={addCart}
            >{`Adicionar ao carrinho - ${formatPrice(preco)}`}</BtnDefault>
          </ModalInfos>
          <CloseModal src={ImgClose} onClick={() => setModalIsActive(false)} />
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsActive(false)}></div>
      </Modal>
    </>
  );
};

export default FoodCard;
