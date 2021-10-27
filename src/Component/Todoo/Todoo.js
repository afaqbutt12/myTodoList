import axios from "axios";
import React, { useState} from "react";
import "./Style.css";
const Todoo = ({ handleToggleSidebar }) => {
  const [taskName, setTaskName] = useState("");

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
  };

  const AddTask = () => {
    console.log("adding task==>");
    const newTaskData = {
      content: taskName,
    };
    axios
      .post("https://api.todoist.com/rest/v1/tasks", newTaskData, {
        headers,
      })
      .then((response) => {
        console.log("respons data....>",response.data);
      return handleToggleSidebar()})
      .catch((err) => console.log(err.message));
  };

  const AddTaskHandler = (e) => {
    e.preventDefault();
    taskName && AddTask();
    setTaskName('')
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
