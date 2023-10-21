import './App.css';
import Banner from './comps/banner';
import Container from './comps/container';

function App() {
  return (
    <div className="App">
      {Banner()}
      {Container()}
    </div>
  );
}

export default App;
