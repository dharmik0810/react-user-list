import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const Card1 = () => {
    return (
        <div>
            <h1>Card 1</h1>
        </div>
    )
};

const Card2 = () => {
    return (
        <div>
            <h1>Card 2</h1>
        </div>
    )
};

class Card3 extends React.Component {
    render() {
        return (
            <div>
                <h1>Card 3</h1>
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
                <Card1/>
                <Card2/>
                <Card3/>
            </div>
        )
    }
}
;

ReactDOM.render(<CardList/>, document.getElementById('root'));
registerServiceWorker();
