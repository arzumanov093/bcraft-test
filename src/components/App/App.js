import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'

import { ChangePassword } from '../ChangePassword/ChangePassword';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register'
import './App.css';

function App() {

  const { isAuth } = useSelector(state => state.authReducer)

  return (
    <div className="App">
      <div>
        <a href='/'>login</a>
        <a href='/register'>registration</a>
        <a href='/changepass'>changepass</a>
      </div>
      
      {
        isAuth  ?
        <Routes>
          <Route path='/changepass' element={<ChangePassword/>}/>
        </Routes>
        :
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      }
      
      
    </div>
  );
}

export default App;
