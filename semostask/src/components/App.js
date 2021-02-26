import React from 'react';
import { Input } from './Input';

export default class App extends React.Component{

  constructor(props) {
    super(props);
    
    this.state = {
      date: "",
      task: "",
      bTime: "",
      eTime: "",
      priority: "",
      addTask: []
    }
  }




  TaskChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.vlaue
    });
  }

  AddTask = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <table className="table" style={{border: "1px solid black"}}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Task</th>
              <th>Begin Time</th>
              <th>End Time</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>

        <form onSubmit={this.AddTask}>
        <Input
        handleChange={this.TaskChangeHandler}
        name="date"
        type="date"
        placeholder="date"
        />
        <Input
        handleChange={this.TaskChangeHandler}
        name="task"
        type="text"
        placeholder="Task"
        />
        <Input
        handleChange={this.TaskChangeHandler}
        name="bTime"
        type="text"
        placeholder="Begin time"
        />
        <Input
        handleChange={this.TaskChangeHandler}
        name="eTime"
        type="text"
        placeholder="End time"
        />
        <Input
        handleChange={this.TaskChangeHandler}
        name="priority"
        type="number"
        placeholder="Priority"
        />
        <button>Add</button>
        </form>
      </div>
    )
  }
}