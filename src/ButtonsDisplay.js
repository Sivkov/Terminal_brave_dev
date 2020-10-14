import React from 'react';
import styled from 'styled-components';
import OPER0 from './images/0.png';
import OPER1 from './images/1.png';
import OPER2 from './images/2.png';



const Img = styled.img`
  height:12vmax;
  width: 12vmax;
 `

 const Container = styled.div`
 text-align: center;
 display: flex;
 justify-content: center;
  
 `

const Button = styled.button`
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  width: 15vmax;
  height: 22vmax;
  color: white;
  text-shadow:none;
  text-decoration: none;
  text-align: center;
  white-space: pre-line;
  border: 0.05vmax solid rgba(156, 137, 137, 0.5);
  border-color: none;
  border-radius: 0.5vmax;
  outline: none;
  background: none;
  box-shadow: inset rgba(156, 137, 137, 0.5) 0.05vmax 0.05vmax;
  margin: 0 0.5vmax;
  text-align:center;

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
         payReciever: e.currentTarget.getAttribute('data-key')
      })

      this.props.steps(1,e.currentTarget.getAttribute('data-key') )
   }

  render() {

    return (
     
    <div>
       <h1>Оплати мобильную связь</h1>
      <Container>
        <Button data-key='МТС' onClick={this.chooseService}   >
        <Img src={OPER0} className="App-logo" alt="MTC" />
           <h2>MTC</h2>
        </Button>

        <Button data-key='Билайн' onClick={this.chooseService} >
            <Img src={OPER1} className="App-logo" alt="Билайн" />    
            <h2>Билайн</h2>
        </Button>

        <Button  data-key='Мегафон' onClick={this.chooseService} >
            <Img src={OPER2} className="App-logo" alt="Мегафон" />  
            <h2>Мегафон</h2>
        </Button>
      </Container>


    </div>);
  }
}

 