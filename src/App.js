
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './frontend/components/Header';
import Footer from './frontend/components/Footer';
import Main from './frontend/components/Main';
import './index.css';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="p-4 flex-grow ">
          <Main />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
