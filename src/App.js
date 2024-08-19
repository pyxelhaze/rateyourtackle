import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './frontend/components/Header';
import Footer from './frontend/components/Footer';
import Main from './frontend/components/Main';
import Rods from './frontend/components/Rods';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="p-4 flex-grow ">
          <Routes>
            <Route path="/"
              element={<Main />}>
            </Route>
            <Route path="/rods"
              element={<Rods />}>
            </Route>
            {/*   <Route path="/reels"
              element={<Reels />}>
            </Route>
            <Route path="/lures"
              element={<Lures />}>
            </Route>
            <Route path="/lines"
              element={<Lines />}>
            </Route> */}

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
