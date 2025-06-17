import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    title: "Laravel Version of this same portfolio (in progress)",
    description:
      "I like a good challenge, so the past week was spent trying to recreate this portfolio with Laravel and Herd.",
    image: "../shared_assets/images/LaravelPortfolio.png",
    github: "https://github.com/Oliveena/fsd13portfolioana",
    ppt: null,
  },
  {
    title: "DuProprio Clone",
    description:
      "An interactive Laravel website for potential buyers and realtors. It includes home listings and a blog section.",
    image: "../shared_assets/images/RemaxClone.png",
    github: "https://github.com/Oliveena/fsd13portfolioana",
    ppt: "../shared_assets/20250328124727_RemaxClone.pptx",
  },
  {
    title: "BonjourSante Clone",
    description:
      "An interactive PHP website allowing users to book appointments with medical professionals.",
    image: "../shared_assets/images/BonjourSante.png",
    github: "https://github.com/Oliveena/fsd13portfolioana",
    ppt: "../shared_assets/WebServicesPwP2 1.pptx",
  },
  {
    title: "Auctions Website",
    description: "An interactive PHP website for listing auctions and proposing your price.",
    image: "../shared_assets/images/auctions.png",
    github: "https://github.com/Oliveena/midterm1auctions",
    ppt: null,
  },
  {
    title: "Blog Website",
    description:
      "A basic blog website in pure PHP that allows the creation of accounts, posting and commenting.",
    image: "../shared_assets/images/jpeg.webp",
    github: "https://github.com/Oliveena/artist-portfolio",
    ppt: null,
  },
  {
    title: "Painter's Webpage",
    description: "A front-end page for an artist portfolio, using Bootstrap.",
    image: "../shared_assets/images/jpeg.webp",
    github: "https://github.com/Oliveena/fsd13portfolioana",
    ppt: null,
  },
];

const ProjectCard = ({ project }) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-4">
    <div className="card">
      <img src={project.image} className="card-img-top img-fluid" alt="Project" />
      <div className="card-body rounded">
        <p className="card-text text-primary">
          <strong>{project.title}</strong>
          <br />
          {project.description}
          {project.ppt && (
            <>
              <br />
              PowerPoint presentation:{" "}
              <strong>
                <a href={project.ppt} target="_blank" rel="noopener noreferrer">
                  here
                </a>
              </strong>
            </>
          )}
          <br />
          GitHub repo:{" "}
          <strong>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              here
            </a>
          </strong>
        </p>
      </div>
    </div>
  </div>
);

const FeaturedProjects = () => {
  return (
    <section id="featured_projects" className="mt-5">
      <div className="container">
        <h3 className="mb-4">Featured Projects</h3>
        <div className="row g-4 transparent-background-cold">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
        <h3 className="mt-5">And much more! Visit my GitHub below.</h3>
      </div>
    </section>
  );
};

export default FeaturedProjects;
