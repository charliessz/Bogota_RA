const parkDetails = [
  {
    name: "Parque Simón Bolívar",
    location: "Teusaquillo",
    activities: "Deporte, picnic, conciertos",
    services: "Ciclovía, baños, zonas verdes amplias",
  },
  {
    name: "Parque Nacional",
    location: "Chapinero",
    activities: "Caminatas, áreas para niños, recreación",
    services: "Senderos, lago, zonas de descanso",
  },
  {
    name: "Parque El Tunal",
    location: "Tunjuelito",
    activities: "Fútbol, atletismo, eventos culturales",
    services: "Canchas deportivas, biblioteca, parqueadero",
  },
];

export function InfoSection() {
  return (
    <div className="space-y-4">
      {parkDetails.map((park, index) => (
        <div key={index} className="p-4 bg-blue-50 rounded-xl space-y-2">
          <h3 className="font-bold text-lg text-gray-800">{park.name}</h3>
          <div className="space-y-1 text-sm">
            <p className="text-gray-700">
              <span className="font-semibold">Ubicación:</span> {park.location}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Actividades:</span> {park.activities}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Servicios:</span> {park.services}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
