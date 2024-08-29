import { BackGroundImg, ImgLogo, Nav } from './styles';
import backgroundHeader from '../../assets/images/background_header.png';
import logo from '../../assets/images/logo.png';
import LinkCart from '../../components/Buttons/LinkCart';
import RestaurantsLink from '../../components/Buttons/RestaurantsLink';

export type Props = {
  headernav: boolean;
};

const Header = ({ headernav }: Props) => {
  return (
    <BackGroundImg
      headernav={headernav}
      style={{ backgroundImage: `url(${backgroundHeader})` }}
    >
      <div className="container">
        {headernav ? (
          <Nav>
            <RestaurantsLink />
            <ImgLogo headernav={headernav} src={logo} alt="Logo" />
            <LinkCart />
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
