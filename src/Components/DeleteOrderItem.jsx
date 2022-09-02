import { useState } from "react";
import DeleteOrderItemModal from "./DeleteOrderItemModal";

const DeleteOrderItem = ({ productId, orderId, orders, setOrders }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Slet vare</button>
      <DeleteOrderItemModal
        productId={productId}
        orderId={orderId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        orders={orders}
        setOrders={setOrders}
      />
    </>
  );
};

export default DeleteOrderItem;
