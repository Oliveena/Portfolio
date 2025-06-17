import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    title: "Laravel Version of this Portfolio (in progress)",
    description: "A Laravel + Herd experiment to recreate this portfolio from scratch.",
    image: "/shared_assets/images/LaravelPortfolio.png",
    github: "https://github.com/Oliveena/fsd13portfolioana",
  },
  {
    title: "DuProprio Clone",
    description: "A Laravel-based real estate platform with listings and blogs.",
    image: "/shared_assets/images/RemaxClone.png",
    github: "https://github.com/Oliveena/fsd13portfolioana",
    ppt: "/shared_assets/20250328124727_RemaxClone.pptx",
  },
  {
    title: "BonjourSante Clone",
    description: "A PHP-based appointment booking platform for medical professionals.",
    image: "/shared_assets/images/BonjourSante.png",
    github: "https://github.com/Oliveena/fsd13portfolioana",
    ppt: "/shared_assets/WebServicesPwP2 1.pptx",
  },
  {
    title: "Auctions Website",
    description: "A PHP site for listing and bidding on auctions.",
    image: "/shared_assets/images/auctions.png",
    github: "https://github.com/Oliveena/midterm1auctions",
  },
  {
    title: "Blog Website",
    description: "A PHP blog with user login, post creation, and commenting.",
    image: "/shared_assets/images/jpeg.webp",
    github: "https://github.com/Oliveena/artist-portfolio",
  },
  {
    title: "Painter's Webpage",
    description: "A Bootstrap-based front-end for an artist portfolio.",
    image: "/shared_assets/images/jpeg.webp",
    github: "https://github.com/Oliveena/fsd13portfolioana",
  },
];

const ProjectCard = ({ project }) => (
  <div className="col-12 col-sm-6 col-md-4 mb-4">
    <div className="card h-100 shadow-sm">
      <img
        src={project.image}
        alt={project.title}
        className="card-img-top"
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
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

export default function FeaturedProjects() {
  return (
    <section id="featured_projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Featured Projects</h2>
        <div className="row">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
        <div className="text-center mt-5">
          <h5>...and much more! Visit my full GitHub below.</h5>
          <a
            className="btn btn-outline-primary mt-2"
            href="https://github.com/Oliveena"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
