import React, { useState } from "react";
import "./styles.css";
import img1 from "./assests/pic1.jpg";
import img2 from "./assests/pic2.jpg";
import img3 from "./assests/pic3.jpg";
import img4 from "./assests/pic4.jpg";
import img5 from "./assests/pic5.jpg";
import img6 from "./assests/pic6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

//Loading component
const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numloaded, setNUmloaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) =>
      currentImage < length ? currentImage + 1 : 0
    );
  };

  const handleImageLoad = () => {
    setNUmloaded((numloaded) => numloaded + 1);
  };

  return (
    <section>
      <header>
        <h1>Jesty</h1>
        <h2>
          A Photography Project
          <br />
          by Debasis Nishank!
        </h2>
      </header>

      <figure>
        {numloaded < images.length && (
          <Loading calculatedWidth={(numloaded / images.length) * 100} />
        )}
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>

        {images.map((imageURL, index) => (
          <img
            src={imageURL}
            alt="img"
            key={imageURL}
            onClick={handleClick}
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
