import { MapPin } from "lucide-react";

const parks = [
  { name: "Parque Simón Bolívar", zone: "Teusaquillo" },
  { name: "Parque Nacional Olaya Herrera", zone: "Chapinero" },
  { name: "Parque El Tunal", zone: "Tunjuelito" },
  { name: "Parque de la 93", zone: "Chicó" },
  { name: "Parque Salitre Mágico", zone: "Teusaquillo" },
  { name: "Jardín Botánico José Celestino Mutis", zone: "Engativá" },
];

export function MapSection() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600 mb-4">
        Parques destacados de Bogotá
      </p>
      <div className="space-y-3">
        {parks.map((park, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
          >
            <MapPin className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-800">{park.name}</h3>
              <p className="text-sm text-gray-600">{park.zone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
