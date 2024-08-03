import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { SignUp, Login, HomePage, Todo } from './components';


const App = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(JSON.parse(storedToken));
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Login setToken={setToken} />} />
        {token ? <Route path='/homepage' element={<HomePage />} /> : null}
        {token ? <Route path='/todo' element={<Todo />} /> : null}
      </Routes>
    </div>
  );
};

export default App;
