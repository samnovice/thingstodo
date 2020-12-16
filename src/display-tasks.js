import React, { Component} from 'react';

export default class DisplayTasks extends Component{

    changeStatus(checked, id){
        const tasks = [...this.props.tasks];
        const task = tasks.filter(item => item.id == id);
        task.pending = checked;


    }

    render(){
        const tasks = this.props.tasks.filter(task => task.pending == this.props.pending);
        return <div>
            <h3>{this.props.title}</h3>
            <div>
            <ul>
                {
                    tasks.map(task => 
                        <li key={task.id}><input type="checkbox" 
                                                checked={!task.pending} 
                                                onChange = {( ) => {this.props.togglePending(task)}}/> 
                                        {task.name}
                        </li>)
                }
            </ul>                
            </div>
            </div>}
}