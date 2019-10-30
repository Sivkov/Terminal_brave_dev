import React from 'react';
import './App.css';
import { UserForm } from './UserForm';
import { ButtonsDisplay } from './ButtonsDisplay';


function nextPanel () {
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
            <h2>Идет обработка вашего запроса...</h2>
        </div>
  )
}



export default App;
