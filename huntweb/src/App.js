import React from 'react';
import './styles.css';
import Header from './components/Header';
import api from './services/api'
import Main from './pages/main'

const App = () => (
  <div className="App">
       <Header/>
       <Main />
    </div>
);

export default App;
