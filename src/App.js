import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import reactDom from 'react-dom';
import Customers from './components/customers';
import Pagination from './components/pagination';
import { Route } from 'react-router-dom';
import Profile from './components/Profile';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage, setCustomersPerPage] = useState(5);

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

  console.log(customers);
  return (
    <div className='container'>
      <h1>Customers</h1>
      <Route path="/profile" component={Profile} />
      <Customers customers={currentCustomers} loading={loading} />
      <Pagination 
        customersPerPage={customersPerPage} 
        totalCustomers={customers.length}
        paginate={paginate} 
      />
    </div>
  );
};

export default App;
