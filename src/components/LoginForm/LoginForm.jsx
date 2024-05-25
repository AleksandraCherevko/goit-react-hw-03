const LoginForm = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return <input type="text" value={value} onChange={handleChange} />;
};

export default LoginForm;
