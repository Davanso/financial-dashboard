import { ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Tasks({ tasks, onTaskClick, onDeleteTask }) {
  // Hook do React Router para navegação
  const navigate = useNavigate();

  // Função para navegar para a página de detalhes da tarefa
  const handleTaskDetails = (task) => {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/tasks?${query.toString()}`);
  };

  return (
    // Div principal
    <div className="bg-slate-200 p-6 rounded-md shadow">
      {/* Lista */}
      <ul className="space-y-4">
        {/* map para carregar cada task dentro de um li */}
        {tasks.map((tasks) => (
          <li key={tasks.id} className="flex gap-2">
            {/* Botao para marcar tarefa */}
            <button
              onClick={() => onTaskClick(tasks.id)}
              className={`bg-slate-400 text-white p-2 rounded-md w-full text-left cursor-pointer 
                ${tasks.isCompleted && "line-through bg-slate-600"}`}
            >
              {tasks.title}
            </button>
            {/* Botao para ver detalhes */}
            <button
              onClick={() => handleTaskDetails(tasks)}
              className="bg-slate-400 text-white p-2 rounded-md cursor-pointer hover:bg-slate-600"
            >
              <ChevronRightIcon />
            </button>
            {/* Botao para deletar */}
            <button
              onClick={() => onDeleteTask(tasks)}
              className="bg-slate-400 text-white p-2 rounded-md cursor-pointer hover:bg-slate-600"
            >
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
