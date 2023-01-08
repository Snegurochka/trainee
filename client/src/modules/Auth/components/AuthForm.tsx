import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../services/hooks/redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../User/services/user-slice";

import { Button, Input } from "@mui/material";

export const AuthForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({ id: user.uid, email: user.email, token: user.refreshToken })
        );
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <form>
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
      <Button type="submit" variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </form>
  );
};
