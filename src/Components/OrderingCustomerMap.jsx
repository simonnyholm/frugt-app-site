import { useEffect, useState, useContext } from "react";
import TokenContext from "../Contexts/TokenContext";

const OrderingCustomerMap = ({ customerId }) => {
  const [customers, setCustomers] = useState([]);

  const { token } = useContext(TokenContext);

  useEffect(function () {
    fetch("http://localhost:3001/customers", {
      headers: {
        authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);

  console.log("orderedProd", customers);

  const filteredCostumer = customers.filter(
    (customer) => customer.id === customerId
  );

  console.log("filteredCostumer", filteredCostumer);

  return (
    <div>
      {filteredCostumer.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <p>Bestilling sendes til kunde:</p>
              <p>{item.name},</p>
              <p>{item.address.street}</p>
              <p>
                {item.address.zip} {item.address.city}
              </p>
            </div>
            <div>
              <p>Kunde.id: {item.id}</p>
              <p>E-mail: {item.address.email}</p>
              <p>Telefon: {item.address.phone}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderingCustomerMap;
