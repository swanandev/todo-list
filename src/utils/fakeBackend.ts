import { TodoItemType } from "../components/TodoItem";
import { todoStateType } from "../store/slices/TodoSlice";

const storageKey = "TODOS";

export const getTodosAPI = () => {
  let todosStr = localStorage.getItem(storageKey);
  //   if (todosStr) return JSON.parse(todosStr);
  //   else
  //     return {
  //       pending: [],
  //       doing: [],
  //       done: [],
  //     };

  return todosStr
    ? JSON.parse(todosStr)
    : {
        pending: [],
        doing: [],
        done: [],
      };
};

export const saveTododsAPI = (todos: todoStateType) => {
  let todosStr = JSON.stringify(todos);
  localStorage.setItem(storageKey, todosStr);
};