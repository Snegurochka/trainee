import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { store } from "./services/store";
import { router } from "./services/routes";
import "./services/firebase";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
