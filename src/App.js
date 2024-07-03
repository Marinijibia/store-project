import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

import { appRoutes } from "./routes";
import { Suspense, useRef } from "react";

function App() {
  const categoryRef = useRef(null);
  return (
    <div>
      <Navbar categoryRef={categoryRef} />
      <Suspense fallback={() => <h1>Loading...</h1>}>
        <Routes>
          {appRoutes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              element={<route.component categoryRef={categoryRef} />}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
