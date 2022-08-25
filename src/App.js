import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import Login from "./Pages/Login";
import Orders from "./Pages/Orders";
import ProductCatalogue from "./Pages/ProductCatalogue";
import Customerbase from "./Pages/Customerbase";
import Layout from "./Components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/productcatalogue" element={<ProductCatalogue />} />
          <Route path="/costumerbase" element={<Customerbase />} />
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
