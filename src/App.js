
import './App.css';
import NavBar from './components/NavBar';
import Footercomp from './components/footer';
import Aboutus from './pages/about';
import HomePage from './pages/homepage';
import Location from './pages/location';





function App() {
  return (
    <div className="App">
      <header className="sticky top-0 z-50">
        <NavBar />
       
      </header>
      <main>
        <HomePage />
        <Aboutus />
        <Location />
      </main>
      <footer>
        <Footercomp />
      </footer>
 
      
     
    </div>
  );
}

export default App;
