import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useNavigate();

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username) return setError("Username required");
    if (!password) return setError("Password required");

    try {
      await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      history("/");
    } catch (e: any) {
      setError(e.response.data);
    }
  };

  return (
    <Container>
      <Wrapper>
        <H1>SIGN IN</H1>
        {error && <Error>{error}</Error>}
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
          <Button onClick={handleClick}>Login</Button>
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
