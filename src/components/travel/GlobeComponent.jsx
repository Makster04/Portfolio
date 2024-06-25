import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import markers from "./markers"; // Adjust the import path accordingly

const GlobeComponent = () => {
  const globeEl = useRef(null);

  useEffect(() => {
    const globe = globeEl.current;

    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5; // Adjust the speed of rotation
    }
  }, []);

  const pinsData = markers.map((marker) => ({
    lat: marker.lat,
    lng: marker.long,
    size: 10,
    texture: "https://img.icons8.com/color/48/000000/map-pin.png", // Replace with your new pin image URL
  }));

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <Globe
        ref={globeEl}
        width={window.innerWidth}
        height={window.innerHeight}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0, 0, 0, 0)" // Set the background color to transparent
        pointsData={pinsData}
        pointAltitude="size"
        pointRadius={0.2} // Adjust the radius of the points if needed
        pointTexture={(datum) => datum.texture} // Use custom texture for each pin
      />
    </div>
  );
};

export default GlobeComponent;

