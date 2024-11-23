import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../utils/api';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const TransactionsTable = ({ selectedMonth }) => {
    const [transactions, setTransactions] = useState([]);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchTransactions(selectedMonth, page, searchQuery).then((data) => setTransactions(data));
    }, [selectedMonth, page, searchQuery]);

    return (
        <div>
            <SearchBar onSearch={(query) => setSearchQuery(query)} />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td>{transaction.description}</td>
                            <td>${transaction.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination currentPage={page} onPageChange={(newPage) => setPage(newPage)} />
        </div>
    );
};

export default TransactionsTable;
