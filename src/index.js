import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UsersPostWithForm from './components/UsersPostWithForm'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UsersPostWithForm />, document.getElementById('startApiPoint'));
registerServiceWorker();
