import { useEffect, useState } from "react";

import img1 from "../../assets/backgrounds/maluma1.jpg";
import img2 from "../../assets/backgrounds/maluma2.jpg";
import img3 from "../../assets/backgrounds/maluma3.jpg";
import img4 from "../../assets/backgrounds/maluma4.jpg";
import img5 from "../../assets/backgrounds/maluma5.jpg";
import img6 from "../../assets/backgrounds/maluma6.jpg";
import img7 from "../../assets/backgrounds/maluma7.jpg";
import img8 from "../../assets/backgrounds/maluma8.jpg";

import "./BackgroundSlider.css";

const imagenes = [
  img1,
  img2,
  img3,
  img4,
  img5,
];

function BackgroundSlider() {

  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {

    const intervalo = setInterval(() => {

      setImagenActual((prev) => (prev + 1) % imagenes.length);

    }, 8000);

    return () => clearInterval(intervalo);

  }, []);

  return (

    <div className="background-slider">

      {imagenes.map((imagen, index) => (

        <div
          key={index}
          className={`background-image ${
            index === imagenActual ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${imagen})` }}
        />

      ))}

      <div className="background-overlay"></div>

    </div>

  );

}

export default BackgroundSlider;