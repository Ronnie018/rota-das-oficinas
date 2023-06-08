import { useState } from 'react';
import styled from 'styled-components';
import RotasLogo from '../../assets/rotas_logo.png';
import colors from '../../utils/colors.json';
import { Link } from 'react-router-dom';
import Close from '../../components/Close';
import Container from './style';

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState('');
  const tests = [
    {
      name: 'Numeros Romanos',
      path: '/numeros',
    },
    {
      name: 'Jogo da Vida',
      path: '/jogo',
    },
    {
      name: 'Conta de Restaurante',
      path: '/conta',
    },
  ];

  return (
    <>
      <Close toggle={[open, setOpen]} />
      <Container
        className={`bg-dark-gray rounded-lg p-4 relative ${!open && 'hidden'}`}
        theme={{ colors }}
      >
        <img
          src={RotasLogo}
          alt='logo-rotas-das-oficinas'
          className='-translate-y-10 -translate-x-12 absolute'
          width={150}
        />
        <div className='flex flex-col items-center sb-content h-full w-full border-l-t-gray border-l-2 pt-28 gap-12'>
          <h2 className='text-t-gray font-bold text-2xl mx-6'>
            Teste De Programação
          </h2>

          <ul className='flex flex-col text-t-gray font-bold text-lg leading-6 gap-8 w-full ml-20'>
            {tests.map(({ name, path }) => (
              <li key={name} className={`${active === name && 'active'}`}>
                <Link to={path} onClick={() => setActive(name)}>
                  {name}
                </Link>
                <ul
                  className={`${
                    active !== name && 'hidden'
                  } text-white text-base ml-[1px] pl-4 flex flex-col gap-2 pt-2 border-l-t-gray border-l-2`}
                >
                  <li>
                    <Link to={path + '/solucao'}>Solução</Link>
                  </li>
                  <li>
                    <Link to={path + '/resultado'}>Resultado</Link>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default SideBar;
