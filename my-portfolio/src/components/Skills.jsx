export default function Skills() {
  return (
    <div id="content">
      {/* TECH SKILLS SECTION */}
      <section className="tech_skills">
        <h3>Technical Skills</h3>
        <p>
          I began autonomously studying coding while simultaneously working as a nurse. <br />
          My approach is full of curiosity and diligence.
        </p>
        <div className="transparent-background-warm">
          <div className="tech-skills-grid">
            <div>
              <img
                className="tech-skill"
                src="../shared_assets/images/aws-academy-graduate-aws-academy-cloud-security-foundations.png"
                alt="AWS Certificate"
              />
            </div>
            <div>
              <img className="tech-skill" src="../shared_assets/images/php-logo-bigger.png" alt="PHP Logo" />
            </div>
            <div>
              <img
                className="tech-skill"
                src="../shared_assets/images/laravel-logo-png-laravel-lumen-manipulating-route-parameters-syed-sirajul-islam-1024x400.png"
                alt="Laravel Logo"
              />
            </div>
            <div>
              <img className="tech-skill" src="../shared_assets/images/bootstrap-logo-png-bootstrap-logo-390.png" alt="Bootstrap Logo" />
            </div>
            <div>
              <img className="tech-skill" src="../shared_assets/images/html-logo.png" alt="HTML Logo" />
            </div>
            <div>
              <img className="tech-skill" src="../shared_assets/images/css3-logo-png-transparent.png" alt="CSS Logo" />
            </div>
            <div>
              <img className="tech-skill" src="../shared_assets/images/figma.png" alt="Figma Logo" />
            </div>
            <div>
              <img
                className="tech-skill"
                src="../shared_assets/images/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
                alt="JavaScript Logo"
              />
            </div>
            <div>
              <img className="tech-skill" src="../shared_assets/images/sql-database-icon-png-17.png" alt="MySQL Logo" />
            </div>
            <div>
              <img className="tech-skill" src="../shared_assets/images/java.png" alt="Java Logo" />
            </div>
          </div>
        </div>
      </section>

      {/* SOFT SKILLS SECTION */}
      <section id="soft_skills">
        <h3>Soft Skills</h3>
        <p>
          After 5 years of experience as a nurse and nursing manager, I have exceptionally strong people skills.
        </p>
        <div className="transparent-background-cold">
          <ul>
            <li className="skill">Efficient problem-solver</li>
            <li className="skill">Multicultural approach</li>
            <li className="skill">Performs well under pressure</li>
            <li className="skill">Balanced communication</li>
          </ul>
        </div>

        {/* LANGUAGES SPOKEN SECTION */}
        <h3>I speak</h3>
        <div className="transparent-background-warm">
          <ul className="d-flex list-unstyled justify-content-center align-items-center flex-wrap">
            <li className="language">
              English
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '100%' }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li className="language">
              French
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '100%' }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li className="language">
              Russian
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '100%' }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li className="language">
              Spanish
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '75%' }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li className="language">
              Romanian
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '25%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
