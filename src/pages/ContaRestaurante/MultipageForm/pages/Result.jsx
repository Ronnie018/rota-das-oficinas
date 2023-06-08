const Result = ({ data, disable }) => {
  let [clients, price_per_person, total] = data;
  return (
    <>
      <div className='absolute bg-dark-gray text-whitegrayish p-4 rounded-lg shadow-lg modal flex flex-col justify-center'>
        {clients.map(({ name, consumed, tip }, i) => {
          const products_total = consumed.reduce((prev, item_name) => {
            return prev + price_per_person[item_name];
          }, 0);
          const total = tip
            ? products_total * 0.1 + products_total
            : products_total;

          return (
            <div className='flex gap-6 items-center' key={name}>
              <div className='text-2xl'>{name}</div> -
              <div className='text-2xl'>{total}</div>
            </div>
          );
        })}
        <div className='total font-extrabold text-center'>{total}</div>
      </div>
      <div className='modal-bg' onClick={() => disable(null)} />
    </>
  );
};

export default Result;
