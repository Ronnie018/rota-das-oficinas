import { useState } from 'react';
import styled from 'styled-components';
import CloseMenu from './CloseMenu';
import colors from '../../../utils/colors.json';
import InputNumber from '../../../components/inputs/Number';
import Play from '../../../components/buttons/Play';
import Forward from '../../../components/buttons/Forward';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.whitegrayish};
  width: 5rem;
  min-height: 5rem;
`;

const Panel = ({ setSize, play, setPlay, forward, setTimer }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <Container theme={{ colors }}>
      <div className='menu h-[5rem] border-b-t-gray border-b-2'>
        <CloseMenu toggle={[menuOpen, setMenuOpen]} />
      </div>
      {menuOpen && (
        <div className='items flex flex-col gap-4 px-2 py-4'>
          <InputNumber setNumber={setSize} />
          <Play
            action={() => {
              setPlay((state) => !state);
            }}
            toggle={play}
          />
          <InputNumber setNumber={setTimer} limit={10000} min={150} />
          <Forward action={forward} />
        </div>
      )}
    </Container>
  );
};

export default Panel;
