import { useEffect, useContext } from 'react';
import { PageNameContext } from '../../Layout';
import Form from './MultipageForm';

const ContaRestaurante = () => {
  const { setPageName } = useContext(PageNameContext);
  useEffect(() => {
    setPageName && setPageName('Conta de Restaurante');
  }, []);

  return (
    <div>
      <Form />
    </div>
  );
};

export default ContaRestaurante;
