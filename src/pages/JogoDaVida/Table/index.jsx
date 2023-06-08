import { useState } from 'react';
import coordinate from '../../../utils/getCoordinates';
import Container from './style';
import useLifeTable from './useLifeTable';
import colors from '../../../utils/colors.json';
import Panel from '../Panel';

const table = () => {
  const [play, setPlay] = useState(false);
  const [size, setSize] = useState(16);
  const [table, setActives, next, setTimer] = useLifeTable(play, size);
  const [pointerDown, setPointerDown] = useState(false);

  function handleActivation(cell, coord) {
    if (cell) setActives((state) => state.filter((cell) => cell !== coord));
    else setActives((state) => [...state, coord]);
  }

  return (
    <Container
      className='bg-l-gray flex flex-col justify-between'
      theme={{ colors }}
      onMouseDown={() => setPointerDown(() => true)}
      onMouseUp={() => setPointerDown(() => false)}
      onMouseLeave={() => setPointerDown(() => false)}
    >
      <Panel setSize={setSize} play={play} setPlay={setPlay} forward={next} setTimer={setTimer} />
      {table.map((line, line_index) => (
        <div className='line flex justify-between' key={line_index}>
          {line.map((cell, column_index) => (
            <div
              className={`cell ${cell}`}
              key={line_index + column_index}
              onClick={() =>
                handleActivation(cell, coordinate(line_index, column_index))
              }
              onPointerOver={() => {
                if (!pointerDown) return;
                handleActivation(cell, coordinate(line_index, column_index));
              }}
            />
          ))}
        </div>
      ))}
    </Container>
  );
};

export default table;
