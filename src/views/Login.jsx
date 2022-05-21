import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/auth-context';

export default function Login() {
  // Hooks
  const [form, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const navigate = useNavigate();

  const { email, password } = form;

  // Handlers
  const formHandler = (field, value) => {
    setFormData({ ...form, [field]: value });
  };
  const toggleCheckbox = () => setShowPassword((value) => !value);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password,
      });

      const { encodedToken, foundUser } = response.data;
      login({ token: encodedToken, user: foundUser });

      navigate('/videos', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="grid place-items-center py-8">
      <section className="auth-section">
        {/* Logo */}
        <div className="text-center mb-4">
          <Link to="/">
            <h1 className="heading-1">Breadboard</h1>
          </Link>
        </div>

        {/* Login Form */}
        <div className="card outlined-card">
          <div className="card-content">
            <h3 className="heading-3">Login</h3>

            <form className="flex flex-col my-4">
              <input
                type="email"
                className="input mb-4"
                placeholder="Email"
                value={email}
                onChange={(e) => formHandler('email', e.target.value)}
              />

              <input
                type={showPassword ? 'text' : 'password'}
                className="input mb-2"
                placeholder="Password"
                value={password}
                onChange={(e) => formHandler('password', e.target.value)}
              />

              <div className="mb-4">
                <input
                  className="input mr-2"
                  type="checkbox"
                  name="show-password"
                  id="show-password"
                  value={showPassword}
                  onChange={toggleCheckbox}
                />
                <label htmlFor="show-password">Show Password</label>
              </div>

              <button className="btn btn-gray" onClick={loginHandler}>
                Login
              </button>

              <Link to="/register" className="text-center">
                <button className="btn link text-sm text-center">
                  Create an account <strong>&gt;</strong>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
