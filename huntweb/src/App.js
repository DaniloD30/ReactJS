import React from 'react';
import './styles.css';
import Header from './components/Header';
import api from './services/api'
import Main from './pages/main'
import Routes from './routes';

const App = () => (
  <div className="App">
       <Header/>
       <Routes />
    </div>
);

export default App;
