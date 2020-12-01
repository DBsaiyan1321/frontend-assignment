import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import MainContent from './components/main-content/MainContent';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
