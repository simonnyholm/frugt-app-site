import { useEffect, useState, useContext } from "react";
import OrderedProductsMap from "../Components/OrderedProductsMap";
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

  return (
    <div>
      <h1>Bestillinger</h1>
      <div>
        <ul>
          {orders.map((order) => (
            <>
              <h3>Best.id: {order.id}</h3>
              <div>
                {" "}
                {order.products.map((orderedProducts) => (
                  <>
                    <p>{orderedProducts.amount}</p>

                    <OrderedProductsMap
                      productId={orderedProducts.productId}
                      amount={orderedProducts.amount}
                    />
                  </>
                ))}
              </div>
              <p>Kunde.id: {order.customerId}</p>
            </>
          ))}
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default Orders;
