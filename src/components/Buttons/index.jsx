import { Buttom } from "./style";

const Buttons = ({ children, whiteTheme, ...rest }) => {
  return (
    <Buttom whiteTheme={whiteTheme} {...rest}>
      {children}
    </Buttom>
  );
};

export default Buttons;
