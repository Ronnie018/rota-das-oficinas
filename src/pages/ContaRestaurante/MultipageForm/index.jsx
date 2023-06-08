import { useState } from 'react';
import Container from './style';
import Select from '../../../components/inputs/Select';
import Number from '../../../components/inputs/Number';
import Button from '../../../components/buttons/Button';
import closeIcon from '../../../assets/close.svg';
import useCart from './useCart';
import Clients from './pages/Clients';
import available from '../../../utils/available';
import Result from './pages/Result';

const sections = ['Products', 'Clients', 'result'];

const Form = () => {
  const [sectionName, setSectionName] = useState(sections[0]);
  const [amount, setAmount] = useState(1);
  const [setProduct, cart, cartItems, availableProducts, remove] = useCart();
  const [finalData, setFinalData] = useState(null);

  let product_name = availableProducts[0];

  function handleSave(e) {
    e.preventDefault();
    if (!product_name) return;
    setProduct(() => [product_name, amount]);
  }

  function handleRemove(name) {
    remove(name);
  }

  function advance() {
    if (cartItems.length < 1) return;
    setSectionName(sections[1]);
  }

  function calculate(clients) {
    const _items = {};
    let total = 0;
    clients.forEach(({ consumed }) => {
      for (let item of consumed) {
        if (!_items[item]) _items[item] = 1;
        else _items[item] += 1;
      }
    });

    for (let [key, divisor] of Object.entries(_items)) {
      let item_total = getTotal(key);
      _items[key] = item_total / divisor;
      total += item_total;
    }
    setFinalData([[...clients], { ..._items }, total]);
  }

  function getTotal(item_name) {
    return available[item_name].price * cart[item_name].amount;
  }

  return (
    <Container className='bg-dark-gray md:px-12 sm:py-8 p-4 gap-4'>
      {finalData && <Result data={finalData} />}
      <h1 className='text-yellow sm:text-5xl text-3xl font-bold'>
        {sectionName}
      </h1>
      {sectionName.toLowerCase() === 'products' ? (
        <>
          <div>
            <form className='form-container' onSubmit={handleSave}>
              <Select
                options={availableProducts}
                action={(opt) => (product_name = opt)}
              />
              <Number
                setNumber={(num) => setAmount(num)}
                limit={9}
                min='1'
                def={amount}
              />
              <Button>adicionar</Button>
            </form>
            <div className='selected flex gap-1 mb-12 flex-wrap'>
              {cartItems.map((name) => {
                const { amount } = cart[name];
                return (
                  <div
                    key={name}
                    className='bg-gray w-max p-4 flex flex-wrap-reverse gap-4 justify-between flex-1 flex-shrink-0'
                  >
                    <div className='flex gap-4 items-center'>
                      <div className='p-2 h-10 w-10 bg-l-gray grid place-items-center font-bold text-dark-gray'>
                        {amount}
                      </div>
                      <div className='font-medium text-whitegrayish text-1xl break-words'>
                        {name}
                      </div>
                    </div>
                    <Button
                      action={() => handleRemove(name)}
                      className='bg-transparent'
                    >
                      <img src={closeIcon} />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='flex justify-center'>
            <Button action={advance}>Save</Button>
          </div>
        </>
      ) : (
        <Clients cartItems={cartItems} calculate={calculate} />
      )}
    </Container>
  );
};

export default Form;
