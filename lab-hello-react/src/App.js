import './App.css';
import './components/Card';
import Card from './components/Card';
import imgDeclarative from './images/icon1.png';
import imgComponents from './images/icon2.png';
import imgSingleWay from './images/icon3.png';
import imgJSX from './images/icon4.png';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Hero />
      
      <div className="card-wrapper">
        <Card title="Declarative" image={imgDeclarative} alt="Ícone do card Declarative"
          content="React makes it painless to create interactive UI."
         />
        <Card title="Components" image={imgComponents} alt="Ícone do card Components" 
          content="Build encapsulated components that manage their states."
        />
        <Card title="Single-Way" image={imgSingleWay} alt="Ícone do card Single Way" 
          content="A set of immutable values are passed to the component's."
        />
        <Card title="JSX" image={imgJSX} alt="Ícone do card JSX" 
          content="Statically-typed designet to run on modern web browsers."
        />
      </div>
    </div>
  );
}

export default App;
