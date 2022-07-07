import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Error,
  Form,
  H1,
  Input,
  Label,
  Wrapper,
} from "./Login.styles";
import { RootState } from "../../redux/store";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error2, setError] = useState("");

  const { isFetching, error } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username) return setError("Username required");
    if (!password) return setError("Password required");

    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <H1>SIGN IN</H1>
        {error2 && <Error>{error2 || error}</Error>}
        <Form>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
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
