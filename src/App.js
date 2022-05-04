// the next 2 imports were needed for the commented code at the bottom
// import logo from './logo.svg';
// import './App.css';

import { Navigate, HashRouter, Routes, Route, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import FederatedLogin from './components/FederatedLogin';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import { useState } from 'react';

function App() {
  const [customer, setCustomer] = useState(localStorage.getItem('customer'));

  let customerLoggedInHandler = (customerEmail) => {
    localStorage.setItem('customer', customerEmail);
    setCustomer(customerEmail);
  }

  let customerLoggedOutHandler = () => {
    localStorage.removeItem('customer');
    setCustomer(undefined);
  }

  return (
    <HashRouter>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col>
            <Menu customer={customer} customerLoggedOut={customerLoggedOutHandler} />
          </Col>
        </Row>


        <Routes>

          <Route exact path='/register' element={<Register />}>
          </Route>

          <Route exact path='/login/:from?' element={<Login customerLoggedIn={customerLoggedInHandler} />}>

          </Route>

          <Route exact path='/login' element={<Login customerLoggedIn={customerLoggedInHandler} />}>

          </Route>

          <Route path='/google/:username/:name' element={<FederatedLogin provider="google" customerLoggedIn={customerLoggedInHandler} />}>

          </Route>

          <Route exact path='/quiz/:id' element={
            <ProtectedRoute customer={customer}><Quiz /></ProtectedRoute>

          }>

          </Route>
          <Route exact path='/' element={<Home />}>

          </Route>
        </Routes>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>

      </Container>
    </HashRouter>
  );
}

const ProtectedRoute = ({ customer, children }) => {
  const { id } = useParams();
  
  if (customer) {
    return children;
  } else {
    return <Navigate to={`/login/${id}`} />;
  }
}

export default App;

/* This part was replaced with the above code

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

*/