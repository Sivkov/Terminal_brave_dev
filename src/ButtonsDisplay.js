import React from 'react';
import { MobileService } from './App';
export class ButtonsDisplay extends React.Component {

    constructor(props) {
      super(props);
      //this.state = { activePlace: '' };
      this.chooseService = this.chooseService.bind(this)
    }

    chooseService () {
        console.log ('клик')
        this.props.steps()  
       
    }

  render() {

    return (<div className="App">

      {MobileService.map((place, index) => (

        <button className="button" key={index} id='index'
        
        onClick={this.chooseService}>

            <img src={`/images/${index}.png`} className="App-logo" alt="logo" />
        
            <h2>{place.name}</h2>

      </button>))}
    </div>);
  }
}


/*
export class ButtonsDisplay extends React.Component {

  constructor() {
    super();
    this.state = { choosePayment: '' };
    
    
  }


  render() {
    return (<div className="App">

        {MobileService.map((place, index) => ( 

            <button className="button" key={index} 
          
                onClick={(e) => {this.setState ({choosePayment: place.name })
                console.log (this.state.choosePayment)
            }}>

            <img src={`/images/${index}.png`} className="App-logo" alt="logo" />
        
            <h2>{place.name}</h2>

            </button>))}
            
        </div>);
  }
}
*/

