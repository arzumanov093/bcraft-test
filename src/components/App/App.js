import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { ChangePassword } from '../ChangePassword/ChangePassword';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <a href='/'>login</a>
        <a href='/register'>registration</a>
        <a href='/changepass'>changepass</a>
      </div>
      
      <Routes>
        <Route exact path='/' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/changepass' component={ChangePassword}/>
      </Routes>
      
      {/* <Login/>
      <Register/>
      <ChangePassword/> */}
    </div>
    </Router>
  );
}

export default App;
