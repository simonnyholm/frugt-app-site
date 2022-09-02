import { useEffect, useState, useContext } from "react";
import TokenContext from "../Contexts/TokenContext";
import DeleteOrderItem from "./DeleteOrderItem";

const OrderedProductsMap = ({ productId, amount, orderId, orders, setOrders }) => {
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
            <p>= {item.price * amount} kr.</p>

            <DeleteOrderItem productId={productId} orderId={orderId} orders={orders} setOrders={setOrders} />
          </div>
        );
      })}
    </div>
  );
};

export default OrderedProductsMap;
