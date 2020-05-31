import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

//TODO: do change this during production
const API_PROD = 'https://quizapp-server.herokuapp.com/iamvmgraphqlapi';

//apollo setup
const client = new ApolloClient({
  uri : API_PROD
});


ReactDOM.render(
  <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
