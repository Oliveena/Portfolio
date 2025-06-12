export default function Footer() {
    return (
        <footer>
            <div className="social-media">
                <a href="https://github.com/Oliveena" target="_blank" rel="noopener noreferrer">
                    <img src="/images/github-mark.png" alt="GitHub logo" width="50" height="50" />
                </a>
                <a href="https://www.linkedin.com/in/anastassia-tarassova-4a6573188/?trk=opento_sprofile_topcard" target="_blank" rel="noopener noreferrer">
                    <img src="/images/linkedin-logo-linkedin-icon-transparent-free-png.webp" alt="LinkedIn logo" width="50" height="50" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/1725819461instagram-logo.png" alt="Instagram logo" width="50" height="50" />
                </a>
                <a href="https://www.meta.com/ca/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/Meta-Logo.png" alt="META logo" width="50" height="50" />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/98ae159aa1bb8b4243fbe1f9e27d1b9f.png" alt="YouTube logo" width="50" height="50" />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Anastassia Tarassova. All rights reserved.</p>
        </footer>
    );
}
