import { useRef, useState } from 'react';
import Plus from '../../../../components/Plus';
import Close from '../../../../components/Close/Close';
import Select from '../../../../components/inputs/Select';
import Button from '../../../../components/buttons/Button';

const Clients = ({ cartItems, calculate }) => {
  const [selectedItems, setSelectedItems] = useState([]); // ['string']
  const [clients, setClients] = useState([]);

  const name_input = useRef(null);
  const pay_tip = useRef(null);

  function select(item_name) {
    setSelectedItems((state) => {
      const _state = [...state];
      _state.push(item_name);
      return _state;
    });
  }
  function handleSave(e) {
    e.preventDefault();
    if (!notFilled()) return;

    const { value: name } = name_input.current;
    const { checked: tip } = pay_tip.current;

    setClients((state) => {
      const _state = [...state];
      _state.push({
        name,
        consumed: [...selectedItems],
        tip: tip,
      });
      return _state;
    });

    setSelectedItems(() => []);
    name_input.current.value = '';
  }

  function notFilled() {
    return name_input.current.value.length > 3;
  }

  function removeClient(client_name) {
    setClients((state) => {
      const _state = state.filter((client) => client.name !== client_name);
      return _state;
    });
  }

  function handleCalculate() {
    if (allHasBeenConsumed()) calculate(clients);
  }

  function allHasBeenConsumed() {
    console.log('need to do it');
    // if i have time ill get it by length (can be + performatic)
    return true;
  }

  return (
    <div>
      <form className='form-container' onSubmit={handleSave}>
        <div className='flex w-full justify-between'>
          <input
            ref={name_input}
            type='text'
            className='bg-transparent text-2xl placeholder:text-whitegrayish text-whitegrayish'
            placeholder='Client name here'
          />
          <div className='text-2xl text-whitegrayish flex gap-2 items-baseline'>
            <input
              type='checkbox'
              name='tip'
              id='tip'
              className='h-5 w-5 rounded-md'
              ref={pay_tip}
            />
            <label htmlFor='tip'>Gorjeta(10%)</label>
          </div>
          {/* <div className='text-2xl min-w-[50px] text-whitegrayish'>{total}</div> */}
        </div>
        <div className='flex w-full justify-between'>
          <div className='items flex flex-wrap gap-2'>
            {selectedItems.map((item_name, i) => {
              return (
                <span
                  key={item_name + i}
                  className='flex gap-4 bg-l-gray w-max text-1xl capitalize px-2 py-1 items-center rounded-xl text-dark-gray font-semibold'
                >
                  {item_name}
                  <Close action={() => {}} type='button' />
                </span>
              );
            })}
            <Select
              action={select}
              options={cartItems}
              check={(item) => !selectedItems.includes(item)}
              labeled={true}
            />
          </div>
          <Plus />
        </div>
      </form>
      <div className='flex flex-wrap mb-8'>
        {clients.map(({ name }) => (
          <div className='form-container form-thin flex gap-3 flex-wrap text-3xl w-max capitalize text-whitegrayish'>
            {name} <Close action={() => removeClient(name)} />
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <Button action={handleCalculate}>Gerar Conta</Button>
      </div>
    </div>
  );
};

export default Clients;
