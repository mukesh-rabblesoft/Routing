import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header/Header';
import AllRoutes from './AllRoutes/AllRoutes';



function App() {
  return (
    <div className="App">
     <Header/>
      <AllRoutes/>
    </div>
  );
}

export default App;
