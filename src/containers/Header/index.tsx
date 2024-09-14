import { BackGroundImg, ImgLogo, Nav } from './styles';
import backgroundHeader from '../../assets/images/background_header.png';
import logo from '../../assets/images/logo.png';
import RestaurantsLink from '../../components/Buttons/RestaurantsLink';
import BtnCart from '../../components/Buttons/BtnCart';

export type Props = {
  headernav: 'active' | 'disable';
};

const Header = ({ headernav = 'disable' }: Props) => {
  return (
    <BackGroundImg
      headernav={headernav}
      style={{ backgroundImage: `url(${backgroundHeader})` }}
    >
      <div className="container">
        {headernav === 'active' ? (
          <Nav>
            <RestaurantsLink />
            <ImgLogo headernav={headernav} src={logo} alt="Logo" />
            <BtnCart />
          </Nav>
        ) : (
          <>
            <ImgLogo headernav={headernav} src={logo} alt="Logo" />
            <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
          </>
        )}
      </div>
    </BackGroundImg>
  );
};

export default Header;
