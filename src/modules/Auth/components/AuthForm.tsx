import { useState, FormEvent } from "react";

import { Button, Input } from "@mui/material";
import { useLogin } from "../services/use-login-hook";

export const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useLogin();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    logIn(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <p>
        <Input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <Button type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
};
