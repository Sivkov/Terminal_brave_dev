import React from 'react';
export class WaitingServer extends React.Component {
        constructor() {
            super();
            this.state = {operationSuccess : ''}
        }

        componentDidMount() {
            const URL = "http://example.com/";
            fetch(URL).then(res => res.json()).then(json => {
              this.setState({ operationSuccess: !this.state.operationSuccess });
            });
          }
        

    render (

       

    ) {
        return (
            <div className="App">
                <h2>Идет обработка вашего запроса...</h2>
                <h3>Сумма: {this.props.sum}</h3>
                <h3>Номер: {"+7 ("+this.props.phone.slice(1,4)+") "+
                this.props.phone.slice(4,7)+'-'+this.props.phone.slice(7,9)+'-'+this.props.phone.slice(9,11)} </h3>
            </div>
        )
    }
}