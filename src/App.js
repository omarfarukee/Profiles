import logo from './logo.svg';
import './App.css';
import NavBer from './components/NavBar/NavBer';
import Skill from './components/skills/Skill';
import Projects from './components/Projects/Projects';


function App() {

  return (
    <div>
      <NavBer></NavBer>
      <Skill></Skill>
      <Projects></Projects>
      
    </div> 
  );
}

export default App;
