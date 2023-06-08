import { useContext, useEffect, useState } from 'react';
import { PageNameContext } from '../../Layout';
import Container from './style';

const NumerosRomanos = () => {
  const [result, setResult] = useState('O resultado aparecerá aqui');
  const { setPageName } = useContext(PageNameContext);
  useEffect(() => {
    setPageName('Numeros Romanos');
  }, []);

  function calculate(number) {
    if (number > 50000) return setResult('Número muito grande');

    let new_result = '';

    while (number > 0) {
      if (number >= 1000) {
        number -= 1000;
        new_result += 'M';
      } else if (number >= 500) {
        number -= 500;
        new_result += 'D';
      } else if (number >= 100) {
        number -= 100;
        new_result += 'C';
      } else if (number >= 50) {
        number -= 50;
        new_result += 'L';
      } else if (number >= 10) {
        number -= 10;
        new_result += 'X';
      } else if (number >= 5) {
        number -= 5;
        new_result += 'V';
      } else if (number >= 1) {
        number -= 1;
        new_result += 'I';
      }
    }

    setResult(new_result || 'O resultado aparecerá aqui');
  }

  return (
    <Container className='flex justify-center bg-dark-gray h-full'>
      <form
        className='pt-40'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor='dec-number' className='flex justify-center'>
          <input
            type='number'
            id='dec-number'
            name='dec-number'
            min={0}
            max={500000}
            className='transition-none appearance-none bg-transparent w-64 font-normal text-white text-2xl pb-6'
            placeholder='Digite um número'
            onChange={(e) => calculate(e.currentTarget.value)}
          />
        </label>
        <div className='font-semibold text-xl text-yellow flex justify-center mt-20'>
          {result && <p className='inline-block w-max'>{result}</p>}
        </div>
      </form>
    </Container>
  );
};

export default NumerosRomanos;
