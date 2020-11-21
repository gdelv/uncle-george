import './App.css';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Routes from './routes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
