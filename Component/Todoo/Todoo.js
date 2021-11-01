import React, { useContext, useState } from "react";
import "./Style.css";
import * as action from "../API_actions/Action";
import { Context } from "../Context/Store";
const Todoo = ({ toupdate }) => {
  const [taskName, setTaskName] = useState("");
  const [state, dispatch] = useContext(Context);

  const AddTask = async () => {
    let newTaskData = {
      content: taskName,
    };
    dispatch(await action.ToAddNewTask(newTaskData));
    return toupdate();
  };

  const AddTaskHandler = async (e) => {
    e.preventDefault();

    taskName && AddTask();
    setTaskName("");
  };

  return (
    <form onSubmit={AddTaskHandler}>
      <div className="addItems">
        <input
          type="text"
          placeholder="✍ Add Items"
          value={taskName}
          className="form-control"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button className="fa fa-plus add-btn" type="submit"></button>
        </div>
        </form>
        );
        };
        
        export default Todoo;
//  {toogle ? (
//           ) : (
//           <i className="far fa-edit add-btn" onClick={AddTaskHandler}></i>
//         )}

//        </div>
//       </div> 
