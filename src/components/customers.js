import React, { Fragment, useState } from "react";
const Customers = ({ customers, loading }) => {
    
    const [isActive, setActive] = useState(true);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const toggleBid = () => {
      setActive(!isActive);
  };

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
            <th>Max/Min Bid</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
                <td>{customer.firstname} {customer.lastname}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.hasPremium}</td>
                <td>{isActive ? Math.max.apply(Math, customer.bids.map((bid) => (bid.amount))) : Math.min.apply(Math, customer.bids.map((bid) => (bid.amount)))}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.firstname}</li>
        ))}
        ;
      </ul> */}
    </Fragment>
  );
};

export default Customers;
