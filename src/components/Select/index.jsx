import { SelectDiv } from "./style";

const Select = ({
  children,
  label,
  register,
  name,
  error = false,
  ...rest
}) => {
  return (
    <SelectDiv isError={!!error}>
      <label htmlFor={label}>{label}</label>
      <select {...register(name)} {...rest}>
        {children}
      </select>
      {!!error && <span>{error}</span>}
    </SelectDiv>
  );
};

export default Select;
