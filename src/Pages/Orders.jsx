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
    <div className="mt-10 ml-10">
      <h1 className="text-center font-bold">Bestillinger</h1>
      <div className="overflow-auto h-screen w-full border rounded-md border-green-800">
        {orders.map((order, index) => (
          <section>
            <table>
              <thead className="bg-orange-700 border-t-2 rounded-md ">
                <tr>
                  <th className="table-header">Varens id.</th>
                  <th className="table-header">Name</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">Pris pr. kasse</th>
                  <th className="table-header">Antal kasser</th>
                  <th className="table-header">Sammenlagt pris</th>
                  <th className="table-header">+/-</th>
                </tr>
              </thead>
              {order.products.map((orderedProducts) => (
                <>
                  <OrderedProductsMap
                    productId={orderedProducts.productId}
                    amount={orderedProducts.amount}
                    orderId={order.id}
                    order={orders}
                    setOrder={setOrders}
                    /*camelCase i koden vs. hyphen i api SKAL RETTES!!!!*/
                  />
                </>
              ))}
            </table>
            <div className="flex">
              <OrderingCustomerMap customerId={order.customerId} />
              <div className="flex">
                {" "}
                <DeleteOrder
                  orderId={order.id}
                  orders={orders}
                  setOrders={setOrders}
                />
                <PrintOrder orderId={order.id} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Orders;
