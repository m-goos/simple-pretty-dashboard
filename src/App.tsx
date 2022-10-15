import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="h-screen bg-gray-100 sm:bg-orange-600">
      <Navbar />
      <Filter />
    </div>
  );
}

export default App;
