import Banner from '../../containers/Banner';
import Header from '../../containers/Header';

import { PageContainer } from './styles';

const LaDolceVitaTrattoria = () => {
  return (
    <PageContainer>
      <Header headernav={true} />
      <Banner linkPageRestaurant="/la_dolce_vita_trattoria" />
    </PageContainer>
  );
};

export default LaDolceVitaTrattoria;
