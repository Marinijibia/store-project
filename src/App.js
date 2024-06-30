import "./App.css";
import { Route, Routes } from "react-router-dom";

import { appRoutes } from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <Suspense fallback={() => <h1>Loading...</h1>}>
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
      </Suspense>
    </div>
  );
}

export default App;
