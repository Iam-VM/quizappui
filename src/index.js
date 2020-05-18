import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import store from './redux/store';

//TODO: do change this during production
const API_DEV = 'http://localhost:4001/api';
const API_PROD = 'https://quizapp-server.herokuapp.com/api';

//apollo setup
const client = new ApolloClient({
  uri : API_DEV
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
