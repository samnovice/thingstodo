import React, { Component} from 'react';
import Service from './service';
import DisplayTasks from './display-tasks';
import AddTask from './addtask';

export default class App extends Component{
    constructor(props){
        super(props);

        this.state = {tasks: []};
    }
    getTaskFromServer(){
        Service.getTasks()
        .then(tasks => this.setState({tasks}))
        .catch(err => this.setState({error: err.message}));
    }
    componentDidMount()
    {
        this.getTaskFromServer();
    }

    togglePending(taskToToggle){

        Service.togglePending(taskToToggle.id).then(() => this.getTaskFromServer());
        // Remove duplicate code created function common for get / update method

        // Service.togglePending(taskToToggle.id).then(() => Service.getTasks())
        //     .then(tasks => this.setState({tasks}))
        //     .catch(err => this.setState({error: err.message}));
        
        // Client side update function to be replaced
        // const tasks = this.state.tasks.map(task => task.id !== taskToToggle.id ? task : {...task, pending: !task.pending});
        
        // this.setState({tasks});
    }

    addTask(taskName){
        // alert(taskName);
        Service.addTask(taskName).then(() => this.getTaskFromServer());
    }

    render(){
        const info = this.state.error ? 
        `Error: ${this.state.error}` :
        <span>
            <div>&nbsp;&nbsp;</div>
            <div><AddTask addTask = { taskName => this.addTask(taskName) }/></div>
            <div>&nbsp;&nbsp;</div>
            <div>Number of tasks: {this.state.tasks.length}</div><div>&nbsp;&nbsp;</div>
            <span><div className="left"><DisplayTasks tasks ={this.state.tasks} title="Pending" pending = {true} togglePending ={task => this.togglePending(task)}/></div></span>
            <span><div className="right"><DisplayTasks tasks ={this.state.tasks} title="Completed" pending = {false} togglePending ={task => this.togglePending(task)}/></div></span>

        </span>;
        return <div>
            <div className="centered">List of Tasks</div>
            <div>{ info }</div>
            </div>
    }
}
