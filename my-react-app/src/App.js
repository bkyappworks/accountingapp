import './App.css';
import SignIn from './SignIn';
import Deposits from './Deposits';
import Dashboard from './Dashboard';
import Test1 from './Test1';
import Test2 from './Test2';
import Transaction from './Transaction';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/test1' element={<Test1/>} />
        <Route path='/test2' element={<Test2/>} />
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
