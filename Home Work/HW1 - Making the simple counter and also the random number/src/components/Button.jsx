// eslint-disable-next-line react/prop-types
const Button = ({ btnText, btnOnClickValue }) => {
  return <button onClick={btnOnClickValue}>{btnText}</button>;
};

export default Button;
