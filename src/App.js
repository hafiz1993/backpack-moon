
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/Header';
import Description from './Component/Description/Description';
import CasualBackpack from './Component/CasualBackpack/CasualBackpack';

function App() {
  return (
    <div className="App ">
      <Navbar/>
      <div className="container">
      <Header/>
      <Description/>
      <CasualBackpack/>
      </div>
    
    </div>
  );
}

export default App;
