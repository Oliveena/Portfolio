import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { FaLightbulb, FaUsers, FaHeartbeat, FaComments } from "react-icons/fa";

const techSkills = [
  { alt: "AWS Certificate", src: "/images/aws-academy-graduate-aws-academy-cloud-security-foundations.png" },
  { alt: "PHP Logo", src: "/images/php-logo-bigger.png" },
  { alt: "Laravel Logo", src: "/images/laravel-logo-png-laravel-lumen-manipulating-route-parameters-syed-sirajul-islam-1024x400.png" },
  { alt: "Bootstrap Logo", src: "/images/bootstrap-logo-png-bootstrap-logo-390.png" },
  { alt: "HTML Logo", src: "/images/html-logo.png" },
  { alt: "CSS Logo", src: "/images/css3-logo-png-transparent.png" },
  { alt: "Figma Logo", src: "/images/figma.png" },
  { alt: "JavaScript Logo", src: "/images/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" },
  { alt: "MySQL Logo", src: "/images/sql-database-icon-png-17.png" },
  { alt: "Java Logo", src: "/images/java.png" },
];

const softSkills = [
  { label: "Efficient problem-solver", icon: <FaLightbulb /> },
  { label: "Multicultural approach", icon: <FaUsers /> },
  { label: "Performs well under pressure", icon: <FaHeartbeat /> },
  { label: "Balanced communication", icon: <FaComments /> },
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
  <Typography variant="h4" align="center">Technical Skills</Typography>
  <Typography align="center" sx={{ mb: 4 }}>
    I began autonomously studying coding while working as a nurse.<br />
    My approach is driven by curiosity and diligence.
  </Typography>
  <Box sx={{ py: 4, backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
    <Grid container spacing={3} justifyContent="center">
      {techSkills.map((skill, idx) => (
        <Grid item xs={4} sm={2} key={idx}>
          <Box
            component="img"
            src={skill.src}
            alt={skill.alt}
            sx={{ maxHeight: 80, objectFit: "contain", width: "100%" }}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
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
    <li key={idx} className="skill my-2 d-flex align-items-center justify-content-center gap-2">
      <span className="fs-5 text-primary">{skill.icon}</span>
      <span>{skill.label}</span>
    </li>
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
