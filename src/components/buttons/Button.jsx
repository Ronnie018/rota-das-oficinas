const Button = ({ children, action = () => {}, ...rest }) => {
  return (
    <button
      className='form-item bg-yellow font-semibold'
      onClick={action}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
