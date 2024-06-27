import "./App.css";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage.pages";
import NotFound from "./pages/NotFoundPage";
import { appRoutes } from "./routes";

function App() {
  return (
    <div>
      <Routes>
        {appRoutes.map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
