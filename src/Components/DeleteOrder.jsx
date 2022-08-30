import DeleteOrderModal from "./DelteOrderModal";
import { useState } from "react";

const DeleteOrder = ({ orderId }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Slet bestilling</button>
      <DeleteOrderModal orderId={orderId} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default DeleteOrder;
