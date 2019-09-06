import React, { Component } from "react";
import { Icon, Rating } from "semantic-ui-react";
import CSSModules from "react-css-modules";

import css from "./index.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div styleName="profile-container">
        <div styleName="header">Bryce Hayden</div>
        <div styleName="basic-info">
          <div styleName="left-side">
            <div styleName="sub-details">
              <Icon name="phone" />
              <span>(801) 898 - 3727</span>
            </div>
            <div styleName="sub-details">
              <Icon name="github" />
              <a href="https://github.com/BryceHayden">
                https://github.com/BryceHayden
              </a>
            </div>
            <div styleName="sub-details">
              <Icon name="linkedin" />
              <a href="www.linkedin.com/in/brycehayden/">
                www.linkedin.com/in/brycehayden/
              </a>
            </div>
            <div styleName="address-container">
              <Icon name="marker alternate" />
              <div styleName="sub-details">
                <div>4776 W Killarney Dr</div>
                <div>Highland, UT 84003</div>
              </div>
            </div>
          </div>
          <div styleName="right-side">
            <div styleName="summary">
              <div>Summary of Qualifications</div>
              <div>
                Experienced JavaScript engineer, and team lead with proven
                mentoring capabilities. Solid candidate with excellent problem
                solving and communication skills.
              </div>
            </div>
            <div styleName="technologies">
              <div>Prior Technologies Used:</div>
              JavaScript, React, Vue, Webpack, Redux, Redux-Sagas, NPM, Node,
              HTML, CSS, Lerna, Storybook, GoLang, C#, C++, Java, PHP,
              Postgresql, MySQL, MongoDB, Docker, Docker Compose, Terraform,
              Git, Kubernetes, Grunt, Bower, Chai, Mocha, Jest, Puppeteer,
              Karma, Protractor
            </div>
          </div>
        </div>
        <div styleName="professional-experience">
          <div styleName="heading">Professional Experience</div>
          <div styleName="company">
            <div styleName="company-specifics">
              <span styleName="company-name">REDX</span>
              <div>Software Engineer IV</div>
              <div> Team Lead</div>
              <div>March 2019 - Present</div>
            </div>
            <div styleName="job-responsibilities">
              <span>
                Core Tech: Vue, VueX, Webpack, Node, Jest, Docker, Postgres,
                Angular Js, Jade, and Coffee
              </span>
              <ul>
                <li>
                  Created a style-guide library to share UI components across
                  teams.
                </li>
                <li>
                  Dockerized repos to remove build complexity, and for future
                  scalability of server instances.
                </li>
                <li>
                  Assisted in implementing single spa to allow for modular
                  refactoring of legacy code.
                </li>
                <li>
                  Helped implement CI/CD to standardize our deployment process.
                </li>
              </ul>
            </div>
          </div>

          <div styleName="company">
            <div styleName="company-specifics">
              <span styleName="company-name">Pluralsight Inc</span>
              <div>Software Engineer III</div>
              <div>2017 – 2019</div>
            </div>
            <div styleName="job-responsibilities">
              <span>
                Core Tech: React, Redux-Sagas, Webpack, Node, Jest, C#, .Net
                Core, Docker, RabbitMQ, and Postgres
              </span>
              <ul>
                <li>
                  Created Docker templates for Node and .Net Core projects to
                  decrease development setup time.
                </li>
                <li>
                  Refactored Redux state tree to use a normalized approach,
                  drastically decreasing its size.
                </li>
                <li>
                  Introduced higher ordered components to their frontend code to
                  reduce code complexity and use.
                </li>
                <li>
                  Optimized postgres queries, in some cases decreasing download
                  time by over a minute.
                </li>
              </ul>
            </div>
          </div>

          <div styleName="company">
            <div styleName="company-specifics">
              <span styleName="company-name">Helio Training</span>
              <div>Adjunct Professor</div>
              <div>2017 – 2019</div>
            </div>
            <div styleName="job-responsibilities">
              <span>
                Subjects Taught: JS, React, Redux, HTML, CSS, Node, Postgres,
                Git, TDD, and scrum
              </span>
              <ul>
                <li>
                  Directed restructuring of the curriculum for their evening
                  part-time classes.
                </li>
                <li>
                  Constructed exams and coding challenges for the students.
                </li>
                <li>
                  Taught evening classes in Salt Lake and Draper, with class
                  size ranging around 15 students.
                </li>
              </ul>
            </div>
          </div>

          <div styleName="company">
            <div styleName="company-specifics">
              <span styleName="company-name">Deseret Digital Media</span>
              <div>Software Engineer II</div>
              <div>2015 – 2017</div>
            </div>
            <div styleName="job-responsibilities">
              <span>
                Core Tech: JS, React, Redux, Webpack, Silex, PHP, Sass, Karma,
                Nightwatch
              </span>
              <ul>
                <li>
                  Refactored their preexisting Ember frontend, and helped them
                  to migrate onto a React/Webpack architecture.
                </li>
                <li>
                  Developed React components to interact and manipulate the DOM,
                  redux for storing frontend state, cut the HTML, used PostCSS
                  along with Sass and various other plugins for styling, built
                  various widget libraries using React and node package manager,
                  etc.
                </li>
              </ul>
            </div>
          </div>

          <div styleName="company">
            <div styleName="company-specifics">
              <span styleName="company-name">STG</span>
              <div>Software Engineer I</div>
              <div>2014 – 2015</div>
            </div>
            <div styleName="job-responsibilities">
              <span>
                Core Tech: JS, Angular, Spring-Boot, Bootstrap, Grunt, Bower,
                Protractor, Karma, Unit Tests
              </span>
              <ul>
                <li>
                  Redesigned the architecture of a preexisting Struts, JSP, and
                  JPA project to use modern frameworks including, Angular,
                  Spring-boot, Bower, Grunt, Sass, etc.
                </li>
                <li>
                  Developed Angular factories to persist data on the frontend,
                  directives to interact and manipulate the DOM, services for
                  connecting to the Restful APIs, and cut the HTML and Sass used
                  for each of the pages.
                </li>
              </ul>
            </div>
          </div>

          <div styleName="page-break">
            <div styleName="company">
              <div styleName="company-specifics">
                <span styleName="company-name">Qpquo</span>
                <div>Lead Frontend Developer</div>
                <div>2013 – 2014</div>
              </div>
              <div styleName="job-responsibilities">
                <span>
                  Core Tech: JS, Angular, Bootstrap, Facebook graph API,
                  Protractor, Karma, Unit Tests
                </span>
                <ul>
                  <li>
                    Extensive work with Angular directives, factories, filters,
                    etc.
                  </li>
                  <li>Implemented Bootstrap and Angular-UI for page design.</li>
                  <li>
                    Incorporated Facebook Graph API into our Angular code base
                    to add social elements.
                  </li>
                  <li>
                    Used Test Driven Development with Protractor, Karma, and
                    Unit Tests.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div styleName="company">
            <div styleName="company-specifics">
              <span styleName="company-name">Dept of Bioeng</span>
              <div>Software Developer Intern</div>
              <div>2009 – 2013</div>
            </div>
            <div styleName="job-responsibilities">
              <span>Core Tech: Java, C#, C++, MySQL</span>
              <ul>
                <li>Developed a multi-threaded C# web crawler.</li>
                <li>Maintenance of internal site as System Administrator.</li>
                <li>Testing/Analysis work on FEBio (modeling software).</li>
                <li>
                  Designed and assembled an electrical stimulating recording
                  system.
                </li>
                <li>
                  Constructed a vibrational sensitive platform for computational
                  analysis of grooming habits in rodents.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div styleName="education">
          <div styleName="heading">Education</div>
          <div styleName="grad-info">
            <div>Bachelor of Science, Bioengineering/Computer Science</div>
            <div>University of Utah - 2014</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Profile, css);
