import "./App.css";
import NavBar from "./components/navbars/NavBar";
import Carrusel from "./components/containers/Carrusel";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Carrusel />
      </header>
      <main></main>
      <footer className="App-footer">
        <p>&copy;AlexDevFullStack 2025</p>
      </footer>
    </div>
  );
}

export default App;
