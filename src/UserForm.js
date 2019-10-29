import React from 'react';

export class UserForm extends React.Component {
  constructor(props) {
    super(props);
    var phone = props.phone;
    var phoneIsValid = this.validatePhone(phone);
    var sum = props.sum;
    var sumIsValid = this.validateSum(sum);
    this.state = { phone: phone, sum: sum, phoneValid: phoneIsValid, sumValid: sumIsValid };
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onSumChange = this.onSumChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateSum(sum) {
    return sum < 1001 & sum > 0;
  }
  validatePhone(phone) {
    //тут можно усложнить регулярку для телефона, но пока для всего что прошло через паттерн TRUE
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
      alert("Успешно " + "Номер: " + this.state.phone + " Сумма: " + this.state.sum);
    }
    if (this.state.phoneValid != true) {
      alert("Проверьте ваш номер: " + this.state.phone);
    }
    if (this.state.sumValid != true) {
      alert("Уточните сумму (от 1 до 1000) " + this.state.sum);
    }
  }
  render() {
    { /* var phoneColor = this.state.phoneValid===true?"green":"red";
             var sumColor = this.state.sumValid===true?"green":"red";*/
    }
    return (<form onSubmit={this.handleSubmit}>
      <table>
        <tr>
          <td>
            <label>Номер телефона:</label>
          </td>
          <td>
            <input type="tel" value={this.state.phone} onChange={this.onPhoneChange}
              //style={{borderColor:phoneColor}}
              pattern={'[0-9]{11}'} placeholder={'8XXXXXXXXXX'} minLength={11} maxLength={11} required />
          </td>
        </tr>
        <tr>
          <td>
            <label>Сумма:</label>
          </td>
          <td>
            <input type="tel" value={this.state.sum} pattern={'[0-9]{1-4}'} onChange={this.onSumChange}
              // style={{borderColor:sumColor}} 
              placeholder={'не более 1000'} maxLength={4} minLength={1} required />
          </td>
        </tr>
      </table>
      <input type="submit" className="button" value="Подтвeрдить" />
    </form>);
  }
}
