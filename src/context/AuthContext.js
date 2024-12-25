import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state
  const [role, setRole] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:9000/api/login', {
        username,
        password,
      });

      console.log('API Response:', response.data); // Debugging response

      // Check if response contains role directly
      if (response.data && response.data.role) {
        const { role } = response.data;
        setRole(role); // Set role directly from response
        setUser({ role }); // You can still set user with just role if that's required for your app
        return true;
      } else {
        console.error('Login failed: Invalid response data');
        return false;
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:9000/api/logout');
      setUser(null);
      setRole(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
          <div className="space-y-4">{children}</div>
        </div>
      </div>
    </AuthContext.Provider>
  );
};


// import React, { createContext, useState } from 'react';
// import axios from 'axios';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // User state
//   const [role, setRole] = useState(null);

//   const login = async (username, password) => {
//     try {
//       const response = await axios.post('http://localhost:9000/api/login', {
//         username,
//         password,
//       });

//       console.log('API Response:', response.data); // Debugging response

//       // Check if response contains role directly
//       if (response.data && response.data.role) {
//         const { role } = response.data;
//         setRole(role); // Set role directly from response
//         setUser({ role }); // You can still set user with just role if that's required for your app
//         return true;
//       } else {
//         console.error('Login failed: Invalid response data');
//         return false;
//       }
//     } catch (error) {
//       console.error('Login failed:', error.response?.data || error.message);
//       return false;
//     }
//   };

//   const logout = async () => {
//     try {
//       await axios.post('http://localhost:9000/api/logout');
//       setUser(null);
//       setRole(null);
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, role, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


