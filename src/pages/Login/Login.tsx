import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  H1,
  Input,
  Label,
  Wrapper,
} from "./Login.styles";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <H1>SIGN IN</H1>
        <Form>
          <Label htmlFor="username">Username</Label>
          <Input type="text" name="username" id="username" />
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" />
          <Button>Login</Button>
          <Link
            to="/register"
            style={{
              margin: "5px 0px",
              fontSize: "14px",
              textDecoration: "underline",
              cursor: "pointer",
              color: "teal",
            }}
          >
            Don't have an account? Create one.
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
