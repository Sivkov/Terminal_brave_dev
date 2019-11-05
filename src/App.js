import React from 'react';
import styled from 'styled-components'
import { UserForm } from './UserForm';
import { ButtonsDisplay } from './ButtonsDisplay';
import { WaitingServer } from './WaitingServer';


const Header = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`

const AppWrapper = styled.div`
    text-align: center;
`


class App extends React.Component {
  constructor() {
      super()
      this.state = { payActive: 1, operator: '', mobile: '', phone : '', sum : ''  }
      this.nextPanel = this.nextPanel.bind(this)  
  };

  nextPanel (step, mobile, phone, sum) {
      this.setState(prevState => {
          return {
          payActive: prevState.payActive + step
          }
      })
      this.setState({operator : mobile, phone: phone, sum: sum }) 
  };
  
  render() {
      return (
        <AppWrapper >
            <Header>
                {/*выбор оператора*/}
                {this.state.payActive== 1 ? < ButtonsDisplay steps={this.nextPanel} />  :  '' }

                {/*ввод данных в форму*/}
                {this.state.payActive== 2 ? < UserForm  steps={this.nextPanel} operator={this.state.operator} />  : '' }

                {/* ожидание ответа и возврат в шаг первый */}
                {this.state.payActive==  3 ? < WaitingServer 
                  steps={this.nextPanel}  operator={this.state.operator}
                  phone={this.state.phone} sum={this.state.sum} />  : '' }
            </Header>
        </AppWrapper>
      )
  }
}

export default App;
