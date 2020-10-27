import React, {Component} from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

class ToDoApp extends Component{
    render() {
        return(

            <div className="todoApp">
                <Router>
                    <>
                <HeaderComponent/>
                    <Switch>
                <Route path="/" exact component={LoginComponent}/>
                <Route path="/login" component={LoginComponent} />
                <Route path="/welcome/:name" component={WelcomeComponent}/>
                <Route path="/toDo" component={ListToDOComponent}/>
                <Route path="" component={ErrorComponent}/>
                    </Switch>
                    </>
                <FooterComponent/>
                </Router>
           </div>
        )
    }

}
export class LoginComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            username:'nikhil',
            password: '',
            hasLoginFailed:false,
            showSuccessMessage:false
        }
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    loginClick=()=>{
        //nikhil //nation1
        if(this.state.username==='nikhil' && this.state.password==='nation1'){
            this.props.history.push(`/welcome/${this.state.username}`)
        }else{
            console.log('Login Failed')
            this.setState({hasLoginFailed:true})
            this.setState({showSuccessMessage:false})
            }

    }

    render=()=> {
        return(
            <div className="loginComponent">
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successfull</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/> <br/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/> <br/>

                <button className="login" onClick={this.loginClick}>Login</button>

            </div>
        )
    }
}
class HeaderComponent extends Component{
    render() {
        return(
            <div>
                Header <hr/>
            </div>
        )
    }
}
class FooterComponent extends Component{
    render() {
        return(
            <div>
                Footer <hr/>
            </div>
        )
    }
}

class ListToDOComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            todos:
                [
                    {id:1,description: 'Learn React', done:false, targetDate: new Date()},
                    {id:2,description: 'Complete AWS Certification', done:false, targetDate: new Date()},
                    {id:3,description: 'Complete Udemy Course', done:false, targetDate: new Date()},
                    {id:4,description: 'Eat on time', done:false, targetDate: new Date()}
                ]

        }
    }

    render() {
        return(
            <div>
                <h1>List ToDo's</h1>
                <table>
                    <thread>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>Done</th>
                            <th>Target Date</th>
                        </tr>
                    </thread>
                    <tbody>
                    {
                        this.state.todos.map(
                            todo=>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render()
    {
        return (
            <div>Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todo">here</Link>
            </div>
        )
    }
}

function ErrorComponent() {
    return(
        <div>An Error Occured. Please contact support @Kannaya</div>
    )

}

export default ToDoApp;

