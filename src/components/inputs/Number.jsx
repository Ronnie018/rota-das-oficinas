import { useRef } from 'react';
import styled from 'styled-components';

const StInput = styled.input`
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const InputNumber = ({ setNumber, limit = 30, min = 1, def }) => {
  const self = useRef(null);

  function handleChange() {
    let { value } = self.current;
    if (value < min || value > limit) return;
    setNumber(self.current.value);
  }

  return (
    <StInput
      type='number'
      ref={self}
      onChange={handleChange}
      max={limit}
      min={min}
      defaultValue={def || min}
      className='form-item bg-yellow text-center text-dark-gray'
    />
  );
};

export default InputNumber;
