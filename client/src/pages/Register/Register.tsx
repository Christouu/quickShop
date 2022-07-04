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
  Span,
  Wrapper,
} from "./Register.styles";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const history = useNavigate();

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username) return setError("Username required");
    if (!email) return setError("Email required");
    if (!password) return setError("Password required");

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        username,
        password,
        email,
      });

      history("/");
    } catch (e: any) {
      if (e.response.data.message.includes("email")) {
        setError("Invalid Email Address");
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <H1>Register</H1>
        {error && <Error>{error}</Error>}
        <Form>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            name="passwordRepeat"
            placeholder="Confirm Password"
            onChange={(e) => setPasswordRepeat(e.target.value)}
          />
          <Span>
            By creating an account , I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Span>
          <Button onClick={handleClick} disabled={password !== passwordRepeat}>
            Create Account
          </Button>
          <Link
            to="/"
            style={{
              alignSelf: "center",
              margin: "0px 10px",
              textDecoration: "none",
              backgroundColor: "black",
              padding: "12px 10px",
              color: "white",
            }}
          >
            Home
          </Link>
          {password !== passwordRepeat && <Error>Password must match</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
