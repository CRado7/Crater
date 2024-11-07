import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';  // Import the login mutation
import AuthService from '../utils/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Use the login mutation
  const [login, { error }] = useMutation(LOGIN);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Call the login mutation with the email and password
      const { data } = await login({
        variables: { username, password },
      });

      // Get the token from the response and use AuthService to log in
      if (data?.login?.token) {
        AuthService.login(data.login.token);  // Save the token to localStorage
        navigate('/dashboard');  // Redirect to the dashboard
      }
    } catch (err) {
      console.error('Error logging in', err);
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="input"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p>Error logging in</p>}
    </form>
  );
};

export default Login;
