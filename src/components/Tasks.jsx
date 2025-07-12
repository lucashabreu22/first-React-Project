import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function handleTaskClick(task) {
    const queryParams = new URLSearchParams();
    queryParams.set("title", task.title);
    queryParams.set("description", task.description);
    navigate(`/task?${queryParams.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full flex items-start gap-2 text-white p-2 rounded-md ${
              task.isComleted && "line-through"
            }`}
          >
            {task.isComleted && <CheckIcon></CheckIcon>}
            {task.title}
          </button>
          <Button onClick={() => handleTaskClick(task)}>
            <ChevronRightIcon></ChevronRightIcon>
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon></TrashIcon>
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
