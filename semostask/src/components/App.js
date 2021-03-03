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
      dateValidation = 'No Date, please select a date'
    }
    if(date){
      setDateVal('');
    }
    if(!task) {
      taskValidation = 'No Task, please add task'
    }
    if(task){
      setTaskVal('');
    }
    if(task.length > 250) {
      taskValidation = 'Task is to big'
    }
    if(task){
      setTaskVal('');
    }
    if(!beginTime) {
      bTimeValidation = 'No Begin Time, please add begin time'
    }
    if(beginTime) {
      setBTimeVal('');
    }
    if(!endTime){
      eTimeValidation = "No End Time, please add end time"
    }
    if(endTime) {
      setETimeVal('');
    }
    if(!priority){
      priorityValidation = "No Priority, please add priority"
    }
    if(priority) {
      setPriorityVal('');
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
          <span id="err-massage">{dateValidation}</span>
          <InputField 
          handleChange={setDate}
          value={date}
          type="date"
          />
          <span id="err-massage">{taskValidation}</span>
          <InputField 
          handleChange={setTask}
          value={task}
          type="text"
          placeholder="Task"
          />
          <span id="err-massage">{bTimeValidation}</span>
          <InputField 
          handleChange={setBeginTime}
          value={beginTime}
          type="text"
          placeholder="Begin time"
          />
          <span id="err-massage">{eTimeValidation}</span>
          <InputField 
          handleChange={setEndTime}
          value={endTime}
          type="text"
          placeholder="End time"
          />
          <span id="err-massage">{priorityValidation}</span>
          <InputField 
          handleChange={setPriority}
          value={priority}
          type="number"
          placeholder="Priority"
          />
          <button id="btnAdd" onClick={()=> addNewTask()}>Add</button>
          <button id="btnCancel" onClick={()=> setVisible(false)}>Cancel</button>
        </React.Fragment>
        }</div>
      </div>
    )
}

export default App;