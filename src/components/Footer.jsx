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

            </div>
            <p>&copy; {new Date().getFullYear()} Anastassia Tarassova. All rights reserved.</p>
            <p>Built with
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/React-Logo-PNG-Image-File.png" alt="React logo" width="50" height="50" />
                </a>
            </p>
        </footer>
    );
}
