import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Budget Calculator App",
    description: "A React app used for setting a personal budget and comparing it to spending.",
    image: "/images/BudgetApp.png",
    // TODO: add PwP 
    // TODO: add GitHub link
    github: "https://github.com/Oliveena/artist-portfolio",
    ppt: "/shared_assets/20250328124727_RemaxClone.pptx",
  },
  {
    title: "Animal Shelter App",
    description: "A Java-based app used for managing adoptions/returns of various critters.",
    image: "/images/AnimalShelter.png",
    // TODO: add PwP 
    // TODO: add GitHub link
    github: "https://github.com/Oliveena/fsd13portfolioana",
    ppt: "/shared_assets/20250328124727_RemaxClone.pptx",
  },
  {
    title: "Laravel Version of this Portfolio (in progress)",
    description: "A Laravel + Herd experiment to recreate this portfolio from scratch.",
    image: "/images/LaravelPortfolio.png",
    github: "https://github.com/Oliveena/fsd13portfolioana",
  },
  {
    title: "DuProprio Clone",
    description: "A Laravel-based real estate platform with listings and blogs.",
    image: "/images/RemaxClone.png",
    github: "https://github.com/Oliveena/fsd13portfolioana",
    ppt: "/shared_assets/20250328124727_RemaxClone.pptx",
  },
  {
    title: "BonjourSante Clone",
    description: "A PHP-based appointment booking platform for medical professionals.",
    image: "/images/BonjourSante.png",
    github: "https://github.com/Oliveena/fsd13portfolioana",
    ppt: "/shared_assets/WebServicesPwP2 1.pptx",
  },
  {
    title: "Auctions Website",
    description: "A PHP site for listing and bidding on auctions.",
    image: "/images/auctions.png",
    github: "https://github.com/Oliveena/midterm1auctions",
  },
];


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