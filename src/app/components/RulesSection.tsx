import { CheckCircle } from "lucide-react";

const rules = [
  "Cuida el mobiliario urbano",
  "Respeta las zonas peatonales y ciclorrutas",
  "Controla tus mascotas con correa",
  "No hagas fogatas ni parrillas fuera de las zonas permitidas",
  "Mantén el volumen bajo en zonas de descanso",
];

export function RulesSection() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600 mb-4">
        Normas básicas para el uso responsable de los parques
      </p>
      <div className="space-y-3">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl"
          >
            <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-gray-800">{rule}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
