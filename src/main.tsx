import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import { apolloClient } from './api/apollo';
import PageProvider from './context/PageContext';
import ModalProvider from './context/ModalContext';
import CollectionProvider from './context/CollectionContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
            <PageProvider>
                <CollectionProvider>
                    <ModalProvider>
                        <App />
                    </ModalProvider>
                </CollectionProvider>
            </PageProvider>
        </ApolloProvider>
    </React.StrictMode>
);
