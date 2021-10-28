import axios from "axios";
// import { GetList } from "../Store/Action";
import React, { useEffect, useState } from "react";
import * as action from "../Store/Action";

const List = ({ toupdate }) => {
  const [data, setdata] = useState([]);
  const [Loading, setLoading] = useState(false);

  

  useEffect(() => {

   const mydata=(async () => {
      const test= await action.GetList();
      setdata(test);
    })
    mydata();
    
  },[toupdate])
 
  const del = async (id) => {
    await action.Todelete(id={id})
    return toupdate();
  };

  const edit = async (index) => {
    let edititem = data.find((element) => {
      return element.id === index;
    });
    let abc = prompt("Please enter your name", edititem.content);
    console.log(abc);

    let newTaskData = {
      content: abc,
    };
    
    await action.ToEdit(edititem={edititem} ,newTaskData={newTaskData})
        return toupdate();
    
  };

  const postDataHandler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        body: JSON.stringify({
          title: "afaq",
          body: "brainz",
          userId: 10000111,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => console.log("res....",response));
  };

  const getDataHandler = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => console.log(response.data));
  };
  return (
    <>
      {!Loading ? (
        <div className="showItem text-white">{data?.map((items) => {
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
        })}</div>
      ) : (
        <div className="loading">
          <h1>loading</h1>
        </div>
      )}
      <button onClick={postDataHandler}>postdata</button>

      <button onClick={getDataHandler}>getdata</button>
    </>
  );
};

export default List;
