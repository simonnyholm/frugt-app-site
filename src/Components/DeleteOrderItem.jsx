import { useState } from "react";
import DeleteOrderItemModal from "./DeleteOrderItemModal";

const DeleteOrderItem = ({ productId, orderId }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Slet vare</button>
      <DeleteOrderItemModal
        productId={productId}
        orderId={orderId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default DeleteOrderItem;
