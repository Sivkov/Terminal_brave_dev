import React from 'react';
import './App.css';


const MobileService = [
  { name: "МТС", zip: "0" },
  { name: "Билайн", zip: "1" },
  { name: "Мегафон", zip: "2" },
  { name: "ТEL2", zip: "3" }
   ];


 class ButtonsDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
    activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;

    return (
      <div className="App">
           {MobileService.map((place, index) => (
           <button className="button13"
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
              alert (index)
            }}
          >
            <img src={`/images/${index}.png`} className="App-logo" alt="logo" />

           
           
            {place.name}
          </button>
        ))}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Оплати мобильную связь</h1>
       
        < ButtonsDisplay />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
