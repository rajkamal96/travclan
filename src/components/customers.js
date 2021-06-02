import React from 'react'
const Customers = ({ customers, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
    return (
        <ul>
            {
                customers.map(customer => (
                    <li key={customer.id}>
                        {customer.firstname}
                    </li>
                ))
            };
        </ul>
    )
};

export default Customers;
