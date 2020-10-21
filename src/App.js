import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
render() {
    return (
        <div className="App">
            My Hello World Bye
            <FirstComponent></FirstComponent>
            <secodComponent></secodComponent>
        </div>
    );
}
}
class FirstComponent extends Component{
    render() {
        return(
            <div className="firstComponent">
                First Component
            </div>

        )
    }
}
function secodComponent() {
    return(
        <div className="secodComponent">
            From Function Component
        </div>
    )

}
export default App;
