import axios from "axios";

import React, { useEffect, useState } from "react";

const List = ({ handleToggleSidebar }) => {
  const [data, setdata] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.todoist.com/rest/v1/tasks", {
        headers: {
          Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
        },
      })
      .then((response) => {
        setdata(response.data);
        setLoading(true)
      })
      .catch((err) => console.log(err.message));
  }, [handleToggleSidebar]);

  const del = (id) => {
    setLoading(true)
    axios
      .delete(`https://api.todoist.com/rest/v1/tasks/${id}`, {
        headers: {
          Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
        },
      })
      .then((response) => {
        console.log("res", response);
        setLoading(false)

        return handleToggleSidebar()
      })
      .catch((err) => console.log(err.message));
  };



  const edit = (index) => {
    const edititem = data.find((element) => {
      return element.id === index;
    });
    const abc = prompt("Please enter your name", edititem.content);
    console.log(abc);

    const newTaskData = {
      content: abc,
    };
    axios
      .post(
        `https://api.todoist.com/rest/v1/tasks/${edititem.id}`,
        newTaskData,
        {
          headers : {
            "Content-Type": "application/json",
            Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
          }
        }
      )
      .then((response) => {
        setLoading(false)

        console.log("respons data....>", response);
        return handleToggleSidebar()
      })
      .catch((err) => console.log(err.message));
  };


  

  const list = data.map((items) => {
    return (
      <div className="eachItem" key={items.id}>
        <h1>{items.content}</h1>
        <div className="todo-btn">
          <i
            className="far fa-edit add-btn"
            onClick={() => edit(items.id)}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          ></i>
          <i
            className="far fa-trash-alt add-btn"
            onClick={() => del(items.id)}
          ></i>
        </div>
      </div>
    );
  });
  return (
    <>
      {Loading ?

      <div className="showItem text-white">{list}</div>: <div className="loading">
      <h1>loading</h1>
     
    </div>}
      
    </>
  );
};

export default List;
