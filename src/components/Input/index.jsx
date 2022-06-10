import { InputDiv } from "./style";

const Input = ({ label, register, name, error = false, ...rest }) => {
  return (
    <InputDiv isError={!!error}>
      <label htmlFor={label}>{label}</label>
      <input {...register(name)} {...rest} />
      {!!error && <span>{error}</span>}
    </InputDiv>
  );
};

export default Input;
