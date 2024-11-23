# Transaction Dashboard

## Description
This is a React-based frontend application that interacts with a backend API to provide insights into transaction data. It features a transaction table, transaction statistics, bar charts, and pie charts. Users can filter the data by month, search for specific transactions, and visualize price ranges and category distributions through charts.

## Features
- **Transaction Table**: Displays a paginated and searchable list of transactions. The user can filter transactions by month and search by title, description, or price.
- **Statistics**: Provides a summary of total sales, sold items, and unsold items for the selected month.
- **Bar Chart**: Visualizes price range distribution for the selected month. The data is grouped into different price ranges (e.g., 0-100, 101-200).
- **Pie Chart**: Displays the distribution of items across various categories for the selected month.
- **Pagination**: Allows users to navigate through the transaction data by pages (next and previous).
- **Responsive Design**: The application is designed to be mobile-friendly and adjusts well across different screen sizes.

## Technologies Used
- **React.js**: The primary framework used to build the user interface.
- **Chart.js and react-chartjs-2**: Libraries used for rendering bar and pie charts.
- **Axios**: Used for making HTTP requests to the backend API.
- **CSS**: For styling the components and the overall page layout.

## Installation Steps
1. Clone the repository:  
   `git clone <your-repository-url>`
2. Navigate to the project directory:  
   `cd <project-folder>`
3. Install dependencies:  
   `npm install`
4. Start the development server:  
   `npm start`
5. Open the browser and go to `http://localhost:3000` to view the app.

## Folder Structure
- `src/components`: Contains the main UI components like `TransactionTable`, `BarChart`, `PieChart`, `Pagination`, etc.
- `src/styles.css`: Centralized styling for the app.
- `src/api.js`: Axios-based API calls to interact with the backend.
- `src/App.js`: Main application component that renders all UI elements.

## API Endpoints
- **/api/transactions**: Fetch transaction data based on the selected month, title, description, or price.
- **/api/statistics**: Get total sales, sold items, and unsold items for the selected month.
- **/api/barChart**: Get price range data (e.g., 0-100, 101-200) for the selected month.
- **/api/pieChart**: Get category-wise item distribution for the selected month.

## Example Usage
1. Select a month from the dropdown.
2. The transaction table will update to show transactions for that month.
3. You can search transactions by title, description, or price using the search box.
4. The statistics section will update with the sales, sold, and unsold items.
5. The bar and pie charts will visualize price ranges and item categories for the selected month.

## Contact
For any questions or contributions, feel free to reach out to:
- yash shirsath  
- yshirsath466@gmail.com
