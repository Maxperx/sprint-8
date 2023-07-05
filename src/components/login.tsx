import React, { useState } from 'react';

type User = {
  username: string;
  password: string;
};

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      // Usuario valido, guardar información de inicio de sesion en localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      // Redirigir a la página despues del inicio de sesion
      window.location.href = '/starships';
    } else {
      alert('Credenciales invalidas');
    }
  };

  return (
    <div>
      <form>
        <label>
          Usuario:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>Iniciar sesión</button>
      </form>
    </div>
  );
};

