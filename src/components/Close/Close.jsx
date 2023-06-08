const Close = ({ action, ...rest }) => {
  return (
    <button
      onClick={action}
      className='w-12 h-12 grid place-items-center'
      onSubmit={(e) => e.preventDefault()}
      {...rest}
    >
      <svg
        width='24'
        height='24'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2 2L15 15M28 28L15 15M15 15L28 2M15 15L2 28'
          stroke='#747474'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};

export default Close;
