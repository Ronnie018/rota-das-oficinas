import { useState, cloneElement, createContext } from 'react';
import Container from './style';
import SideBar from '../components/SideBar';

export const PageNameContext = createContext(null);

const Layout = ({ children }) => {
  const [pageName, setPageName] = useState('NumerosRomanos');

  return (
    <PageNameContext.Provider value={{ pageName, setPageName }}>
      <Container>
        <SideBar />
        <div className='bg-yellow'>
          <header className='flex h-24 w-full sm:font-bold font-extrabold md:text-5xl sm:text-4xl text-2xl items-center md:pl-20 pl-8 p-4 text-dark-gray border-b-[3px] border-b-dark-gray'>
            <h1>{pageName}</h1>
          </header>
          <div style={{ height: 'calc(100% - 6rem)' }} className='p-4'>
            {children}
          </div>
        </div>
      </Container>
    </PageNameContext.Provider>
  );
};

export default Layout;
