import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Order from './components/Order';
import Cookies from 'js-cookie';

function App() {

  const cookieCheck = Cookies.get("token");
  if (cookieCheck) {
    return (
      <Router>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              <Route exact path='/' element={<Login />} />
              <Route path='/sign-in' element={<Login />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/order' element={<Order />} />
            </Routes>
          </div>
        </div>
      </Router >
    );
  }
  else {
    return (
      <>
        <Router>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/sign-in' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
              </Routes>
            </div>
          </div>
        </Router >
      </>
    )
  }
}

export default App;
