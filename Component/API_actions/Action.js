import axios from "axios";

export const setViewTask = (value) => ({ type: "ViewList", payload: value });
export const setAddTask = (value) => ({ type: "AddTask", payload: value });
export const setEditTask = (value) => ({ type: "EditList", payload: value });
export const setDeleteTask = (value) => ({
  type: "DeleteListItem",
  payload: value,
});

export const GetList = async () => {
  let response = await axios.get("https://api.todoist.com/rest/v1/tasks", {
    headers: {
      Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
    },
  });

  return setViewTask(response.data);
};

export const Todelete = async (id) => {
  await axios
    .delete(`https://api.todoist.com/rest/v1/tasks/${id}`, {
      headers: {
        Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
      },
    })
    .then((response) => {
      console.log("res==>", response);
    })
    .catch((err) => console.log("err", err.message));
  return setDeleteTask(id);
};
export const ToEdit = async (newTaskData) => {
  await axios.post(
    `https://api.todoist.com/rest/v1/tasks/${newTaskData.edititem.id}`,
    newTaskData.updated,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
      },
    }
  );
  return setEditTask(newTaskData);
};

export const ToAddNewTask = async (newtask) => {
  await axios.post("https://api.todoist.com/rest/v1/tasks", newtask, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
    },
  });
  return setAddTask(newtask);
};
