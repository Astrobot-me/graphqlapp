// src/index.js
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import App from './App';

const Link = "https://ap-south-1.cdn.hygraph.com/content/clww78g2h06c407te5js5mnyz/master" 

const client = new ApolloClient({
  uri: Link, // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App></App>
  </ApolloProvider>,
  document.getElementById('root')
);

// console.log("Hello")