import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import AllRoutes from './pages/AllRoutes';
import AlertShow from './componets/AlertShow';



function App() {
  return (
    <div className="App">

      <Navbar/>
      <AllRoutes/>
      {/* <AlertShow/> */}
      
    </div>
  );
}

export default App;
