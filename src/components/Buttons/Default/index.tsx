import { Btn, ContainerBtn } from './styles';

type Props = {
  children: string | number;
  onClick?: () => void;
};

const BtnDefault = ({ children, onClick }: Props) => {
  return (
    <ContainerBtn>
      <Btn onClick={onClick} type="button">
        {children}
      </Btn>
    </ContainerBtn>
  );
};

export default BtnDefault;
