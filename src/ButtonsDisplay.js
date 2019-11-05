import React from 'react';
import styled from 'styled-components'

const Img = styled.img`
  padding: 0.7em 0;
  height: 40vmin;
 `

const Button = styled.button`
  display: inline-block;
  width: 15em;
  font-size: 80%;
  color: white;
  text-shadow:none;
  text-decoration: none;
  text-align: center;
  line-height: 1.1;
  white-space: pre-line;
  padding: 0.7em 0;
  border: 1px solid;
  border-color: none;
  border-radius: 6px;
  outline: none;
  background: none;
  box-shadow: inset rgba(156, 137, 137, 0.5) 1px 1px;

  :first-line{
  font-size: 170%;
  font-weight: 700;
}
  :hover {
  background: rgba(156, 137, 137, 0.5)  
}
    :active {
  color: rgb(255,255,255);
  border-color: black ;
}
 `
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
       
        <Button  onClick={this.chooseService}>
            <Img src={`/images/0.png`} className="App-logo" alt="MTC" />  
            <h2>MTC</h2>
        </Button>

        <Button onClick={this.chooseService}>
            <Img src={`/images/1.png`} className="App-logo" alt="Билайн" />    
            <h2>Билайн</h2>
        </Button>

        <Button  onClick={this.chooseService}>
            <Img src={`/images/2.png`} className="App-logo" alt="Мегафон" />  
            <h2>Мегафон</h2>
        </Button>

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

