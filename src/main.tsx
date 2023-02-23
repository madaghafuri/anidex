import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import { apolloClient } from './api/apollo';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);
