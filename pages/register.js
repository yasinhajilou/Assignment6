import { Card, Form, Alert, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { registerUser } from '@/lib/authenticate';

export default function Register(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [warning, setWarning] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      await registerUser(userName, password, password2);
      router.push('/login');
    } catch (err) {
      setWarning(err.message);
    }
  }

  return (
    <>
      <Card bg="light">
        <Card.Body><h2>Register</h2>Create an account to save your favorite artworks.</Card.Body>
      </Card>
      <br />
      
      {warning && (
        <>
          <Alert variant="danger">{warning}</Alert>
          <br />
        </>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>User Name:</Form.Label>
          <Form.Control 
            type="text" 
            value={userName} 
            onChange={e => setUserName(e.target.value)} 
            id="userName" 
            name="userName" 
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            id="password" 
            name="password" 
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control 
            type="password" 
            value={password2} 
            onChange={e => setPassword2(e.target.value)} 
            id="password2" 
            name="password2" 
          />
        </Form.Group>
        <br />
        <Button variant="primary" className="pull-right" type="submit">Register</Button>
      </Form>
    </>
  );
}