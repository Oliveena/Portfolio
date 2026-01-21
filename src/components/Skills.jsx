import React from "react";
import { Grid, Box } from "@mui/material";
import { FaLightbulb, FaUsers, FaHeartbeat, FaComments } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { FaProjectDiagram } from "react-icons/fa";

const techSkills = [
  // Row 1
  { alt: "Java Logo", src: "/images/java.png" },
  { alt: "React Logo", src: "/images/React-Logo-PNG-Image-File.png" },
  { alt: "C# Logo", src: "/images/C_Sharp_Logo_2023.svg.png" },
  { alt: "JavaScript Logo", src: "/images/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" },
  // Row 2
  { alt: "PHP Logo", src: "/images/php-logo-bigger.png" },
  { alt: "Laravel Logo", src: "/images/laravel-logo-png-laravel-lumen-manipulating-route-parameters-syed-sirajul-islam-1024x400.png" },
  { alt: "Node.js Logo", src: "/images/js-logo-node-logos-and-brands-icon.png" },
  { alt: "SQL Logo", src: "/images/sql-database-icon-png-17.png" },
  // Row 3
  { alt: "Docker Logo", src: "/images/logos/docker.jpg" },
  { alt: "Git Logo", src: "/images/logos/git-bash-logo-png_seeklogo-412974.png" },
  { alt: "AWS Certificate", src: "/images/aws-academy-graduate-aws-academy-cloud-security-foundations.png" },
  { alt: "Postman Logo", src: "/images/postman-api-platform-logo-png_seeklogo-446859.png" },
  // Row 4
  { alt: "Bootstrap Logo", src: "/images/bootstrap-logo-png-bootstrap-logo-390.png" },
  { alt: "HTML Logo", src: "/images/html-logo.png" },
  { alt: "CSS Logo", src: "/images/css3-logo-png-transparent.png" },
  { alt: "Figma Logo", src: "/images/figma.png" },
]

const softSkills = [
  { labelKey: "scrum_leader", icon: <FaProjectDiagram /> },
  { labelKey: "problem_solver", icon: <FaLightbulb /> },
  { labelKey: "multicultural", icon: <FaUsers /> },
  { labelKey: "under_pressure", icon: <FaHeartbeat /> },
  { labelKey: "communication", icon: <FaComments /> }
];
const languages = [
  { name: "English", level: 100 },
  { name: "French", level: 100 },
  { name: "Russian", level: 100 },
  { name: "Spanish", level: 75 },
  {
    name: "Track my language learning progress on Duolingo",
    level: 0,
    link: "https://www.duolingo.com/profile/a_blue_kettle"
  },
  { name: "Romanian", level: 25 },
];

export default function Skills() {

    const { t } = useTranslation();

  return (
    <div id="content">
       {/* =============== TECHNICALLY SKILLS =============== */}

       <section className="tech_skills py-5 text-center">
  <h3>{t('skills.technical_skills')}</h3>
  <p>{t('skills.tech_description')}</p>

  <div className="tech-skills-grid">
    {techSkills.map((skill, idx) => (
      <div className="tech-skill" key={idx}>
        <img src={skill.src} alt={t(skill.alt) || skill.alt} />
      </div>
    ))}
  </div>
</section>

       {/* =============== SOFT SKILLS =============== */}
      <section id="soft_skills" className="py-5">
        <h3 className="text-center">{t('skills.soft_skills')}</h3>
        <p className="text-center">{t('skills.soft_description')}</p>
        <div className="transparent-background-cold py-3">
          <ul className="list-unstyled text-center">
            {softSkills.map((skill, idx) => (
              <li key={idx} className="skill my-2 d-flex align-items-center justify-content-center gap-2">
                <span className="fs-5 text-primary">{skill.icon}</span>
                <span>{t(`soft_skill_labels.${skill.labelKey}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

       {/* =============== LANGUAGES =============== */}
      <section id="languages" className="py-5">
        <h3 className="text-center">{t('skills.languages_i_speak')}</h3>
        <div className="transparent-background-warm py-3">
          <div className="container">
           <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-4">
  {languages.map((lang, idx) => (
    <li key={idx} className="language w-100 text-center" style={{ maxWidth: "300px" }}>
      {lang.link ? (
        <a href={lang.link} target="_blank" rel="noopener noreferrer">
          {lang.name}
        </a>
      ) : (
        <>
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
        </>
      )}
    </li>
  ))}
</ul>
          </div>
        </div>
      </section>
    </div>
  );
}