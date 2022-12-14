import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import TokenContext from "../Contexts/TokenContext";
import { useState, useContext, useEffect } from "react";

const DeleteOrderItemModal = ({
  setIsOpen,
  isOpen,
  orderId,
  productId,
  orders,
  setOrders,
}) => {
  const { token } = useContext(TokenContext);

  const [thisOrder, setThisOrder] = useState([]);

  function DeleteHandler() {
    fetch(`http://localhost:3001/orders/${orderId}`, {
      headers: {
        authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setThisOrder(data));

    const orderedArray = thisOrder.products;

    console.log("orderedArray", orderedArray);

    const thisIndex = orderedArray.indexOf(productId);

    /*
    const orderlList = async function () {
      const wait = await fetch("http://localhost:3001/orders/");
    };
    */

    console.log("indexToSplice", thisIndex);

    const splicedArray = thisOrder.products.splice(thisIndex, 1);

    console.log("splicedArray", splicedArray);

    fetch(`http://localhost:3001/orders?id=${orderId}`, {
      headers: {
        authorization: "Bearer " + token,
      },

      method: "PATCH",
    }).then((data) => setOrders(data));
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="absolute inset-0 bg-slate-800/50"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="mx-auto mt-20 w-[20vw] bg-yellow-200/75 rounded-md p-6 border-spacing-1 border-b-2 border-r-2 border-grey-300"
            role="dialog"
            aria-hidden="true"
            /*variants={container}*/
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
          >
            <button
              className="top-2 right-2 text-sm text-black-400 p-2 rounded-full border-spacing-1 border-2 border-grey-300"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
            <p className="p-5">Er du sikker p??, at du vil slette denne vare?</p>

            <div className="flex justify-between">
              {" "}
              <button
                className="py-2 px-3 text-sm text-black-400 p-3 rounded-full border-spacing-1 border-2 border-grey-300"
                onClick={() => setIsOpen(false)}
              >
                Annull??r
              </button>
              <button
                className="py-2 px-3 text-sm text-black-400 p-3 rounded-full border-spacing-1 border-2 border-grey-300"
                onClick={() => {
                  setIsOpen(false);
                  DeleteHandler();
                }}
              >
                Bekr??ft
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DeleteOrderItemModal;
