import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Customers from './customers';
import Pagination from './pagination';


const Home = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(5);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      const res = await axios.get('https://intense-tor-76305.herokuapp.com/merchants');
      setCustomers(res.data);
      setLoading(false);
    }
    fetchCustomers();
  }, []);

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // console.log(customers);
  return (
    <div className='container'>
      <Customers customers={currentCustomers} loading={loading} />
      <Pagination 
        customersPerPage={customersPerPage} 
        totalCustomers={customers.length}
        paginate={paginate} 
      />
    </div>
  );
};

export default Home;
