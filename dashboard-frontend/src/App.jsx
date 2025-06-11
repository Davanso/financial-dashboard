// import { useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";

export default function App() {
  // Hooks
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Efeito para carregar as tarefas do localStorage ao iniciar o aplicativo
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Função para alternar o estado de conclusão da tarefa
  const onTaskClick = (taskId) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Função para adicionar uma nova tarefa
  const onAddTask = (title, description) => {
    const newTask = {
      id: Date.now(), // Gerar um ID único baseado no timestamp
      title,
      description,
      isCompleted: false,
    };
    setTask((prevTasks) => [...prevTasks, newTask]);
  };

  // Funcao para deletar uma tarefa
  const onDeleteTask = (task) => {
    setTask((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTasks onAddTask={onAddTask} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}
