import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch()
    }
    return (
        <div className="m-5 p-5" >
            <h2 className='text-primary text-center mb-4'>Please Login !!!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    LogIn
                </Button>

                <p>You have no any Account?. Please <Link to='/register'>Register</Link> </p>
            </Form>

            <br />
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-3'><FaGoogle></FaGoogle> Login with Google</Button>

                    <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Login;