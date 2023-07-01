import Login from './components/Login';
import Navigation from './components/Navigation';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="container pt-3">
          <Login className="d-flex align-items-center"/>
      </div>
    </div>
  );
}

export default App;
