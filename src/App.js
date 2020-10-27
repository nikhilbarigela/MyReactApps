import React, {Component} from 'react';
import MyFirstComponent from './components/learning-examples/MyFirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import Counter from './components/Counter/Counter'
import CounterButton from './components/Counter/Counter'
import ToDoApp from './components/too-doo/ToDoApp'
import './App.css';
import './bootstrap.css'

class App extends Component{

render(){
return(
    <div className="App">
        {/*<Counter/>*/}
        <ToDoApp/>
    </div>
)
}
}
class LearningComponents extends Component{
    render() {
        return (
            <div className="LearningComponents">
                My Hello World Bye
                <MyFirstComponent></MyFirstComponent>
                <SecondComponent></SecondComponent>
            </div>
        );
    }
}


export default App;
