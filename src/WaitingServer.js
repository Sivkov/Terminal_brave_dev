import React from 'react';

export class WaitingServer extends React.Component {
    
  constructor() {
            super();
            this.state = {operationSuccess : "loading"}
            this.serverAnswer = this.serverAnswer.bind(this)
        }

        /* Здесь делаем запрос к API и по реультатам ответа присваиваем 
        operationSuccess loding true false  но поскольку сервера нет ставим закглушки и 
        имитируем работу удаленного сервера 

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
            }
            */
           
           serverAnswer () {

                if (this.props.sum.length>2) this.setState({ operationSuccess: 'true' });
                if (this.props.sum.length<3) this.setState({ operationSuccess: "false" })
              
            }
              
            

    render () {
        return (
            <div className="App">
                 <h3> Статус платежа по номеру:   
                {"+7("+this.props.phone.slice(1,4)+")"+this.props.phone.slice(4,7)+'-'+this.props.phone.slice(7,9)+'-'+this.props.phone.slice(9,11)} </h3>
                
                {this.state.operationSuccess == 'loading'  ?  <h3>Идет обработка вашего запроса...</h3> : ""} 
                {this.state.operationSuccess == 'true'  ? <h2>Всё успешно</h2> : ""}
                {this.state.operationSuccess == 'false'  ? <h2>что то пошло не так</h2> : ""}

               

            </div>
        )
    }
}

