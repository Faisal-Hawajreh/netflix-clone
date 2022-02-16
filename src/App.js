import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';

function App() {

  return (
    <>
      <header>
      <NavBar/>
      </header>

      <main>
        <Home />
      </main>

      <footer>
      </footer>
    </>
  );
}

export default App;
