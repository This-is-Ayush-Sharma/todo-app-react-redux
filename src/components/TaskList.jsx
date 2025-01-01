import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoAction } from "../store/index";
import Swal from "sweetalert2";

const TaskList = () => {
  const todo = useSelector((store) => store.todos);

  const dispatch = useDispatch();

  const deleteHandler = useCallback(
    (id) => {
      Swal.fire({
        title: "Are you sure you want to delete this todo?",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        icon: "warning",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Todo item deleted", "", "success");
          dispatch(todoAction.deleteTodo(id));
        } else {
          Swal.fire("Todo item cannot be deleted", "", "error");
        }
      });
    },
    [dispatch]
  );

  return (
    <>
      <h2 className="mt-10 font-bold text-2xl">Task List</h2>
      <hr />
      <div className="mt-5 conatiner grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="mx-auto font-bold">Task</div>
        <div className="mx-auto font-bold">Date</div>
        <div className="mx-auto font-bold">Action</div>
      
        {todo.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div className="rounded-lg bg-gray-200 p-4">{item.taskValue}</div>
              <div className="p-4 mx-auto">{item.dateValue}</div>
              <div className="p-4 mx-auto">
                <button
                  className="inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
                  onClick={() => deleteHandler(item.id)}
                >
                  Delete
                </button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default TaskList;
