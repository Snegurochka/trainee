import { RouterProvider } from "react-router-dom";
import { router } from "./services/routes";
import "./services/firebase";
import { useAuth } from "./modules/Auth/services/use-auth-hook";

function App() {
  const { checkAuth } = useAuth();
  checkAuth();

  return <RouterProvider router={router} />;
}

export default App;
