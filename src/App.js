import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductScreen from './screen/productScreen/ProductScreen';
import Header from './layout/Header';
import Footer from './layout/Footer/Footer';

function App() {
  return (
    <div className="content-wrapper">
      <Router>
        <Header />
        {/* <header className="App-header">
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
      </header> */}
        <main>
          <Switch>
            <Route path="/product" component={ProductScreen} exact />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
