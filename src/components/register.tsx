import { useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  username: string;
  password: string;
};

export const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    const existingUser = users.find((u) => u.username === username);

    if (existingUser) {
      alert('El usuario ya existe');
    } else {
      const newUser: User = { username, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registrado');
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
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
        <button type="button" onClick={handleRegister}>Registrarse</button>
      </form>
    </div>
  );
};