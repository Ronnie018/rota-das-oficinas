import { useEffect, useContext } from 'react';
import { PageNameContext } from '../../Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  const { setPageName } = useContext(PageNameContext);
  useEffect(() => {
    setPageName && setPageName('Home');
  }, []);

  return (
    <div>
      <h2>Seja Bem vindo!</h2>
      <Link to='/numeros'>Começar</Link>
    </div>
  );
};

export default Home;
