import React from 'react'
const Pagination = ({ customersPerPage, totalCustomers, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <div style={{width: '50',display:'flex'}}>
                {pageNumbers.map(number => (
                    <p key={number} style={{textDecoration:'none',padding:'10px',cursor:'pointer'}}>
                        <a onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </p>
                ))}
            </div>
        </nav>
    )
}

export default Pagination;
