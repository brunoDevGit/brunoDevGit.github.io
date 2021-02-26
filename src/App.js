import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Portfólio
        </p>
        <a
          className="App-link"
          href="https://brnsoftware.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click aqui
        </a>
      </header>
    </div>
  );
}

export default App;
