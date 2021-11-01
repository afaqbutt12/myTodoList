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
    <>
      <div className="addItems">
        <input
          type="text"
          placeholder="✍ Add Items"
          value={taskName}
          className="form-control"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <i className="fa fa-plus add-btn" onClick={AddTaskHandler}></i>
        {/* {toogle ? (
          ) : (
          <i className="far fa-edit add-btn" onClick={AddTaskHandler}></i>
        )} */}
      </div>

      {/* </div>
      </div> */}
    </>
  );
};

export default Todoo;
