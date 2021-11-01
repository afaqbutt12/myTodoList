import { useContext } from "react";
import { Context } from "../Context/Store";
import React, { useEffect } from "react";
import * as action from "../API_actions/Action";

const List = ({ toupdate }) => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const mydata = async () => {
      dispatch(await action.GetList());
    };
    mydata();
  }, [toupdate]);

  const del = async (id) => {
    dispatch(await action.Todelete(id));
    return toupdate();
  };

  const edit = async (index) => {
    let edititem = state.ListData.find((element) => {
      return element.id === index;
    });
    let abc = prompt("Please enter your name", edititem.content);

    let newTaskData = {
      updated: { content: abc },
      edititem,
    };
    dispatch(await action.ToEdit(newTaskData));
    return toupdate();
  };

  return (
    <>
      <div className="showItem text-white">
        {state.ListData?.map((items) => {
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
        })}
      </div>
    </>
  );
};

export default List;
