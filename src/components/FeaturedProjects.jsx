import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

export default function FeaturedProjects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  // Initialize selectedTech from URL query param if present
  const initialTech = searchParams.get("tech") || "All";
  const [selectedTech, setSelectedTech] = useState(initialTech);

  // Update URL when tech filter changes (optional - keeps URL in sync)
  useEffect(() => {
    if (selectedTech === "All") {
      searchParams.delete("tech");
    } else {
      searchParams.set("tech", selectedTech);
    }
    setSearchParams(searchParams, { replace: true });
  }, [selectedTech]);

  // Transform projects data to add /images/ prefix
  const allProjects = projectsData.featuredProjects.map(project => ({
    ...project,
    image: `/images/${project.image}`,
  }));

  // Get unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    allProjects.forEach(project => {
      project.techStack.forEach(tech => techSet.add(tech));
    });
    return ["All", ...Array.from(techSet).sort()];
  }, [allProjects]);

  // Filter projects based on search and tech selection
  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTech =
        selectedTech === "All" ||
        project.techStack.includes(selectedTech);

      return matchesSearch && matchesTech;
    });
  }, [allProjects, searchTerm, selectedTech]);

  return (
    <section id="featured_projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Featured Projects</h2>

        {/* Search and Filter Controls */}
        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
            >
              {allTechnologies.map(tech => (
                <option key={tech} value={tech}>
                  {tech === "All" ? "All Technologies" : tech}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-center text-muted mb-3">
          Showing {filteredProjects.length} of {allProjects.length} projects
        </p>

        {/* Projects Grid */}
        <div className="row">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="h5 text-muted">No projects found matching your criteria.</p>
              <button
                className="btn btn-outline-primary mt-3"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTech("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
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