const PrintOrder = ({ orderId }) => {
  function printOrderHandler() {
    console.log("printOrderHandler-orderId", orderId);
  }

  return <button onClick={printOrderHandler}>Print bestilling</button>;
};

export default PrintOrder;
