import { useState } from "react";

export default function AddTasks({ onAddTask }) {
  // State lidar com o clique no botão de adicionar tarefa
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    // Div principal
    <div className=" space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      {/* Input de titulo */}
      <input
        className="border border-slate-300 outline-state-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* input de descricao */}
      <input
        className="border border-slate-300 outline-state-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* botao de adicionar tarefa */}
      <button
        onClick={() => {
          // Verificar se o título e a descrição não estão vazios
          if (!title.trim() || !description.trim()) {
            alert("Por favor, preencha o título e a descrição da tarefa.");
            return;
          }
          onAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white font-medium p-2 rounded-md mt-4 cursor-pointer hover:bg-slate-600"
      >
        Adicionar tarefa
      </button>
    </div>
  );
}
