const Close = ({ toggle }) => {
  return (
    <div
      className='absolute top-0 right-0 translate-y-12 -translate-x-16 close block sm:hidden h-6 w-6 z-10'
      onClick={() => toggle[1]((state) => !state)}
    >
      {toggle[0] ? (
        <svg
          width='24'
          height='24'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='ml-[6px]'
        >
          <path
            d='M2 2L15 15M28 28L15 15M15 15L28 2M15 15L2 28'
            stroke='#747474'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ) : (
        <svg
          width='36'
          height='20'
          viewBox='0 0 44 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2 2L22 23L42 2'
            stroke='#747474'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    </div>
  );
};

export default Close;
