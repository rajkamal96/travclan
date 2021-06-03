import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
const Customers = ({ customers, loading }) => {
  const [isActive, setActive] = useState(true);
  const history = useHistory();
  const handleClick = () => {
      history.push("/profile");
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const toggleBid = () => {
    setActive(!isActive);
  }

  return (
    <Fragment>
      <button onClick={toggleBid}>{isActive ? <p>Max</p> : <p>Min</p>}</button>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Premium</th>
            <th>{isActive ? <span>Max Bid</span> : <span>Min Bid</span>}</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} onClick={handleClick}>
              <td>
                {customer.firstname} {customer.lastname}
              </td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.hasPremium.toString()}</td>
              <td>
                {isActive
                  ? Math.max.apply(
                      Math,
                      customer.bids.map((bid) => bid.amount)
                    )
                  : Math.min.apply(
                      Math,
                      customer.bids.map((bid) => bid.amount)
                    )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Customers;
