import React from 'react';

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
            //alert("Успешно " + "Номер: " + this.state.phone + " Сумма: " + this.state.sum);
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
           <form onSubmit={this.handleSubmit}>
              <h1>Выбран оператор {this.props.operator}</h1>
              <table>
                  <tbody>
                      <tr>
                          <td><label>Номер телефона:</label>
                          </td>
                          <td>
                              <input type="tel" value={this.state.phone} onChange={this.onPhoneChange}
                                  pattern={'[0-9]{11}'} 
                                  placeholder={'8XXXXXXXXXX'} 
                                  minLength={11} 
                                  maxLength={11} 
                                  required />
                          </td>
                      </tr>
                      <tr>
                          <td><label>Сумма:</label>
                          </td>
                          <td>
                              <input type="tel" 
                                  value={this.state.sum} 
                                  pattern={'[0-9]{1,4}'} 
                                  onChange={this.onSumChange}
                                  placeholder={'не более 1000'} 
                                  maxLength={4} 
                                  minLength={1} 
                                  required />
                          </td>
                      </tr>
                  </tbody>
                </table>
                <p></p>
                <input type="button" className="button" value="Назад"  onClick={this.stepBack}/>
                <input type="submit" className="button" value="Подтвeрдить" />
            </form>
         );
  }
}
