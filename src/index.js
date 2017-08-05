import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const Card1 = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
};

const Card2 = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
};

class Card3 extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

class Card4 extends React.Component{
    state={name:'Card 4'};
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

//top level class component which contains child components to manage the state object and event handler
class CardList extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello React!!</h1>
                <Card1 name="Card 1"/>
                <Card2 name="Card 2"/>
                <Card3 name="Card 3"/>
                <Card4/>
            </div>
        )
    }
}

ReactDOM.render(<CardList/>, document.getElementById('root'));
registerServiceWorker();
