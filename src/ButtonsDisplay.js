import React from 'react';
import { MobileService } from './App';


export class ButtonsDisplay extends React.Component {

    constructor() {
      super();
      this.state = { activePlace: '' };
      this.nextPanel = this.nextPanel.bind(this)
    }

    nextPanel () {
      this.setState({ activePlace: '25' });
      console.log (this.state.activePlace)

    }

  render() {
    return (<div className="App">

      {MobileService.map((place, index) => (

        <button className="button" key={index} 
        
        onClick={this.nextPanel}>

            <img src={`/images/${index}.png`} className="App-logo" alt="logo" />
        
            <h2>{place.name}</h2>

      </button>))}
    </div>);
  }
}

