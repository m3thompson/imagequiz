// the next 2 imports were needed for the commented code at the bottom
// import logo from './logo.svg';
// import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import { useState } from 'react';

function App() {
  const [customer, setCustomer] = useState(undefined);

  let customerLoggedInHandler = (customerEmail) => {
    setCustomer(customerEmail);
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
            <Menu customer={customer} />
          </Col>
        </Row>


        <Routes>

          <Route exact path='/register' element={<Register />}>
          </Route>

          <Route exact path='/login' element={<Login customerLoggedIn={customerLoggedInHandler} />}>

          </Route>
          <Route exact path='/quiz/:id' element={<Quiz />}>

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