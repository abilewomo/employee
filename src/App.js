import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import EmployeePage from './pages/EmployeePage/EmployeePage';

import Main from './pages/Main/Main';


function App() {
  
  return (
    <div className="App">
      
  <HomePage />    
  <Routes>
     <Route path="/" element={<Main />} />
    <Route path="/employee/:id" element={<EmployeePage />} />
  </Routes>
    </div>
  );
}

export default App