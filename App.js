import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Add from './pages/add';


function App() {
  return (
    <div className="App">
       

      <BrowserRouter>
      <Add />
      </BrowserRouter>
    </div>
  );
}

export default App;
