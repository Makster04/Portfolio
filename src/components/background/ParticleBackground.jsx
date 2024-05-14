import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "black",
          },
          image: "linear-gradient(135deg, grey 0%, black 100%)",
          position: "absolute",
          repeat: "no-repeat",
          size: "cover",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onDiv: {
              selectors: "#tsparticles",
              enable: true,
              mode: "bounce",
              type: "rectangle",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            bounce: {
              distance: 200,
            },
          },
        },
        particles: {
          color: {
            value: ["#ffffff", "#ff4081", "#3f51b5", "#00e676"],
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2, // Increase line width
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1, // Constant speed
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 130,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: ["circle", "triangle"],
          },
          size: {
            random: true,
            value: 10,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;
