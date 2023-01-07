import { Button, Input } from "@mui/material";

export const AuthForm = () => {
  return (
    <form>
      <h1>Login</h1>
      <p>
        <Input type="text" placeholder="email" />
      </p>
      <p>
        <Input type="password" placeholder="password" />
      </p>
      <Button type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
};
