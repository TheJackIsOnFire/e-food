import { ContainerFooter, ImgLogo, SocialMediaImg } from './styles';
import facebook from '../../assets/images/facebook_logo.png';
import instagram from '../../assets/images/instagram_logo.png';
import twitter from '../../assets/images/twitter_logo.png';
import logoEfood from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <ContainerFooter>
      <div className="container">
        <ImgLogo src={logoEfood} alt="Logo" />
        <SocialMediaImg>
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
        </SocialMediaImg>
        <span>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </span>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
