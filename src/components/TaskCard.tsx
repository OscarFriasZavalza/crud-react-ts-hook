import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

export const TaskCard = ({ task, deleteATask }: Props) => (
  <div className="card card-body bg-secondary rounded-0">
    <h3>{task.name}</h3>
    <h6>ID</h6>
    <p>{task.id}</p>
    <h6>code</h6>
    <p>{task.code}</p>
    <h6>model</h6>
    <p>{task.model}</p>
    <h6>Description</h6>
    <p>{task.description}</p>
    <button
      className="btn btn-danger btn-block"
      onClick={() => task.id && deleteATask(task.id)}
    >
      Delete
    </button>
  </div>
);