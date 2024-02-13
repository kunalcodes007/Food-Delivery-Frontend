import './App.css';
import Home from './screens/Home';
import Footer from './components/Footer';
import Login from './screens/Login';
import {BrowserRouter as Router,Routes,Route }from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Signup from './screens/Signup';
import { Cartprovider } from './components/Cartprovider';

function App() {
  return (
        //CAN'T INCLUDE MULTIPLE DIV INSIDE RETURN HENCE FRAGMENATION IS REQUIRED
        <Cartprovider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/" element={<Footer/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/create-user' element={<Signup/>}></Route>
      </Routes>
    </Router>
        </Cartprovider>
  );
}

export default App;
