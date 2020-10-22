import React, {Component} from 'react';
import MyFirstComponent from './components/learning-examples/MyFirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component{
render() {
    return (
        <div className="App">
            My Hello World Bye
            <MyFirstComponent></MyFirstComponent>
            <SecondComponent></SecondComponent>
        </div>
    );
}
}


export default App;
