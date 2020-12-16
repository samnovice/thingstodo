import React, { Component, createRef} from 'react';

export default class AddTask extends Component{
    constructor(props){
        super(props);

        this._taskName = createRef();
    }

    redirectToParent(){
        this.props.addTask(this._taskName.current.value);
        // console.log(this._taskName.current.value);
        this._taskName.current.value = "";
    }

    render(){
        return <div>
            <input type="text" placeholder="Enter task name" ref = {this._taskName}></input>&nbsp;
            <button onClick = {() => this.redirectToParent()}>Create</button>
            </div>
    }
}