import React, {Component} from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Counter from "../Counter/Counter";
import AuthenticationService from './AuthenticationService'

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
                <Route path="/counter" component={Counter}/>
                <Route path="/logout" component={LogoutComponent}/>
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
            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
        }else{
            console.log('Login Failed')
            this.setState({hasLoginFailed:true})
            this.setState({showSuccessMessage:false})
            }

    }

    render=()=> {
        return(
            <div >
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successfull</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/> <br/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/> <br/>

                    <button className="btn btn=s" onClick={this.loginClick}>Login</button>

                </div>

            </div>
        )
    }
}
class HeaderComponent extends Component{
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        console.log(isUserLoggedIn)
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-brand">Nikhil's TODO APP</div>
                <ul className="navbar-nav">
                    {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/nikhil">Home</Link></li>}
                    {isUserLoggedIn &&<li><Link className="nav-link" to="/toDo">ToDos</Link></li>}
                    {isUserLoggedIn && <li><Link className="nav-link" to="/counter">Counter</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/login">Login</Link></li>}
                    {isUserLoggedIn && <li className="nav-link" onClick={AuthenticationService.logout}><Link className="nav-link" to="/logout">Logout</Link></li>}
                </ul>
                </nav>
            </header>
        )
    }
}
class FooterComponent extends Component{
    render() {
        return(
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2020 @Kannaya</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component{
    render() {
        return(
            <div>
                <h1>You are Logged Out</h1>
                <div className="container">
                    Thank You for using our application
                </div>
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
                <div className="container">
                    <table className="table border">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(
                                todo=>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>


            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render()
    {
        return (
            <div>
                <h1>Welcome!</h1>
                <div className="container">
                Welcome {this.props.match.params.name.toUpperCase()}. You can manage your todos <Link to="/todo">here</Link>
                </div>
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

