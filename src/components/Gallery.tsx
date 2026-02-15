import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const imageModules = import.meta.glob(
  "../assets/gallery/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const images = Object.entries(imageModules).map(([path, src]) => {
  const fileName = path.split("/").pop() || "";
  const cleanName = fileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");

  return {
    src: src as string,
    name: cleanName,
  };
});

const Gallery: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="container">
      <h2 className="gallery-title"></h2>

      <div className="gallery-grid">
        {images.slice(0).map((image) => (
          <div
            key={image.src}
            className="card"
            onClick={() => setSelectedImage(image.src)}
          >
            <img src={image.src} alt={image.name} />
            {theme === "instagram" && (
              <div className="polaroid-caption">{image.name}</div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Imagen ampliada" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
