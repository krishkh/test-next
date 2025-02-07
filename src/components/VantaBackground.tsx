// "use client";

// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

// const VantaBackground = () => {
//   const vantaRef = useRef<HTMLDivElement>(null);
//   const [vantaEffect, setVantaEffect] = useState<any>(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // Dynamically load Vanta.js to prevent SSR issues
//       import("vanta/dist/vanta.net.min").then((VANTA) => {
//         if (!vantaEffect && vantaRef.current) {
//           setVantaEffect(
//             VANTA.default({
//               el: vantaRef.current,
//               mouseControls: true,
//               touchControls: true,
//               gyroControls: false,
//               minHeight: 200.0,
//               minWidth: 200.0,
//               scale: 1.0,
//               scaleMobile: 1.0,
//               color: 0xffffff,
//               backgroundColor: 0x393939,
//               points: 8.0,
//               maxDistance: 15.0,
//               spacing: 20.0,
//               showDots: false,
//               THREE: THREE, // Pass the installed Three.js instance
//             })
//           );
//         }
//       });
//     }

//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   return (
//     <div ref={vantaRef} className="absolute inset-0 w-full h-full -z-10" />
//   );
// };

// export default VantaBackground;
