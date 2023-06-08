const CloseMenu = ({ toggle, ...rest }) => {
  return (
    <div
      className='h-full z-10 grid place-items-center'
      onClick={() => toggle[1]((state) => !state)}
      {...rest}
    >
      {toggle[0] ? (
        <svg
          width='50'
          height='50'
          viewBox='0 0 81 81'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4 4L40.5 40.5M77 77L40.5 40.5M40.5 40.5L77 4M40.5 40.5L4 77'
            stroke='#747474'
            strokeWidth='8'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ) : (
        <svg
          width='50'
          height='50'
          viewBox='0 0 97 87'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4 4H92.5M4 83H92.5M4 43H92.5'
            stroke='#747474'
            strokeWidth='8'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    </div>
  );
};

export default CloseMenu;
