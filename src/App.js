import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import Orders from "./Pages/Orders";
import ProductCatalogue from "./Pages/ProductCatalogue";
import Customerbase from "./Pages/Customerbase";
import Layout from "./Components/Layout";
import { useState } from "react";
import TokenContext from "./Contexts/TokenContext";

function App() {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          {token ? (
            <Route path="/" element={<Layout />}>
              <Route path="/orders" element={<Orders />} />
              <Route path="/productcatalogue" element={<ProductCatalogue />} />
              <Route path="/costumerbase" element={<Customerbase />} />
            </Route>
          ) : (
            <Route index element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}

export default App;
