import { useState } from "react";
import { Map, Info, ShieldCheck, Leaf } from "lucide-react";
import { MenuButton } from "./components/MenuButton";
import { SectionPanel } from "./components/SectionPanel";
import { MapSection } from "./components/MapSection";
import { InfoSection } from "./components/InfoSection";
import { RulesSection } from "./components/RulesSection";
import { EnvironmentSection } from "./components/EnvironmentSection";
import { ARBackground } from "./components/ARBackground";
import { useEffect } from "react";

type Section = "map" | "info" | "rules" | "environment" | null;

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>(null);
  const [markerDetected, setMarkerDetected] = useState(false);
  const [selectedPark, setSelectedPark] = useState<string | null>(null);

  useEffect(() => {
    // Close any open section when the marker is lost.
    if (!markerDetected) {
      setActiveSection(null);
    }
  }, [markerDetected]);

  return (
    <div className="size-full relative overflow-hidden">
      <ARBackground
        onMarkerFound={() => setMarkerDetected(true)}
        onMarkerLost={() => setMarkerDetected(false)}
        selectedPark={selectedPark}
      />

      {/* Aviso de marcador Hiro */}
      <div
        className={`fixed top-3 left-3 right-3 z-20 rounded-xl px-4 py-2.5 text-center text-sm font-medium shadow-lg pointer-events-none transition-colors ${
          markerDetected
            ? "bg-green-700/90 text-white"
            : "bg-black/75 text-white"
        }`}
      >
        {markerDetected
          ? "Marcador Hiro detectado. Explora el menú o mira el parque en 3D."
          : "Apunta la cámara al marcador Hiro (impreso o en otra pantalla)."}
      </div>

      {/* Interfaz sobre la cámara AR */}
      <div className="relative z-10 size-full flex flex-col items-center justify-end sm:justify-center p-4 sm:p-6 pb-6 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-md flex flex-col gap-4 sm:gap-6">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-5 sm:p-8 text-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-green-700 mb-2">
              Bogotá Verde AR
            </h1>
            <p className="text-sm sm:text-lg text-gray-700 mb-1">
              Explora y cuida los parques de Bogotá
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Toca un ícono para abrir cada sección.
            </p>
          </div>

          <div className="bg-white/85 backdrop-blur-md rounded-3xl shadow-2xl p-5 sm:p-8">
            <p className="text-sm text-gray-700 text-center mb-4 sm:mb-6 font-medium">
              Selecciona una sección:
            </p>
            {markerDetected ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-6 place-items-center">
                <MenuButton
                  icon={Map}
                  label="Mapa de parques"
                    onClick={() => setActiveSection("map")}
                />
                <MenuButton
                  icon={Info}
                  label="Información"
                  onClick={() => setActiveSection("info")}
                />
                <MenuButton
                  icon={ShieldCheck}
                  label="Normas"
                  onClick={() => setActiveSection("rules")}
                />
                <MenuButton
                  icon={Leaf}
                  label="Cuidado ambiental"
                  onClick={() => setActiveSection("environment")}
                />
              </div>
            ) : (
              <div className="text-center text-sm text-gray-600 py-6">
                Escanea el marcador Hiro para desplegar el menú.
              </div>
            )}
          </div>
        </div>
      </div>

      {activeSection === "map" && (
        <SectionPanel title="Mapa de parques" onClose={() => setActiveSection(null)}>
          <MapSection
            selectedPark={selectedPark}
            onSelectPark={(name) => {
              setSelectedPark(name);
              // close panel so the AR view can display the model
              setActiveSection(null);
            }}
          />
        </SectionPanel>
      )}
      {activeSection === "info" && (
        <SectionPanel title="Información" onClose={() => setActiveSection(null)}>
          <InfoSection />
        </SectionPanel>
      )}
      {activeSection === "rules" && (
        <SectionPanel title="Normas de uso" onClose={() => setActiveSection(null)}>
          <RulesSection />
        </SectionPanel>
      )}
      {activeSection === "environment" && (
        <SectionPanel
          title="Cuidado ambiental"
          onClose={() => setActiveSection(null)}
        >
          <EnvironmentSection />
        </SectionPanel>
      )}
    </div>
  );
}
