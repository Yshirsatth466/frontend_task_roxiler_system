import React, { useEffect, useState } from 'react';
import { fetchStatistics } from '../utils/api';

const StatisticsBox = ({ selectedMonth }) => {
    const [stats, setStats] = useState({ totalSales: 0, soldItems: 0, notSoldItems: 0 });

    useEffect(() => {
        fetchStatistics(selectedMonth).then((data) => setStats(data));
    }, [selectedMonth]);

    return (
        <div className="statistics-box">
            <div>Total Sales: ${stats.totalSales}</div>
            <div>Sold Items: {stats.soldItems}</div>
            <div>Not Sold Items: {stats.notSoldItems}</div>
        </div>
    );
};

export default StatisticsBox;
