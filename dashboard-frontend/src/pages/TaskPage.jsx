import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function TaskPage() {
  // Hooks
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Obtendo os parâmetros da URL
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    // Div principal
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      {/* Container para os detalhes da tarefa */}
      <div className="w-[500px] space-y-4">
        {/* Cabecalho com botao de voltar e titulo*/}
        <div className="flex justify-center relative">
          {/* Botao de voltar */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-3 top-0 bottom-0 text-slate-100 cursor-pointer"
          >
            <ChevronLeftIcon />
          </button>
          {/* Titulo */}
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        {/* Title e description da tarefa */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
