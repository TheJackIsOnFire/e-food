import { Btn, ContainerBtn } from './styles';

type Props = {
  children: string | number;
  onClick?: () => void;
};

const BtnCardModal = ({ children, onClick }: Props) => {
  return (
    <ContainerBtn>
      <Btn onClick={onClick} type="button">
        {children}
      </Btn>
    </ContainerBtn>
  );
};

export default BtnCardModal;
