import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Task } from "../interfaces/Task";
import { AiOutlinePlus } from "react-icons/ai";

interface Props {
  addANewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const inititalState = {
  name: "",
  code:"",
  model:"",
  description: "",
};

export const TaskForm = ({ addANewTask }: Props) => {
  const [task, setTask] = useState<Task>(inititalState);
  const titleInput = useRef<HTMLInputElement>(null);

  const handleNewTask = (e: FormEvent<HTMLFormElement>): any => {
    e.preventDefault();
    addANewTask(task);
    setTask(inititalState);
    titleInput.current?.focus();
  };

  const handleInputChange = ({ target: { name, value } }: HandleInputChange) =>
    setTask({ ...task, [name]: value });

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add a Product</h1>

      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Add Name Product"
          name="name"
          onChange={handleInputChange}
          value={task.name}
          className="form-control mb-3 rounded-0 shadow-none border-0"
          
        />
          <input
          type="text"
          placeholder="Add Code Product"
          name="code"
          onChange={handleInputChange}
          value={task.code}
          className="form-control mb-3 rounded-0 shadow-none border-0"
         
        />
          <input
          type="text"
          placeholder="Add Model Product"
          name="model"
          onChange={handleInputChange}
          value={task.model}
          className="form-control mb-3 rounded-0 shadow-none border-0"
        
        />
        <textarea
          onChange={handleInputChange}
          name="description"
          className="form-control mb-3 shadow-none border-0"
          placeholder="Write a Description"
          value={task.description}
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};