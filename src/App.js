
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './frontend/components/Header';
import './index.css';


function App() {
  return (
    <Router>
      <div className="App ">
        <Header />
      </div>
    </Router>
  );
}

export default App;
