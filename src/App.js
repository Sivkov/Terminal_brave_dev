import React from 'react';
import './App.css';
import { UserForm } from './UserForm';
import { ButtonsDisplay } from './ButtonsDisplay';

//Для добавления получателя платежа дописываем сюда + добавляем картинку в public/images/{index}.png
export const MobileService = [
  { name: "МТС", id : 0},
  { name: "Билайн", id : 1},
  { name: "Мегафон", id : 2}
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


function nextPanel () {

  console.log ("клак клак")

  this.setState(prevState => {
      return {
        payActive: prevState.payActive + 1
      }
  })
}



class App extends React.Component {
  constructor() {
      super()
      this.state = { payActive: 1 }
      this.nextPanel = this.nextPanel.bind(this)
      
  }

   nextPanel () {

    console.log ("клак клак")
  
    this.setState(prevState => {
        return {
          payActive: prevState.payActive + 1
        }
    })
  }
  
  render() {

         return (

        <div className="App" >
        <header className="App-header">
  
        <h1>Оплати мобильную связь</h1>
         {/*выбор оператора*/}
            {this.state.payActive== 1 ? < ButtonsDisplay steps={this.nextPanel} />  :  '' }
         {/*ввод данных в форму*/}
            {this.state.payActive== 2 ? < UserForm  steps={this.nextPanel} />  : '' }
          {/* ожидание ответа */}
            {this.state.payActive==  3 ? < MobileServiceCard />  : '' }
            {/*ответ от сервера
            //возврат в шаг первый*/}

        </header>
      </div>

      )
  }
}


function MobileServiceCard(props) {
  return (
    <div className="App">
      <img src={`/images/${props.index}.png`} className="App-logo" alt="logo" />
      <h2>{props.name}</h2>
   </div>
  )
}



export default App;
