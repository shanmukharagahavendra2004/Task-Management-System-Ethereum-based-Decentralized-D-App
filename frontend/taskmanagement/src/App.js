import './App.css';
import Home from './components/Home.jsx';
import Signin from './components/Signin.jsx';
import Login from './components/Login.jsx';
import LandingPage from './components/LandingPage.jsx';
import Dashboard from './components/managerdashboard/Dashboard.jsx';
import EmployeeHome from './components/employee/EmployeeHome.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Home/>
       <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/employeehome" element={<EmployeeHome/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
