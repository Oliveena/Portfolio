import React from "react";

const techSkills = [
  { alt: "AWS Certificate", src: "/shared_assets/images/aws-academy-graduate-aws-academy-cloud-security-foundations.png" },
  { alt: "PHP Logo", src: "/shared_assets/images/php-logo-bigger.png" },
  { alt: "Laravel Logo", src: "/shared_assets/images/laravel-logo-png-laravel-lumen-manipulating-route-parameters-syed-sirajul-islam-1024x400.png" },
  { alt: "Bootstrap Logo", src: "/shared_assets/images/bootstrap-logo-png-bootstrap-logo-390.png" },
  { alt: "HTML Logo", src: "/shared_assets/images/html-logo.png" },
  { alt: "CSS Logo", src: "/shared_assets/images/css3-logo-png-transparent.png" },
  { alt: "Figma Logo", src: "/shared_assets/images/figma.png" },
  { alt: "JavaScript Logo", src: "/shared_assets/images/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" },
  { alt: "MySQL Logo", src: "/shared_assets/images/sql-database-icon-png-17.png" },
  { alt: "Java Logo", src: "/shared_assets/images/java.png" },
];

const softSkills = [
  "Efficient problem-solver",
  "Multicultural approach",
  "Performs well under pressure",
  "Balanced communication",
];

const languages = [
  { name: "English", level: 100 },
  { name: "French", level: 100 },
  { name: "Russian", level: 100 },
  { name: "Spanish", level: 75 },
  { name: "Romanian", level: 25 },
];

export default function Skills() {
  return (
    <div id="content">
      {/* ================= TECHNICAL SKILLS ================= */}
      <section className="tech_skills py-5">
        <h3 className="text-center">Technical Skills</h3>
        <p className="text-center">
          I began autonomously studying coding while working as a nurse.<br />
          My approach is driven by curiosity and diligence.
        </p>
        <div className="transparent-background-warm py-4">
          <div className="container">
            <div className="row g-3 justify-content-center">
              {techSkills.map((skill, idx) => (
                <div key={idx} className="col-4 col-md-2 text-center">
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="img-fluid tech-skill"
                    style={{ maxHeight: "80px", objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOFT SKILLS ================= */}
      <section id="soft_skills" className="py-5">
        <h3 className="text-center">Soft Skills</h3>
        <p className="text-center">
          After 5 years in nursing and management, I’ve developed strong interpersonal and leadership skills.
        </p>
        <div className="transparent-background-cold py-3">
          <ul className="list-unstyled text-center">
            {softSkills.map((skill, idx) => (
              <li key={idx} className="skill my-2">{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= LANGUAGES ================= */}
      <section className="py-5">
        <h3 className="text-center">Languages I Speak</h3>
        <div className="transparent-background-warm py-3">
          <div className="container">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-4">
              {languages.map((lang, idx) => (
                <li key={idx} className="language w-100 text-center" style={{ maxWidth: "300px" }}>
                  <strong>{lang.name}</strong>
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${lang.level}%` }}
                      aria-valuenow={lang.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </div>
  );
}
