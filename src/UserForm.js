import React from 'react';
import styled from 'styled-components'
import InputMask from 'react-input-mask';

const Container = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction:column;`

const ContainerLine = styled.div`
    text-align: center;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    margin-top:1vmax;`

const Button = styled.button`
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    width: 22vmax;
    height: 5.5vmax;
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

  :hover {
  background: rgba(156, 137, 137, 0.5)  
}
    :active {
  color: rgb(255,255,255);
  border-color: black ;
}
 `

const Input= styled.input`
 font-size:1.5vmax;
`

const divStyle = { 
    width: '22vmax', 
    height: '3vmax',
    color:'black',
    fontSize:'1.5vmax',
    border: '0.05vmax solid rgba(156, 137, 137, 0.5)',
    borderColor: 'none',
    borderRadius: '0.5vmax',
    
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

    chooseService() {
        this.props.steps(1, this.props.operator, this.state.phone, this.state.sum)

    }

    stepBack() {
        this.props.steps(-1)
    }


    render() {

        return (
            <Container>
                <form onSubmit={this.handleSubmit} >
                    <h1>Выбран оператор {this.props.operator}</h1>

                    <ContainerLine>
                        <h2>Номер:</h2>
                        <InputMask mask="+7(999)999-99-99" maskChar=" " style={divStyle}
                            onChange={this.onPhoneChange}
                            pattern={'[0-9\(\)\+-]{16}'}
                            placeholder={'+7(999)999-99-99'}
                            required />
                    </ContainerLine>
                    <ContainerLine>
                        <h2>Сумма:</h2>
                        <Input type="tel"  style={divStyle}
                            pattern={'[0-9]{1,4}'}
                            onChange={this.onSumChange}
                            placeholder={'не более 1000 рублей'}
                            maxLength={4}
                            minLength={1}
                            required>
                        </Input>
                    </ContainerLine>
                    <ContainerLine>
                        <Button type="button" onClick={this.stepBack}><h2>Назад</h2></Button>
                        <Button type="submit"><h2>Подтвeрдить</h2></Button>
                    </ContainerLine>
                </form >
            </Container >
        );
    }
}


