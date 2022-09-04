import PrintOrderModal from "./PrintOrderModal";
import { useState } from "react";

const PrintOrder = ({ orderId, orders, setOrders }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {" "}
      <button onClick={() => setIsOpen(true)}>Print bestilling</button>
      <PrintOrderModal
        orders={orders}
        setOrders={setOrders}
        orderId={orderId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default PrintOrder;
