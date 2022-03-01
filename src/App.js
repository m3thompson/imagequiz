// the next 2 imports were needed for the commented code at the bottom
// import logo from './logo.svg';
// import './App.css';

import { HashRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <HashRouter>
      <Routes>

        <Route exact path = '/register' element={<Register />}>
        </Route>

        <Route exact path = '/login' element={<Login />}>
        </Route>

        <Route exact path = '/' element={<Home />}>
        </Route>

      </Routes>
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