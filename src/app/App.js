import Days from '../pages/days/Days';
import Header from '../pages/header/Header';
import Home from '../pages/home/Home';
import Tabs from '../pages/tabs/Tabs';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Header />
          <Home />
          <Tabs />
          <Days />
        </main>
      </div>
    </div>
  );
}

export default App;
