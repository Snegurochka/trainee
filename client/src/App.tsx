import { Provider } from "react-redux";
import { store } from "./services/store";
import { Grid } from "@mui/material";
import { Menu } from "./modules/Menu/components/Menu";
import { Quiz } from "./modules/Quiz/components/Quiz";

function App() {
  return (
    <Provider store={store}>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={3} ml={4}>
          <Menu />
        </Grid>
        <Quiz />
      </Grid>
    </Provider>
  );
}

export default App;
