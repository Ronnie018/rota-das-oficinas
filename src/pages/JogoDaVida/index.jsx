import { useEffect, useContext } from 'react';
import { PageNameContext } from '../../Layout';
import Table from './Table';

const JogoDaVida = () => {
  const { setPageName } = useContext(PageNameContext);
  useEffect(() => {
    setPageName && setPageName('Jogo da Vida');
  }, []);
  return (
    <div className='flex items-center justify-center outline-2 h-full bg-gray relative'>
      <Table />
    </div>
  );
};

export default JogoDaVida;
