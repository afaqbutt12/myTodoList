import axios from "axios";

export const GetList = async() => {
   let response = await axios
    .get("https://api.todoist.com/rest/v1/tasks", {
      headers: {
        Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
      },
    })

    return response.data
};

export const Todelete = async (id)=>{
    console.log(id);
    let myid=id.id
    await axios
    .delete(`https://api.todoist.com/rest/v1/tasks/${myid}`, {
      headers: {
        Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
      },
    }).then((response) => {
            console.log("res", response); 
          })
          .catch((err) => console.log("err",err.message));
}
export const ToEdit =async ({edititem,newTaskData})=>{
    await axios
      .post(
        `https://api.todoist.com/rest/v1/tasks/${edititem.id}`,
        newTaskData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
          },
        }
      )
}

export const ToAddNewTask= async ({newTaskData})=>{
    console.log(newTaskData);
   await axios
    .post("https://api.todoist.com/rest/v1/tasks", newTaskData, {
      headers:{
        "Content-Type": "application/json",
        Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
      },
    })
}