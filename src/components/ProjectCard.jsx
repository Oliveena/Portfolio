import React, { useState } from "react";

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0 4px 20px rgba(0, 0, 0, 0.2)" : "none",
    transition: "all 0.3s ease-in-out",
  };

  const textColor = isHovered ? "#9c4764" : "";

  const { title, description, image, github, ppt, liveDemo } = project;

  return (
    <div className="col-md-6 col-lg-4 mb-4 d-flex">
      <div className="card h-100 w-100 d-flex flex-column">
        {ppt ? (
          <a href={ppt} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} className="card-img-top" />
          </a>
        ) : (
          <img src={image} alt={title} className="card-img-top" />
        )}

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>

          <div className="mt-auto d-flex justify-content-center flex-wrap gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-primary"
              >
                GitHub
              </a>
            )}
            {ppt && (
              <a
                href={ppt}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-secondary"
              >
                Presentation
              </a>
            )}
            {liveDemo && (
              <a
                href={liveDemo}
                className="btn btn-sm btn-outline-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
