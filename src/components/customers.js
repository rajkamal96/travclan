import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
const Customers = ({ customers, loading }) => {
  const [isActive, setActive] = useState(true);
  const [currentSort, setCurrentSort] = useState();
  const history = useHistory();
  const handleClick = (customer) => {
      history.push({
          pathname: "/profile",
          data: customer
      });
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const toggleBid = () => {
    setActive(!isActive);
  }


  return (
    <Fragment>
      
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Premium</th>
            <th>{isActive ? <span>Max Bid</span> : <span>Min Bid</span>} <button onClick={toggleBid}>{isActive ? <p>Min</p> : <p>Max</p>}</button></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} style={{cursor:'pointer',borderWidth: '1px', borderColor: 'black',borderStyle:'solid'}} onClick={() => handleClick(customer)}>
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
