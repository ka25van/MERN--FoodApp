import './App.css';
import Login from './screens/Login';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './component/ContextReducer';

function App() {
  return (
    <CartProvider>
      
    
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}> </Route>
          <Route exact path='/login' element={<Login/>}> </Route>
          <Route exact path='/createuser' element={<SignUp/>}> </Route>
          <Route exact path='/createuser/login' element={<Login/>}> </Route>
          <Route exact path='/login/home' element={<Home/>}> </Route>
          <Route exact path='/createuser/login/home' element={<Home/>}> </Route>
          </Routes>
      </div>
    </Router>
    </CartProvider>
  );
  
}

export default App;
