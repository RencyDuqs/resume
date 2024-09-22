
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <h1>Rency Dayne Duque</h1>
            <h2><em>Future Front-End Developer</em></h2>
          <h3>(Game Developer)</h3>
        </div>

        <div className="Content">
          <div className="LeftSideContent">
            <div className="contact">
              <h3>Contact</h3>
                <p>rdmduque.student@ua.edu.ph</p>
                  <p>Phone:(63+)922-506-1495</p>
                <p>Location: Jose Abad Santos Guagua Pampanga</p>
              <p><a href="https://github.com/RencyDuqs">Github</a></p>
            </div>

            <div className="education">
              <h3>Education</h3>
                <p>Bachelor of Science Information Technology</p>
              <p>University of The Assumption</p>
            </div>
            

            <div className="skills">
              <h3>Skills</h3>
              <ul>
                <li>Fron-End Design</li>
                  <li>Front-End Development</li>
                    <li>Database Management</li>
                      <h3>Experience On:</h3>
                        <li>Bootstrap</li>
                          <li>Java</li>
                        <li>Javascript</li>
                      <li>Html</li>
                    <li>CSS</li>
                  <li>Python</li>
                <li></li>
              </ul>
            </div>
          </div>

          <div className="RightSideContent">
            <h3>Work Experience</h3>
            <div className="WorkExperience">
              <h4> Developing User Interfaces (UI)</h4>
              <ol>
                <li>Building responsive and visually appealing user interfaces using HTML, CSS, and JavaScript.</li><br></br>
                <li>Implementing designs provided by UX/UI designers into functioning web pages.</li><br></br>
                <li>Ensuring that the UI is responsive across different devices (desktop, tablet, mobile).</li><br></br>
              </ol>

              <h4>Optimizing Web Performance</h4>
              <ol>
                <li>Writing clean and efficient code that ensures fast load times and smooth interactions.</li><br></br>
                <li>Optimizing images, fonts, and other assets for performance.
                </li><br></br>
                <li>Implementing lazy loading, caching, and other performance optimization techniques.</li><br></br>
              </ol><br></br>

              <h4>Testing and Debugging</h4>
              <ol>
                <li>Using tools like Chrome Developer Tools to identify and resolve issues in HTML, CSS, and JavaScript code.</li>
                <li>Conducting unit testing and end-to-end testing using frameworks</li><br></br>
              </ol><br></br>
              
             <div className>
                <h4>Junior Developer</h4>
                  <p>Microsoft</p>
                  <oll>
                    <li>Writing and Maintaining Code, Writing clean, maintainable, and efficient code under the guidance of senior developers.</li><br></br>
                    <li>Following coding standards and best practices to ensure quality and consistency across the codebase.</li><br></br>
                    <li>Led development teams.</li>
                  </oll>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






