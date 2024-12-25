import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login(username, password);
    if (success) {
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500">
      <div className="w-full max-w-md p-8 bg-white bg-opacity-90 rounded-xl shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
          />
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition duration-300"
          >
            Login
          </button>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <span className="text-blue-500 cursor-pointer font-medium hover:text-blue-700 transition duration-300">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;



// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const { login } = useContext(AuthContext);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     const success = await login(username, password);
//     if (success) {
//       navigate('/');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
