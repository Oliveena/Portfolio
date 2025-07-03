import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Budget Calculator App",
    description: "A React app used for setting a personal budget and comparing it to spending.",
    image: "/images/BudgetApp.png",
    github: "https://github.com/Oliveena/WebDevIIFinalProject", 
    ppt: "https://docs.google.com/presentation/d/16Vh3pTAYnaRGzu6wIXt-z8ueZwlnXIxK/edit", 
  },
  {
    title: "Animal Shelter App",
    description: "A Java-based desktop app for managing animal adoptions, returns, and shelter capacity.",
    image: "/images/AnimalShelter.png",
    github: "https://github.com/Oliveena/DSAAnimalShelter/tree/master",
    ppt: "https://docs.google.com/presentation/d/109J_gezmR7Tm457N6gSH5Jl_MkUrg3Jj/edit",  
  },
  {
    title: "Laravel Version of this Portfolio (in progress)",
    description: "A Laravel + Herd experiment to recreate this portfolio from scratch.",
    image: "/images/LaravelPortfolio.png",
    github: "https://github.com/Oliveena/fsd13portfolioana",
  },
  {
    title: "Remax Clone",
    description: "A Laravel-based real estate platform with listings and blogs.",
    image: "/images/RemaxClone.png",
    github: "https://github.com/Oliveena/realestate",
    ppt: "https://docs.google.com/presentation/d/1RFmo-qg8mWooYjx1xILI93lzb1NIbYf7PO2tYs6C4-s/edit?slide=id.p1#slide=id.p1",
  },
  {
    title: "BonjourSanté Clone",
    description: "A PHP-based appointment booking platform for medical professionals.",
    image: "/images/BonjourSante.png",
    github: "https://github.com/Oliveena/fsd13portfolioana",
    ppt: "https://docs.google.com/presentation/d/18vhUeVyAaiufGFgoUW3y5WznpWilIHeelaLMi3UDbrE/edit?slide=id.p3#slide=id.p3",
  },
  {
    title: "Auctions Website",
    description: "A PHP site for listing and bidding on auctions.",
    image: "/images/auctions.png",
    github: "https://github.com/Oliveena/midterm1auctions",
    liveDemo: "https://vimeo.com/1066663208/7ebba50ec7",
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