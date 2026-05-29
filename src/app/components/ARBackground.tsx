import { useEffect } from "react";

const HIRO_PATTERN =
  "https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@3.4.5/data/data/patt.hiro";

interface ARBackgroundProps {
  onMarkerFound?: () => void;
  onMarkerLost?: () => void;
  selectedPark?: string | null;
}

export function ARBackground({ onMarkerFound, onMarkerLost, selectedPark }: ARBackgroundProps) {
  useEffect(() => {
    const marker = document.querySelector("#hiro-marker");
    if (!marker) return;

    const onFound = () => onMarkerFound?.();
    const onLost = () => onMarkerLost?.();

    marker.addEventListener("markerFound", onFound);
    marker.addEventListener("markerLost", onLost);

    return () => {
      marker.removeEventListener("markerFound", onFound);
      marker.removeEventListener("markerLost", onLost);
    };
  }, [onMarkerFound, onMarkerLost]);

    return (
    <div className="ar-viewport fixed inset-0 z-0 overflow-hidden">
      <a-scene
        embedded
        vr-mode-ui="enabled: false"
        renderer="logarithmicDepthBuffer: true; precision: medium;"
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false; detectionMode: mono;"
      >
        <a-marker
          type="pattern"
          url={HIRO_PATTERN}
          emitevents="true"
          id="hiro-marker"
        >
          <a-entity scale="0.55 0.55 0.55">
            <a-plane
              position="0 0 0"
              rotation="-90 0 0"
              width="2"
              height="2"
              color="#7EC850"
            />
            {/* Placeholder for selected park 3D model. Models should be placed in `public/models/` */}
            {renderParkModel(selectedPark)}
          </a-entity>
        </a-marker>
        <a-entity camera />
      </a-scene>
    </div>
  );
}

function renderParkModel(selectedPark?: string | null) {
  if (!selectedPark) return null;

  const models: Record<string, string> = {
    "Parque Simón Bolívar": "C:/Users/Andres Siza/OneDrive/Escritorio/bogota_ra/models/Simon_Bolivar.glb",
    "Parque Nacional Olaya Herrera": "/models/parque_olaya_herrera.glb",
    "Parque El Tunal": "/models/parque_el_tunal.glb",
    "Parque de la 93": "/models/parque_de_la_93.glb",
    "Parque Salitre Mágico": "/models/parque_salitre_magico.glb",
    "Jardín Botánico José Celestino Mutis": "/models/jardin_botanico_mutis.glb",
  };

  const modelUrl = models[selectedPark];
  if (!modelUrl) return null;

  return (
    // Use `gltf-model` component to load glTF/glb models. Adjust scale/position per model as needed.
    // A-Frame accepts attributes as strings.
    <a-entity gltf-model={`url(${modelUrl})`} scale="0.5 0.5 0.5" position="0 0 0" />
  );
}
