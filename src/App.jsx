import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Md. Ifaz Wasi</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <header className="hero">
          <div className="hero-left">
            <h1>Md. Ifaz Ebnul Wasi</h1>
            <p>Email: ifazebnul@gmail.com | Phone: +88 01834048449</p>
            <p>Location: Middle Madarsha, Hathazari, Chattogram, Bangladesh</p>
          </div>
          <div className="hero-right">
            <img src="/image/wasi2.png" alt="Md. Ifaz Ebnul Wasi" className="profile-img" />
          </div>
        </header>

        {/* About Section */}
       <section className="section about" id="about">
  <h2>About Me</h2>
  <p>
    I am a dedicated student of Political Science, driven by a passion for learning and a deep curiosity about the intersection of society, governance, and human behavior. Alongside my academic journey, I have developed a strong interest in web development, where I enjoy exploring creative ways to design, build, and improve user-friendly websites that combine functionality with aesthetics.
  </p>
  <p>
    Beyond academics and technology, I am actively engaged in community volunteering, where I contribute to awareness campaigns, teamwork, and initiatives aimed at making a positive impact on people’s lives. These experiences have strengthened my skills in leadership, communication, and collaboration, while also teaching me the value of empathy and adaptability.
  </p>
  <p>
    I am also enthusiastic about problem solving—whether it’s addressing challenges in group projects, analyzing complex issues in Political Science, or finding innovative solutions in digital spaces. With a mindset focused on growth, I strive to combine my academic knowledge, technical skills, and social engagement to contribute meaningfully to both my community and future professional opportunities.
  </p>
</section>


        {/* Education Section */}
        <section className="section education" id="education">
          <h2>Education</h2>
          <ul>
            <li>HSC — Hazera-Taju University College (GPA: 4.00)</li>
            <li>SSC — Raozan Model High School (GPA: 4.89)</li>
            <li>Admitted to Raozan University College (Honours in Political Science)</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="section skills" id="skills">
          <h2>Skills</h2>
          <ul>
            <li>MS Word, Excel, PowerPoint</li>
            <li>Internet & Email Communication</li>
            <li>Problem Solving & Adaptability</li>
            <li>Teamwork & Collaboration</li>
            <li>Basic Research & Report Writing</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="section projects" id="projects">
          <h2>My Works</h2>
          <div className="projects-grid">
            {/* Project Card 1 */}
            <div className="project-card">
              <img src="/image/one.png" alt="Project 1" className="project-img" />
              <h3>1000 Data Entry</h3>
              <p>Successfully entered and organized 1000 records in Microsoft Excel, ensuring accuracy, proper formatting, and efficient data management for easy analysis and reporting.</p>
            </div>
            <div className="project-card">
              <img src="/image/two.png" alt="Project 2" className="project-img" />
              <h3>Sales Data Analysis</h3>
              <p>Analyzed 500+ sales records in Microsoft Excel using formulas, charts, and pivot tables to generate insights on trends, monthly performance, and product popularity, helping improve decision-making.</p>
            </div>
            {/* Add more cards similarly */}
          </div>
        </section>
        {/* Download CV Section */}
        <section className="section download-cv" id="download-cv">
          <h2>Download My CV</h2>
          <p>You can download my professional CV in PDF format by clicking the button below.</p>
          <a 
            href="/files/MyCV.pdf" 
            download="MyCV.pdf" 
            className="cv-download-btn"
          >
            Download CV
          </a>
        </section>
        {/* Projects Section */}
        <section className="section projects" id="projects">
          <h2>Activities</h2>
          <ul>
            <li>Community Volunteering Project: Organized awareness campaigns and team coordination.</li>
            <li>Student Group Presentation: Research & presentation on “Political Science and Society.”</li>
          </ul>
        </section>

        {/* Portfolio Section */}
        

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Md. Ifaz Ebnul Wasi — All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
