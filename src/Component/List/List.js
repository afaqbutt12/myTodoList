
import { useContext, useState } from "react";
import { Context } from "../Context/Store";
import React, { useEffect } from "react";
import * as action from "../Store/Action";

const List = ({ toupdate }) => {
  const [updated, setupdated] = useState('')
  
  const [state, dispatch] = useContext(Context);
  
  useEffect(() => {
    
    const mydata=(async () => {
      const test= await action.GetList();
     await dispatch({type: 'ViewList', payload: test});
   
    })
    mydata();
    // console.log("updATES==>",state.UpdatedlistData);
    if(state.UpdatedlistData){
    setupdated(state.UpdatedlistData)
    }
  },[toupdate,state.UpdatedlistData])
 
  
 
  const del = async (id) => {
    await action.Todelete(id={id})
    return toupdate();
  };
useEffect( () => {
  const edit=(async () => {
  
  if(updated)
  {await action.ToEdit(updated)
  return toupdate()}
  
  })
  edit()
}, [updated])
  const edit = async (index) => {
    let edititem = state.ListData.find((element) => {
      return element.id === index;
    });
    let abc = prompt("Please enter your name", edititem.content);
    
    let newTaskData = {
      content: abc,
    };
   
    await dispatch({type: 'EditList', payload:{edititem,newTaskData} });
    // console.log("updATES==>",updated);
    // await action.ToEdit(edititem={edititem} ,newTaskData)
    //     return toupdate();
    
  };

 
  return (
    <>
      {
        <div className="showItem text-white">{state.ListData?.map((items) => {
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
     }
     
    </>
  );
};

export default List;
