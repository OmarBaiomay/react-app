import './App.css';
import Welcome from './componentes/Welcome';
import WelcomeES from './componentes/WelcomeES';

function App() {
  const name = "Omar"

  function greating(name){
    return `Hi, ${name}`
  }

  return (
    <>
    <div className="App">
      <h1>Hello World! {name}</h1>
      <h2>{greating("Omar Bayoumi")}</h2>

      <Welcome name="Omar" age="23" location="Cairo"/>
      <WelcomeES name="Omar" age="23" location="Cairo"/>
    </div>
    </>
  );
}

export default App;
