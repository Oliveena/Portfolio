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
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        {project.ppt ? (
          <a href={project.ppt} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              alt={project.title}
              className="card-img-top"
            />
          </a>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="card-img-top"
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-primary me-2"
              title="View GitHub repo"
            >
              GitHub
            </a>
          )}
          {project.ppt && (
            <a
              href={project.ppt}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-secondary"
              title="View presentation"
            >
              Presentation
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
