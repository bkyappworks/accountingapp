import './App.css';
import SignIn from './SignIn';
import Deposits from './Deposits';
import Dashboard from './Dashboard';
import Transaction from './Transaction';
import Account from './Account';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/transaction' element={<Transaction/>} />
      </Routes>
    </Router>
    // <div className="App">
    //   <SignIn />
    //   {/* <Deposits /> */}
    //   {/* <Dashboard /> */}
    // </div>
  );
}

export default App;
