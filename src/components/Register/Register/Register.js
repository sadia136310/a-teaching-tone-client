import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser, userProfileUpdate } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
   

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
              
                handleUpdate(name,photoURL);
                form.reset();
            })
            .catch(error => {

                console.error(error);
                setError(error.message)

            })
    }
    const handleUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userProfileUpdate(profile)
        .then(()=>{

        })
        .catch(error=>{
            console.error(error);
        })
    }

    return (
        <div className="m-5 p-5">
            <h2 className='text-primary text-center mb-4'>Please Register here !!!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter full name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="photoURL" name='photoURL' placeholder="Enter photo url" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>

                <p>Already Have an Account?.Please <Link to='/login'>logIn</Link> </p>
            </Form>
        </div>
    );
};

export default SignUp;