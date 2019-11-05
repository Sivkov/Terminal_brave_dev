import React from 'react';
import styled from 'styled-components'
import InputMask from 'react-input-mask';

const Table = styled.table`
    width: 100%
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    table-layout: fixed;   
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
 
  border: 1px solid;
  border-color: none;
  border-radius: 6px;
  outline: none;
  background: none;
  box-shadow: inset rgba(156, 137, 137, 0.5) 1px 1px;

  :hover {
  background: rgba(156, 137, 137, 0.5)  
}
    :active {
  color: rgb(255,255,255);
  border-color: black ;
}
 `

const Input= styled.input`

 font-size: 80%;
 color:'black'

`

const divStyle = { 
    fontSize: '80%', 
    color:'black'
}

const formStyle = { 
    textAlign: 'start'    
}

export class UserForm extends React.Component {
    constructor(props) {
        super(props);
        let phone = props.phone;
        let phoneIsValid = this.validatePhone(phone);
        let sum = props.sum;
        let sumIsValid = this.validateSum(sum);
        this.state = { phone: phone, sum: sum, phoneValid: phoneIsValid, sumValid: sumIsValid };
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onSumChange = this.onSumChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.chooseService = this.chooseService.bind(this)
        this.stepBack = this.stepBack.bind(this)


    }

    validateSum(sum) {
    return sum < 1001 & sum > 0;
    }

    validatePhone(phone) {
    //тут можно усложнить регулярку для телефона, но пока для всего что прошло через паттерн -  TRUE
        return true;
    }

    onSumChange(e) {
        var val = e.target.value;
        var valid = this.validateSum(val);
        this.setState({ sum: val, sumValid: valid });
    }

    onPhoneChange(e) {
        var val = e.target.value;
        var valid = this.validatePhone(val);
        this.setState({ phone: val, phoneValid: valid });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.phoneValid == true && this.state.sumValid == true) {

        this.chooseService()
        }

        if (this.state.phoneValid != true) {
            alert("Проверьте ваш номер: " + this.state.phone);
        }

        if (this.state.sumValid != true) {
            alert("Уточните сумму платежа( не более 1000) " + this.state.sum);
        }
    }

      chooseService () {
          this.props.steps( 1, this.props.operator, this.state.phone, this.state.sum)
          
      }

      stepBack() {
          this.props.steps(-1)
      }


      render() {
  
          return (
           <form onSubmit={this.handleSubmit} style={formStyle}>
              <h1>Выбран оператор {this.props.operator}</h1>
              <Table>
                  <tbody>              
                        <tr>
                          <td>
                              <label>Номер телефона:</label>
                          </td>
                          <td>
                                <InputMask {...this.props} mask="+7(999)999-99-99" maskChar=" " style={divStyle}
                                onChange={this.onPhoneChange}
                                pattern={'[0-9\(\)\+-]{16}'} 
                                placeholder={'+7(999)999-99-99'} 
                                required />                                 
                          </td>
                      </tr>
                      <tr>
                          <td><label>Сумма к оплате:</label>
                          </td>
                          <td>
                                <Input type="tel" 
                                    pattern={'[0-9]{1,4}'} 
                                    onChange={this.onSumChange}
                                    placeholder={'не более 1000 рублей'} 
                                    maxLength={4} 
                                    minLength={1} 
                                    required>
                                </Input>
                            </td>
                      </tr>
                     </tbody>
                </Table>
                <p></p>
                <Button type="button" onClick={this.stepBack}><h2>Назад</h2></Button>
                <Button type="submit"><h2>Подтвeрдить</h2></Button>
            </form>
         );
  }
}


