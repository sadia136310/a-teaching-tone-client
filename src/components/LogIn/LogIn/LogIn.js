import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');

    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/course";


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
                toast.success('Successfully Login!')
            })
            .catch(error => {

                console.error(error);
                setError(error.message)

            })

    }

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                toast.success('Successfully Login!')
            })
            .catch(error => console.error(error))
    }

    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                toast.success('Successfully Login!')
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="m-5 p-5" >
            <h2 className='text-primary text-center mb-4'>Please Login !!!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    LogIn
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <p>You have no any Account?. Please <Link to='/register'>Register</Link> </p>
            </Form>

            <br />
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-3'><FaGoogle></FaGoogle> Login with Google</Button>

                    <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Login;