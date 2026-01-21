import React, { useState } from "react";
import ResponsiveImage from "./ResponsiveImage";

// Map tech names to their logo images
// Logos in /images/ or /images/logos/ folders
const techLogos = {
  // Main /images/ folder
  "Java": "/images/java.png",
  "JavaFX": "/images/java.png",
  "React": "/images/React-Logo-PNG-Image-File.png",
  "C#": "/images/C_Sharp_Logo_2023.svg.png",
  "JavaScript": "/images/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
  "PHP": "/images/php-logo-bigger.png",
  "Laravel": "/images/laravel-logo-png-laravel-lumen-manipulating-route-parameters-syed-sirajul-islam-1024x400.png",
  "Blade": "/images/laravel-logo-png-laravel-lumen-manipulating-route-parameters-syed-sirajul-islam-1024x400.png",
  "Node.js": "/images/js-logo-node-logos-and-brands-icon.png",
  "MySQL": "/images/sql-database-icon-png-17.png",
  "PHPMyAdmin": "/images/sql-database-icon-png-17.png",
  "AWS": "/images/aws-academy-graduate-aws-academy-cloud-security-foundations.png",
  "Cloud Hosting": "/images/aws-academy-graduate-aws-academy-cloud-security-foundations.png",
  "Postman": "/images/postman-api-platform-logo-png_seeklogo-446859.png",
  "Bootstrap": "/images/bootstrap-logo-png-bootstrap-logo-390.png",
  "Figma": "/images/figma.png",
  "HTML": "/images/html-logo.png",
  "CSS": "/images/css3-logo-png-transparent.png",
  "SCSS": "/images/css3-logo-png-transparent.png",
  // /images/logos/ subfolder
  "Docker": "/images/logos/docker.jpg",
  "Git": "/images/logos/git-bash-logo-png_seeklogo-412974.png",
  "Dart": "/images/logos/Dart.jpg",
  "Flutter": "/images/logos/flutter.webp",
  "Three.js": "/images/logos/threejs.jpg",
};

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0 4px 20px rgba(0, 0, 0, 0.2)" : "none",
    transition: "all 0.3s ease-in-out",
  };

  const textColor = isHovered ? "#9c4764" : "";

 const { title, description, image, github, ppt, liveDemo, techStack } = project;

  return (
   <div className="col-12 col-md-6 mb-4 d-flex">
      <div className="card h-100 w-100 d-flex flex-column">
        {ppt ? (
          <a href={ppt} target="_blank" rel="noopener noreferrer">
            <ResponsiveImage
              src={image.split('/').pop()}
              alt={title}
              className="card-img-top"
              sizes={["(max-width: 768px) 100vw", "(max-width: 1200px) 50vw", "600px"]}
            />
          </a>
        ) : (
          <ResponsiveImage
            src={image.split('/').pop()}
            alt={title}
            className="card-img-top"
            sizes={["(max-width: 768px) 100vw", "(max-width: 1200px) 50vw", "600px"]}
          />
        )}

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>

{/*Tech Stack logos*/}
          {techStack && techStack.length > 0 && (
  <div className="tech-stack mt-3">
    <div className="tech-logos d-flex flex-wrap justify-content-center gap-2">
      {techStack.map((tech, idx) => (
        techLogos[tech] ? (
          <img
            key={idx}
            src={techLogos[tech]}
            alt={tech}
            title={tech}
            className="tech-logo-small"
          />
        ) : (
          <span key={idx} className="badge bg-secondary">
            {tech}
          </span>
        )
      ))}
    </div>
  </div>
)}

{/*Links*/}
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
