import Header from '../pages/header/Header';
import Home from '../pages/home/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Header />
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
