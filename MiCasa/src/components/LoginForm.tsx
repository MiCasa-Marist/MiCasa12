import { FunctionComponent, FormEvent, useState } from "react";
import "./LoginForm.css";

interface ILoginFormProps {
  onLogin: (username: string, password: string) => void;
}

export const LoginForm: FunctionComponent<ILoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <h2>Enter your Marist Account and Password.</h2>
        <label htmlFor="username">Account:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        For security reasons, please Log Out and Exit your web browser when you
        are done accessing services that require authentication!
      </p>

      <a href="">Forgot Password</a>

      <p>
        Copyright © Marist College. All rights reserved. <br />
        Powered by Jasig CAS
      </p>
    </div>
  );
};
