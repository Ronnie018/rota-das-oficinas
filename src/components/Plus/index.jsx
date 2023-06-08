import React from 'react';

const index = ({ action = () => {} }) => {
  return (
    <button
      onClick={action}
      className='grid place-items-center h-10 w-10 bg-whitegrayish rounded-md'
    >
      <svg
        width='24'
        height='24'
        viewBox='0 0 51 51'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4 25.7056H25.7058M47.4116 25.7056H25.7058M25.7058 25.7056V3.99976M25.7058 25.7056V47.4114'
          stroke='#747474'
          strokeWidth='7'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};

export default index;
