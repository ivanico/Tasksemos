import React,{useState} from 'react';
import InputField from './InputField';


const App = () => {
  const [visible,setVisible] = useState(!1);
  const [date,setDate] = useState('');
  const [task,setTask] = useState('');
  const [beginTime,setBeginTime] = useState('');
  const [endTime,setEndTime] = useState('');
  const [priority,setPriority] = useState('');
  const [dateValidation, setDateVal] = useState('');
  const [taskValidation, setTaskVal] = useState('');
  const [bTimeValidation, setBTimeVal] = useState('');
  const [eTimeValidation, setETimeVal] = useState('');
  const [priorityValidation, setPriorityVal] = useState('');

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

  const validateField = () => {
    let dateValidation = '';
    let taskValidation = '';
    let bTimeValidation = '';
    let eTimeValidation = '';
    let priorityValidation = '';

    if(!date) {
      dateValidation = 'No Date'
    }
    if(!task) {
      taskValidation = 'No Task'
    }
    if(task.length > 250) {
      taskValidation = 'Task is to big'
    }
    if(!beginTime) {
      bTimeValidation = 'No Begin Time'
    }
    if(!endTime){
      eTimeValidation = "No End Time"
    }
    if(!priority){
      priorityValidation = "No Priority"
    }
    if(dateValidation){
      setDateVal(dateValidation);
      return false;
    }
    if(taskValidation){
      setTaskVal(taskValidation);
      return false;
    }
    if(bTimeValidation){
      setBTimeVal(bTimeValidation);
      return false;
    }
    if(eTimeValidation){
      setETimeVal(eTimeValidation);
      return false;
    }
    if(priorityValidation){
      setPriorityVal(priorityValidation);
      return false;
    }
    return true;
  };
  
  
  const addNewTask = () => {
    const valid = validateField();
    if (valid) {
    const newTaskArray = createNewTaskArray();
    setTaskArray(newTaskArray);
    setVisible(false);
    setDate('');
    setTask('');
    setBeginTime('');
    setEndTime('');
    setPriority('');
    setDateVal('');
    setTaskVal('');
    setBTimeVal('');
    setETimeVal('');
    setPriorityVal('');
    }
    
  };
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
          <span>{dateValidation}</span>
          <InputField 
          handleChange={setDate}
          value={date}
          type="date"
          />
          <span>{taskValidation}</span>
          <InputField 
          handleChange={setTask}
          value={task}
          type="text"
          placeholder="Task"
          />
          <span>{bTimeValidation}</span>
          <InputField 
          handleChange={setBeginTime}
          value={beginTime}
          type="text"
          placeholder="Begin time"
          />
          <span>{eTimeValidation}</span>
          <InputField 
          handleChange={setEndTime}
          value={endTime}
          type="text"
          placeholder="End time"
          />
          <span>{priorityValidation}</span>
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