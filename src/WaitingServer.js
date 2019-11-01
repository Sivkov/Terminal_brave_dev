import React from 'react';

export class WaitingServer extends React.Component {
    
    constructor() {
        super();
        this.state = {operationSuccess : "loading"};
     
        setTimeout(function () {           
            if (this.props.sum.length>2) this.setState({ operationSuccess: 'true' });
            if (this.props.sum.length<3) this.setState({ operationSuccess: 'false' });
                }.bind(this), 2500 
        );

        clearTimeout ();
        
        setTimeout( function () {
            this.props.steps(-2)}.bind(this), 4000 
        );
        
    };
        /* 
        Здесь делаем запрос к API и по реультатам ответа присваиваем 
        operationSuccess ( по умолчанию loading) "true" или  "false",  но поскольку сервера нет - ставим закглушки и 
        имитируем работу удаленного сервера. Сумма 100 и более успешно, менее  100 -что-то не так.

        componentDidMount() {
            
            fetch("http://localhost:8000", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                body: JSON.stringify({
                     "sum": this.props.sum,
                     "phone" : this.props.phone                     
                    })
                })
                .then((response) => response.json())
                .then((response) => { response
                    // this.setState({ operationSuccess: response });      
                })
            } */
 
    render () {
        return (
            <div className="App">
                <h3> Статус платежа по номеру: {"+7("+this.props.phone.slice(1,4)+")"+
                this.props.phone.slice(4,7)+'-'+this.props.phone.slice(7,9)+'-'+this.props.phone.slice(9,11)}  </h3>

                {this.state.operationSuccess == 'loading'  ?  <h3>Идет обработка вашего запроса...</h3> : ""} 

                {this.state.operationSuccess == 'true'  ? <h3>Всё успешно!</h3> : ""}
                
                {this.state.operationSuccess == 'false'  ? <h3>Что-то пошло не так.</h3> : ""}
            </div>
        );
    }
}