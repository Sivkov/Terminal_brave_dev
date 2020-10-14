import React from 'react';
import { Pulse} from 'animate-css-styled-components';
import { Tada } from 'animate-css-styled-components';

export class WaitingServer extends React.Component {
    
    constructor() {
        super();
        this.state = {operationSuccess : "loading"};

     
        setTimeout(function () {           
            if (this.props.sum.length>1) this.setState({ operationSuccess: 'true' });
            if (this.props.sum.length<3) this.setState({ operationSuccess: 'false' });
                }.bind(this), 3000 
        );

        clearTimeout ();
        
        setTimeout( function () {
            if (this.props.sum.length<3) this.props.steps(-1, this.props.operator, this.state.phone, this.state.sum);
            if (this.props.sum.length>2) this.props.steps(-2);
            }.bind(this), 5000 
        );

          
    };
        /* 
        Здесь делаем запрос к API и по реультатам ответа присваиваем 
        operationSuccess ( по умолчанию loading) "true" или  "false",  но поскольку сервера нет - ставим заглушки и 
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
                <h3> Статус платежа по номеру: {this.props.phone}  </h3>
                 
                {this.state.operationSuccess == 'loading'  ?  <Waiting /> : ""} 

                {this.state.operationSuccess == 'true'  ? 
                    <Tada duration="0.5s" delay="0.5s"><h3>Всё успешно!</h3></Tada> : ""
                }
                
                {this.state.operationSuccess == 'false' ?  
                    <h3>Порпробуйте еще раз!</h3> : ""
                }
            </div>
        );
    }
}

function Waiting () {
    return (
        
            <Pulse duration="1s" delay="1s" iterationCount="3">
                <h3>Идет обработка вашего запроса...</h3>
            </Pulse>
        )
  }

 

