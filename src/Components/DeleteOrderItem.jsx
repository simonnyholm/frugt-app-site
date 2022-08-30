import { useState } from "react";
import DeleteModal from "./DeleteOrderItemModal";

const DeleteOrderItem = ({ productId, orderId }) => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <>
      <button onClick={() => setIsOpen(true)}>Slet vare</button>
      <DeleteModal productId={productId} orderId={orderId} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default DeleteOrderItem;
