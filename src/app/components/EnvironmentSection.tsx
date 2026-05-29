import { Leaf } from "lucide-react";

const recommendations = [
  "Deposita los residuos en las canecas correspondientes",
  "No pises zonas reforestadas o en recuperación",
  "Respeta la fauna urbana (aves, ardillas, insectos)",
  "Utiliza los senderos marcados para proteger la vegetación",
  "Participa en jornadas de limpieza y plantación",
];

export function EnvironmentSection() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600 mb-4">
        Recomendaciones para el cuidado ambiental de nuestros parques
      </p>
      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl"
          >
            <Leaf className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <p className="text-gray-800">{rec}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
