import React, { useState } from "react";

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0 4px 20px rgba(0, 0, 0, 0.2)" : "none",
    transition: "all 0.3s ease-in-out",
  };

  const textColor = isHovered ? "#9c4764" : "";

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div
        className="card h-100 shadow-sm"
        style={{
        backgroundColor: "transparent",
        border: "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
  src={project.image}
  alt={project.title}
  className="card-img-top"
  style={{
    objectFit: "contain",
    height: "200px",       
    width: "100%",
    backgroundColor: "transparent",
  }}
/>
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title text-center">{project.title}</h5>
          <p className="card-text text-center" style={{ color: textColor }}>
            {project.description}
          </p>
          {project.ppt && (
            <p className="mb-1">
              <strong>
                <a href={project.ppt} target="_blank" rel="noopener noreferrer">
                  View PowerPoint
                </a>
              </strong>
            </p>
          )}
          <p>
            <strong>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}