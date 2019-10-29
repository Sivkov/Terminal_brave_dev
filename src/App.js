import React from 'react';
import './App.css';
import { UserForm } from './UserForm';
import { ButtonsDisplay } from './ButtonsDisplay';

//Для добавления получателя платежа дописываем сюда + добавляем картинку в public/images/{index}.png
export const MobileService = [
  { name: "МТС"},
  { name: "Билайн"},
  { name: "Мегафон"}
    ];

/*
function App() {
  return (
    <div className="App">

      <header className="App-header">

        <h1>Оплати мобильную связь</h1>
       
        < ButtonsDisplay />
        < UserForm />
     
      </header>
    </div>
  );
}
*/

class App extends React.Component {
  constructor() {
      super()
      this.state = { payActive: false,  paySuccess : true }
     // this.nextPanel = this.nextPanel.bind(this)
      
  }
/*
  nextPanel () {
    !this.state.payActive ?
    this.setState({ payActive: true }) : this.setState({ payActive: false })

  }
  */
  render() {

         return (

        <div className="App" >
        <header className="App-header">
  
        <h1>Оплати мобильную связь</h1>
            
                {!this.state.payActive ? < ButtonsDisplay />:  < UserForm  /> }
                 
        </header>
      </div>

      )
  }
}


export default App;
