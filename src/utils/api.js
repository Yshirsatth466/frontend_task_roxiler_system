const BASE_URL = 'http://localhost:3000/api';

export const fetchTransactions = async (month, page, searchQuery) => {
    const params = new URLSearchParams({ month, page, search: searchQuery });
    const response = await fetch(`${BASE_URL}/transactions?${params}`);
    return response.json();
};

export const fetchStatistics = async (month) => {
    const response = await fetch(`${BASE_URL}/statistics?month=${month}`);
    return response.json();
};

export const fetchBarChart = async (month) => {
    const response = await fetch(`${BASE_URL}/barChart?month=${month}`);
    return response.json();
};
