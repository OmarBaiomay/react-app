import './App.css';
import Welcome from './componentes/Welcome';

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

      <Welcome name="Omar"/>
    </div>
    </>
  );
}

export default App;
