import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { store } from "./services/store";
import { router } from "./services/routes";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
