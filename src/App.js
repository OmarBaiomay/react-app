import './App.css';
import Welcome from './componentes/Welcome';
import WelcomeES from './componentes/WelcomeES';
import Input from './componentes/Input';

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
      <Input label="Name" type="text"/>
      <Input label="password" type="password"/>
    </div>
    </>
  );
}

export default App;
