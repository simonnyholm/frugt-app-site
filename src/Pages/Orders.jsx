import { useEffect, useState, useContext } from "react";
import TokenContext from "../Contexts/TokenContext";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { token } = useContext(TokenContext);

  useEffect(function () {
    fetch("http://localhost:3001/orders", {
      headers: {
        authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  console.log("orders", orders);
  console.log("token", token);
  console.log("orderedProducts", orders.products);

  return (
    <div>
      <h1>Bestillinger</h1>
      <div>
        <ul>
          {orders.map((order) => (
            <li>{order.customerId}</li>
          ))}
        </ul>
        <ul>
          {orders.products.map((orderedProducts) => (
            <li>{orderedProducts.amount}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
