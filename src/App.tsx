import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./services/routes";
import "./services/firebase";
import { useAuth } from "./modules/Auth/services/use-auth-hook";

function App() {
  const { checkAuth } = useAuth();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return <RouterProvider router={router} />;
}

export default App;
