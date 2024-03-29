import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {createStore, applyMiddleware} from "redux";
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import configureStore from './store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';



// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
//   );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const {store, persistor} = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
    document.getElementById('root')
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
