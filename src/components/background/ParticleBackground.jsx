import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
      }}
      options={{
        background: {
          color: "#000000", // Change background color
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 80, // Increase the number of particles
            density: {
              enable: true,
              value_area: 800, // Increase the density
            },
          },
          color: {
            value: ["#ffffff", "#ff4081", "#ffd740"], // White, pink, and yellow colors
          },
          shape: {
            type: "circle", // Change particle shape to circle
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.7, // Increase opacity
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 8, // Decrease particle size
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150, // Decrease distance between particles
            color: "#ffffff",
            opacity: 0.4, // Reduce line opacity
            width: 1,
          },
          move: {
            enable: true,
            speed: 1, // Increase particle speed
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse", // Change hover interaction to repulse
            },
            onclick: {
              enable: true,
              mode: "push", // Enable click interaction with push mode
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 100, // Decrease repulse distance
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticleBackground;



// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const ParticleBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);
//     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     console.log(container);
//   }, []);
//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       style={{
//         width: "100%",
//         height: "100%",
//         position: "absolute",
//         top: "0",
//         left: "0",
//       }}
//       params={{
//         background: {
//           color: "#152b61",
//         },
//         fullScreen: {
//           enable: true,
//           zIndex: -1,
//         },
//         particles: {
//           number: {
//             value: 25,
//             density: {
//               enable: true,
//               value_area: 800,
//             },
//           },
//           color: {
//             value: "#ffffff",
//           },
//           shape: {
//             type: "circle",
//             stroke: {
//               width: 0,
//               color: "#000000",
//             },
//             polygon: {
//               nb_sides: 5,
//             },
//             image: {
//               src: "img/github.svg",
//               width: 100,
//               height: 100,
//             },
//           },
//           opacity: {
//             value: 0.5,
//             random: false,
//             anim: {
//               enable: false,
//               speed: 1,
//               opacity_min: 0.1,
//               sync: false,
//             },
//           },
//           size: {
//             value: 3,
//             random: true,
//             anim: {
//               enable: false,
//               speed: 40,
//               size_min: 0.1,
//               sync: false,
//             },
//           },
//           line_linked: {
//             enable: true,
//             distance: 150,
//             color: "#ffffff",
//             opacity: 0.4,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 3,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false,
//             attract: {
//               enable: false,
//               rotateX: 600,
//               rotateY: 1200,
//             },
//           },
//         },
//         interactivity: {
//           detect_on: "canvas",
//           events: {
//             onhover: {
//               enable: false,
//               mode: "repulse",
//             },
//             onclick: {
//               enable: false,
//               mode: "push",
//             },
//             resize: true,
//           },
//           modes: {
//             grab: {
//               distance: 400,
//               line_linked: {
//                 opacity: 1,
//               },
//             },
//             bubble: {
//               distance: 400,
//               size: 40,
//               duration: 2,
//               opacity: 8,
//               speed: 3,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//             },
//             push: {
//               particles_nb: 4,
//             },
//             remove: {
//               particles_nb: 2,
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// };

// export default ParticleBackground;
