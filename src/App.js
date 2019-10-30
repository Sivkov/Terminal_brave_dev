import React from 'react';
import './App.css';
import { UserForm } from './UserForm';
import { ButtonsDisplay } from './ButtonsDisplay';
import { WaitingServer } from './WaitingServer';



class App extends React.Component {
  constructor() {
      super()
      this.state = { payActive: 1, operator: '', mobile: '', phone : '', sum : ''  }
      this.nextPanel = this.nextPanel.bind(this)  
  }

   nextPanel (step, mobile, phone, sum) {

      console.log (this.state.sum)
      this.setState(prevState => {
          return {
          payActive: prevState.payActive + step
        }
      })
      this.setState({operator : mobile, phone: phone, sum: sum })

      console.log ("сумма"+this.state.sum)

          }
  
  render() {

      return (

        <div className="App" >
            <header className="App-header">
                {/*выбор оператора*/}
                {this.state.payActive== 1 ? < ButtonsDisplay steps={this.nextPanel} 
                     />  :  '' }

                {/*ввод данных в форму*/}
                {this.state.payActive== 2 ? < UserForm  steps={this.nextPanel} operator={this.state.operator}
                 />  : '' }

                {/* ожидание ответа */}
                {this.state.payActive==  3 ? < WaitingServer 

                operator={this.state.operator}
                phone={this.state.phone}
                sum={this.state.sum}
                
                />  : '' }

                {/* возврат в шаг первый*/}
            </header>
        </div>
      )
  }
}



export default App;
