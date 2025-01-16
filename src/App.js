import logo from './logo.svg';
import './App.css';

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
      <footer className="App-footer">Open-Source Code by Stephanie Ratliff-Putney on <a href="https://github.com/MutableSpectre/weather-react-app" target="_blank" rel="noopener noreferrer">Github</a> and hosted on <a href="https://weatherreactapp-shecodes.netlify.app/" target="_blank" rel="noopener noreffer">Netlify</a></footer>
    </div>
  );
}

export default App;
