import { useEffect } from "react";

const HIRO_PATTERN =
  "https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@3.4.5/data/data/patt.hiro";

interface ARBackgroundProps {
  onMarkerFound?: () => void;
  onMarkerLost?: () => void;
}

export function ARBackground({ onMarkerFound, onMarkerLost }: ARBackgroundProps) {
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
            <a-cylinder
              position="-0.5 0.35 -0.35"
              radius="0.05"
              height="0.35"
              color="#8B5A2B"
            />
            <a-sphere position="-0.5 0.65 -0.35" radius="0.18" color="#228B22" />
            <a-cylinder
              position="0.5 0.35 -0.35"
              radius="0.05"
              height="0.35"
              color="#8B5A2B"
            />
            <a-sphere position="0.5 0.65 -0.35" radius="0.18" color="#2E8B57" />
            <a-box
              position="0.35 0.15 0.15"
              depth="0.2"
              height="0.08"
              width="0.45"
              color="#B5651D"
            />
            <a-cylinder
              position="-0.2 0.15 0.55"
              radius="0.08"
              height="0.28"
              color="#2E8B57"
            />
          </a-entity>
        </a-marker>
        <a-entity camera />
      </a-scene>
    </div>
  );
}
