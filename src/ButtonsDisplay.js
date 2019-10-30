import React from 'react';


export class ButtonsDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = { payReciever: '' };
        this.chooseService = this.chooseService.bind(this)
    }

    chooseService (e) {
        this.setState({
           payReciever: e.target.alt
        })
        this.props.steps(1, e.target.alt )
     }

  render() {

    return (
     
    <div>
       <h1>Оплати мобильную связь</h1>
       
        <button className="button" id='0' 
            onClick={this.chooseService}>
            <img src={`/images/0.png`} className="App-logo" alt="MTC" />     
            <h2>MTC</h2>
        </button>

        <button className="button" id='1' 
            onClick={this.chooseService}>
            <img src={`/images/1.png`} className="App-logo" alt="Билайн" />     
            <h2>Билайн</h2>
        </button>

        <button className="button" id='2' 
            onClick={this.chooseService}>
            <img src={`/images/2.png`} className="App-logo" alt="Мегафон" />     
            <h2>Мегафон</h2>
        </button>


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

      const MobileService = [
  { name: "МТС", id : 0},
  { name: "Билайн", id : 1},
  { name: "Мегафон", id : 2}
  //{ name: "ТELE2", id : 3}
    ];


       {MobileService.map((place, index) => (

        <button className="button" key={index} id={index} value={this.index}
        
        onClick={this.chooseService}>

            <img src={`/images/${index}.png`} className="App-logo" alt="logo" />
        
            <h2>{place.name}</h2>

      </button>))}




*/

