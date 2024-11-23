import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { fetchBarChart } from '../utils/api';

const BarChart = ({ selectedMonth }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetchBarChart(selectedMonth).then((data) => {
            setChartData({
                labels: Object.keys(data.priceRanges),
                datasets: [
                    {
                        label: 'Number of Items',
                        data: Object.values(data.priceRanges),
                        backgroundColor: 'rgba(75,192,192,0.6)',
                    },
                ],
            });
        });
    }, [selectedMonth]);

    if (!chartData) return <p>Loading chart...</p>;

    return <Bar data={chartData} />;
};

export default BarChart;
