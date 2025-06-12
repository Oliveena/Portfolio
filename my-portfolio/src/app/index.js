import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18+
import App from './App';

// Import Bootstrap CSS globally here:
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);