import './App.css';
import Logo from "./Components/Logo";
import NavigationBar from './Components/NavigationBar';
import FuncButton from './Components/FuncButton';
import FuncDiv from './Components/FuncDiv';
import ClassButton from './Components/ClassButton';
import ClassDiv from './Components/ClassDiv';

function App() {
  return (
    <div className="App">
      <Logo />
      <NavigationBar />
      <FuncButton title="Spausk mane" color="red"/>
      <FuncButton title="Nespausk prašau"/>
      <FuncDiv 
        title="Kažkas" 
        subtitle="Kažkas kito" 
        buttonText="Kažkoks"/>
      <FuncDiv 
        itle="Kitkas" 
        subtitle="Kitaip" 
        buttonText="Kitoks" 
        color="blue"/>
      <ClassButton title="Klasinis mygtukas"/>
      <ClassDiv 
          title="KlasinisDiv" 
          subtitle="KlasikinisDiv" 
          buttonText="KlasinisMygtukas"/>
    </div>
  );
};

export default App;
