import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Header from './components/Layout/Header';
import Register from './components/Pages/Register';
import Footer from './components/Layout/Footer';
import Login from './components/Pages/Login';
import Expense from './components/Pages/Expense';
import Home from './components/Pages/Home';
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Route path='/' exact>
        <Register/>
      </Route>
      <Route path='/login' exact>
        <Login/>
      </Route>
      <Route path='/home' exact>
        <Home/>
      </Route>
      <Route path='/home/myExpense' exact>
        <Expense/>
      </Route>
    <Footer/>
    <Redirect to='/'/>
    </Router>
    </>
  );
}

export default App;
