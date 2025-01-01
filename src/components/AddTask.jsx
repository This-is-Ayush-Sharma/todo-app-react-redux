import React, { useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../store/index";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const AddTask = () => {
  const dispatch = useDispatch();

  const task = useRef(null);
  const date = useRef(null);

  const addTaskHandler = useCallback(
    (e) => {
      e.preventDefault();
      const taskValue = task.current.value;
      const dateValue = date.current.value;

      dispatch(todoAction.addTodo({ id: uuidv4(), taskValue, dateValue }));
      Swal.fire("Todo Added!", "", "success");

      // Clear the input fields after adding the task
      task.current.value = "";
      date.current.value = "";
    },
    [dispatch]
  );

  return (
    <form
      className="mt-6 space-y-12 lg:grid lg:grid-cols-3  lg:space-y-0 gap-8"
      onSubmit={addTaskHandler}
    >
      <label
        htmlFor="todoName"
        className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          // type="email"
          id="todoName"
          // placeholder="Email"
          ref={task}
          type="text"
          name=""
          required={true}
          placeholder="Add your task here"
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
          Enter your task
        </span>
      </label>

      <label
        htmlFor="todoDate"
        className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          // type="email"
          id="todoDate"
          // placeholder="Email"
          ref={date}
          required={true}
          type="date"
          placeholder="Add your task here"
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
          Date
        </span>
      </label>

      <button
        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
