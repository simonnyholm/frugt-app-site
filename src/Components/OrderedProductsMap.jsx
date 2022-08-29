import { useEffect, useState, useContext } from "react";
import TokenContext from "../Contexts/TokenContext";

const OrderedProductsMap = ({ productId, amount }) => {
  const [products, setProducts] = useState([]);

  const { token } = useContext(TokenContext);

  useEffect(function () {
    fetch("http://localhost:3001/products", {
      headers: {
        authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log("orderedProd", products);

  const filtered = products.filter((product) => product.id === productId);

  function itemDeleteHandler() {}

  return (
    <div>
      {filtered.map((item, index) => {
        return (
          <div key={index}>
            <h2>
              {item.name}, {item.type}
            </h2>

            <p>
              {amount} kasse(r) à {item.price} kr.
            </p>
            <p>Sum: {item.price * amount} kr.</p>
            <button onClick={itemDeleteHandler}>Slet</button>
          </div>
        );
      })}
    </div>
  );
};

export default OrderedProductsMap;
