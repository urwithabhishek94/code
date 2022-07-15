import './App.css';
import Search from "./components/Search"
import InserFlight from './components/InsertFlight';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router >
    <div className="App container mt-5">
    <h3 className='mt-5 text-primary'>Flight Search App</h3>
     <Routes >
        <Route  path='/' element={<InserFlight />} />
      
       <Route path='/Search' element={<Search />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
