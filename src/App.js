import logo from './logo2.svg';
import './App.css';
import DataComponent from './components/DataComponent';

function App() {
  return (
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
        <div>
          <h1>My GraphQL Data</h1>
          <DataComponent></DataComponent>
      </div>
    </div>
  );
}

export default App;
