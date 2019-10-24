import React from 'react';
import './App.css';


const MobileService = [
  { name: "МТС", zip: "0" },
  { name: "Билайн", zip: "1" },
  { name: "Мегафон", zip: "2" },
    ];


 class ButtonsDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
    activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;

    return (
      <div className="App">
           {MobileService.map((place, index) => (
           <button className="button13"
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
              alert (index)
            }}
          >
            <img src={`/images/${index}.png`} className="App-logo" alt="logo" />

            {place.name}
          </button>
        ))}
      </div>
    );
  }
}




class UserForm extends React.Component {
  constructor(props) {
    super(props);
    var phone = props.phone;    
    var phoneIsValid = this.validatePhone(phone);
    var sum = props.sum;
    var sumIsValid = this.validateSum(sum);
    this.state = {phone: phone, sum: sum, phoneValid: phoneIsValid, sumValid: sumIsValid};

    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onSumChange = this.onSumChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    validateSum(sum){
        return sum<1001 & sum>0;
    }
    validatePhone(phone){
        return true;
    }
    onSumChange(e) {
        var val = e.target.value;
        var valid = this.validateSum(val);
        this.setState({sum: val, sumValid: valid});
    }
    onPhoneChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validatePhone(val);
        this.setState({phone: val, phoneValid: valid});
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.phoneValid ==true && this.state.sumValid==true){
            alert("Номер: " + this.state.phone + " Сумма: " + this.state.sum);
        } 
        if(this.state.phoneValid !=true ) {
            alert("Проверьте ваш номер: " + this.state.phone);
        }

        if( this.state.sumValid!=true) {
            alert("Сумма не более 1000 рублей " + this.state.sum);
        }
        
    }

    render() {
        var phoneColor = this.state.phoneValid===true?"green":"red";
        var sumColor = this.state.sumValid===true?"green":"red";

        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Номер телефона:</label>
                    <input type="tel" value={this.state.phone} 
                        onChange={this.onPhoneChange} 
                        style={{borderColor:phoneColor}} 
                        placeholder={'8-XXX-XXX-XX-XX'}
                        minLength={11} 
                        maxLength={11} 
                        required />
               
                    <label>Сумма:</label>
                    <input type="tel" 
                        value={this.state.sum} 
                        onChange={this.onSumChange}  
                        style={{borderColor:sumColor}} 
                        placeholder={'не более 1000'}
                        maxLength={4} 
                        minLength={1} 
                        required/>
                </p>
                <input type="submit" value="Подтвeрдить" />
            </form>
        );
    }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Оплати мобильную связь</h1>
       
        < ButtonsDisplay />

        <  UserForm  />
     
      
      </header>
    </div>
  );
}

export default App;
