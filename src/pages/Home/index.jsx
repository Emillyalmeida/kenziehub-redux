import { useHistory } from "react-router-dom";
import Buttons from "../../components/Buttons";
import Container from "../../components/Container";
import { Box } from "./style";

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <Box>
        <h1>Kenzie Hub</h1>
        <div>
          <Buttons onClick={() => history.push("/register")}>
            Cadastre-se
          </Buttons>
          <Buttons whiteTheme onClick={() => history.push("/login")}>
            Login
          </Buttons>
        </div>
      </Box>
    </Container>
  );
};

export default Home;
