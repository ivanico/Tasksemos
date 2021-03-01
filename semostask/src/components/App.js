import React,{useState} from 'react';
import InputField from './InputField';
const App = () => {
  const [visible,setVisible] = useState(!1);
  const [date,setDate] = useState('');
  const [task,setTask] = useState('');
  const [beginTime,setBeginTime] = useState('');
  const [endTime,setEndTime] = useState('');
  const [priority,setPriority] = useState('');

  const [taskArray,setTaskArray] = useState([]);

  const createNewTaskArray = () => {
    const newTaskArray = taskArray.slice();
    const newObj = {
      date,
      task,
      beginTime,
      endTime,
      priority
    };
    newTaskArray.push(newObj);
    return newTaskArray;
  }
  
  const addNewTask = () => {
    const newTaskArray = createNewTaskArray();
    setTaskArray(newTaskArray);
    setVisible(false);
  }
    return(
      <div id="main">
        <table id="table" style={{border: "1px solid black"}}>
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
          {taskArray.map((a,ind)=> (<tr key={ind}>
            <td>{a.date}</td>
            <td>{a.task}</td>
            <td>{a.beginTime}</td>
            <td>{a.endTime}</td>
            <td>{a.priority}</td>
          </tr>))}
          </tbody>
        </table>
        <div id="newtasks">
        {!visible && <button id="btnNew" onClick={()=> setVisible(true)}>Add New</button>}
        {visible &&
        <React.Fragment>
          <InputField 
          handleChange={setDate}
          value={date}
          type="date"
          />
          <InputField 
          handleChange={setTask}
          value={task}
          type="text"
          placeholder="Task"
          />
          <InputField 
          handleChange={setBeginTime}
          value={beginTime}
          type="text"
          placeholder="Begin time"
          />
          <InputField 
          handleChange={setEndTime}
          value={endTime}
          type="text"
          placeholder="End time"
          />
          <InputField 
          handleChange={setPriority}
          value={priority}
          type="number"
          placeholder="Priority"
          />
          <button onClick={()=> addNewTask()}>Add</button>
          <button onClick={()=> setVisible(false)}>Cancel</button>
        </React.Fragment>
        }</div>
      </div>
    )
}

export default App;