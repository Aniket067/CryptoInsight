# CryptoInsight

CryptoInsight is a comprehensive web application for tracking and analyzing cryptocurrency data. Utilizing the CoinGecko API, CryptoInsight offers real-time information about various cryptocurrencies, charts, and key values.

## Features

- **Real-time Cryptocurrency Data:** Fetch up-to-date information on various cryptocurrencies using the CoinGecko API.
- **Dynamic Charts:** Visualize cryptocurrency trends and data with dynamic charts.
- **Key Metrics Display:** Highlight important values like market cap, price changes, and more.
- **Search Functionality:** Easily search for and access detailed information about specific cryptocurrencies.
- **Responsive Design:** Ensures a seamless experience across devices of all sizes.

 ## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **CoinGecko API**: For fetching real-time cryptocurrency data.
- **Google React Charts**: For creating dynamic and interactive charts.
 
  **Install Google React Charts**:
 ```bash
 npm install react-google-charts
 ```
 

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Ensure you have Node.js installed (version 14.x or later).
- **npm**: npm (Node Package Manager) should be installed along with Node.js.
- **API Key**: Sign up on CoinGecko to get an API key if required (CoinGecko's API is mostly free without an API key but it’s good to have one).

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/cryptoinsight.git
    cd cryptoinsight
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Environment Variables:**

    Create a `.env` file in the root of your project and add your CoinGecko API endpoint (if required):

    ```plaintext
    REACT_VITE_COINGECKO_API=https://api.coingecko.com/api/v3
    ```

4. **Start the Development Server:**

    ```bash
    npm run dev
    ```

    The app will be available at `http://localhost:5173`.

## Usage

Once the application is running, you can:

- Search for any cryptocurrency by name or symbol.
- View detailed information including current price, market cap, trading volume, and more.
- Interact with charts to visualize historical data and trends.
- Monitor real-time price updates and market changes.

## Getting CoinGecko API Key

1. **Visit CoinGecko**: Go to the [CoinGecko API page](https://www.coingecko.com/en/api).
2. **Sign Up**: Register for a free account if you haven't already.
3. **Access API**: After signing in, navigate to the API documentation and review the endpoints available. Note that most of CoinGecko's API is free and does not require an API key.
4. **Get API Key** (if required): Follow the instructions provided by CoinGecko to obtain an API key for higher rate limits and additional features.

# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
