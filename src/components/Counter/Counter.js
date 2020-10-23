import React ,{Component} from 'react';
import './Counter.css';
import {render} from "react-dom";


class CounterButton extends Component{
    state;

//Define the initial state in constructor
    //state=>counter 0
    constructor() {
        super();

        this.state= {
            counter: 0
        }
    }


    render = ()=> {
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>  <button onClick={this.decrement}>-{this.props.by}</button>

            </div>
        )
    }

    increment=()=> {
        console.log('increment')
        this.props.incrementMethod(this.props.by)
        this.setState(
            {counter: this.state.counter + this.props.by}
        );

    }

    decrement=()=> {
        console.log('increment')
        this.props.decrementMethod(this.props.by)
        this.setState(
            {counter: this.state.counter - this.props.by}
        );

    }

}

export class Counter extends Component {
    state;
    constructor() {
        super();

        this.state= {
            counter: 0
        }
    }


    render=()=> {
        return (
        <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className="count">{this.state.counter}</span>
            <div><button className="reset" onClick={this.clear}>Reset</button></div>
        </div>
    )
    }
    increment=(by)=> {
        console.log(`increment from parent- ${by}`)

        this.setState(
            (prevState)=> {
                return {
                    counter: prevState.counter + by
                }
            }
        );
    }

decrement=(by)=>{
        console.log(`decreent from the parent -${by}`)
    this.setState(
        (prevState)=> {
            return {
                counter: prevState.counter - by
            }
        }
    );

}

clear=()=>{
        console.log("inside reset")
    this.setState(
        {counter: 0}
    )
}
}

export default Counter;
