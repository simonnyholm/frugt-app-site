import DeleteOrderModal from "./DelteOrderModal";
import { useState } from "react";

const DeleteOrder = ({ orderId, orders, setOrders }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Slet bestilling</button>
      <DeleteOrderModal orders={orders} setOrders={setOrders} orderId={orderId} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default DeleteOrder;
