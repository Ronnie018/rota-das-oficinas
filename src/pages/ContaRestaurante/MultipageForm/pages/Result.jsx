const Result = ({ data }) => {
  // let [clients, price_per_person, total] = data;
  return (
    <div className='absoulte top-0 left-0 bg-dark-gray text-whitegrayish'>
      {/* {clients.map(({ name, consumed, tip }) => {
        const products_total = consumed.reduce((prev, item_name) => {
          return prev + price_per_person[item_name];
        }, 0);
        const total = tip
          ? products_total * 0.1 + products_total
          : products_total;

        return (
          <div>
            <div>{name}</div>
            <div>{total}</div>
          </div>
        );
      })}
      <div className='total'>{total}</div> */}
    </div>
  );
};

export default Result;
