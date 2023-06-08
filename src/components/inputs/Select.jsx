import React, { useState, useEffect } from 'react';

const Select = ({
  options,
  action,
  check = () => true,
  labeled = false,
  ...rest
}) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  function handleChange(e) {
    save(e.target.value);
  }

  function save(elm) {
    action(elm);
    setSelectedValue(elm);
  }

  useEffect(() => {
    if (options.length < 1) setSelectedValue('');
  }, [options]);

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      onClick={() => {
        if (labeled) setSelectedValue('');
      }}
      className='form-item bg-whitegrayish md:min-w-[260px] md:text-xl font-bold text-dark-gray'
      {...rest}
    >
      <option value='' disabled>
        selecione uma opção
      </option>
      {options.map((name, i) => {
        if (check(name)) {
          return (
            <option key={i} value={name}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </option>
          );
        }
        return null;
      })}
    </select>
  );
};

export default Select;
