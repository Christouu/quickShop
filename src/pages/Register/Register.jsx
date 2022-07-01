import { Link } from "react-router-dom"
import { Button, Container, Form, H1, Input, Span, Wrapper } from "./Register.styles"


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <H1>Register</H1>
            <Form>
                <Input type="text" name="username" placeholder="Username"/>
                <Input type="text"  name="email" placeholder="Email"/>
                <Input type="password"  name="password" placeholder="Password"/>
                <Input type="password" name="passwordRepeat" placeholder="Confirm Password"/>
                <Span>By creating an account , I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Span>
                <Button>Create Account</Button>
                <Link to='/' style={{alignSelf: 'center', margin: '0px 10px', textDecoration: 'none', backgroundColor: 'black', padding: '12px 10px', color: 'white' }}>Home</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register