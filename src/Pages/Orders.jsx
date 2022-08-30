import { useEffect, useState, useContext } from "react";
import DeleteOrder from "../Components/DeleteOrder";
import OrderedProductsMap from "../Components/OrderedProductsMap";
import OrderingCustomerMap from "../Components/OrderingCustomerMap";
import OrderTotal from "../Components/OrderTotal";
import PrintOrder from "../Components/PrintOrder";
import TokenContext from "../Contexts/TokenContext";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { token } = useContext(TokenContext);

  const total = "999,99";

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

      {orders.map((order, index) => (
        <section>
          <h3>Best.id: {order.id}</h3>
          <>
            {order.products.map((orderedProducts) => (
              <>
                <OrderedProductsMap
                  productId={orderedProducts.productId}
                  amount={orderedProducts.amount}
                  orderId={order.id}
                  /*camelCase i koden vs. hyphen i api SKAL RETTES!!!!*/
                />
              </>
            ))}
            <OrderTotal total={total} />
          </>
          <OrderingCustomerMap customerId={order.customerId} />
          <DeleteOrder orderId={order.id} />
          <PrintOrder orderId={order.id} />

          <hr />
        </section>
      ))}
    </div>
  );
};

export default Orders;
