import styles from "./styles/styles.module.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className={styles.reactProduction}>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React JS
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
