import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaGoogle, FaOrcid } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.profileSection}>
          <div className={styles.profileImage}>
            <img src="https://content.fari.brussels/media/0f9d56315ccdf6a28108a651-simeon-2-scaled.jpg" alt="Siméon Michel"/>
          </div>
          <Heading as="h1" className={styles.name}>Siméon Michel</Heading>
          <p className={styles.title}>R&D Engineer</p>
          <p className={styles.affiliation}>FARI AI for the common good institute</p>
          <div className={styles.socialLinks}>
            <Link to="mailto:simeonmcl@gmail.com" className={styles.socialLink}><MdEmail /></Link>
            <Link to="#" className={styles.socialLink}><FaInstagram /></Link>
            <Link to="https://github.com/mrcyme" className={styles.socialLink}><FaGithub /></Link>
            <Link to="https://www.linkedin.com/in/simeon-michel-469333134/" className={styles.socialLink}><FaLinkedin /></Link>
          </div>
        </div>
        <div className={styles.mainSection}>
          <div className={styles.aboutSection}>
            <Heading as="h2" className={styles.sectionTitle}>About Me</Heading>
            <p>
            From artificial intelligence, robotics, prototyping and creative technologies, I am a breadth-first learner driven by an
            insatiable curiosity. Every now and then, I like to dive deep into subjects that ignite my passion. 
            
            Be it working at the highest levels of abstraction or soldering a 100µF capacitor to a PCB, I thrive in environments that blend
            intellectual challenges with hands-on craftsmanship. I am a quick learner, always looking for new challenges.
            </p>
            <Link className={clsx('button button--secondary button--lg', styles.cvButton)} to="#">
              <FaDownload style={{ marginRight: '8px' }} /> Download CV
            </Link>
          </div>
          <div className="row">
            <div className="col col--6">
              <div className={styles.section}>
                <Heading as="h2" className={styles.sectionTitle}>Fields of expertise</Heading>
                <ul className={styles.interestsList}>
                  <li>Machine learning</li>
                  <li>Robotics and prototyping</li>
                  <li>Simulation and 3D programming</li>
                  <li>Geoinformatics</li>
                </ul>
              </div>
            </div>
            <div className="col col--6">
              <div className={styles.section}>
                <Heading as="h2" className={styles.sectionTitle}>Education</Heading>
                <ul className={styles.educationList}>
                  <li><FaGraduationCap className={styles.educationIcon} /> <div>MEng Computer Science and Engineering<span>Université Libre de Bruxelles</span></div></li>
                  <li><FaGraduationCap className={styles.educationIcon} /> <div>BSc Engineering<span>Université Libre de Bruxelles</span></div></li>
                </ul>
              </div>
            </div>
            <div className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>Professional Experience</Heading>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>Fari Test and Experience Center Lead developer</h3>
                    <p className={styles.timelineCompany}>FARI AI for the common good Institure, Brussels</p>
                    <span className={styles.timelineDate}>September 2022 - present</span>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>Artificial Intelligence Researcher</h3>
                    <p className={styles.timelineCompany}>AILab, Vrij Universiteit Brussels, Brussels</p>
                    <span className={styles.timelineDate}>April 2021 - August 2022</span>
                    <ul>
                      <li>Development of a platform for iterative conversational search.</li>
                      <li>Joint project with Erasmushoogeshool, KUL and Odyssee. Comparison of different computing paradigm (cloud, edge and fog computing) applied to the healthcare sector.</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>Mathematics teacher in secondary education</h3>
                    <p className={styles.timelineCompany}>De l'autre cote de l'ecole, Brussels</p>
                    <span className={styles.timelineDate}>October 2020 - January 2021</span>
                    <p>Temporary replacement in fourth and fifth grade in a Freinet's teaching method school. Experience in both on-site and remote classes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>Languages</Heading>
              <div className={styles.languageSkills}>
                <div className={styles.languageSkill}>
                  <p>🇫🇷 French <span>(Mother Tongue)</span></p>
                  <div className={styles.progressBar}><div className={styles.progress} style={{width: '100%'}}></div></div>
                </div>
                <div className={styles.languageSkill}>
                  <p>🇬🇧 English <span>(Very Good)</span></p>
                  <div className={styles.progressBar}><div className={styles.progress} style={{width: '90%'}}></div></div>
                </div>
                <div className={styles.languageSkill}>
                  <p>🇪🇸 Spanish <span>(Very Good)</span></p>
                  <div className={styles.progressBar}><div className={styles.progress} style={{width: '90%'}}></div></div>
                </div>
                <div className={styles.languageSkill}>
                  <p>🇳🇱 Dutch <span>(Good)</span></p>
                  <div className={styles.progressBar}><div className={styles.progress} style={{width: '70%'}}></div></div>
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>Technical Skills</Heading>
              <div className={styles.skillsContainer}>
                <div className={styles.skillCategory}>
                  <h4>Programming Languages</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>Javascript</span>
                    <span className={styles.skillTag}>C</span>
                    <span className={styles.skillTag}>C++</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Embedded programming</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Arduino</span>
                    <span className={styles.skillTag}>Micropython</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Scientific programming libraries</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Keras</span>
                    <span className={styles.skillTag}>Tensorflow</span>
                    <span className={styles.skillTag}>PyTorch</span>
                    <span className={styles.skillTag}>Numpy</span>
                    <span className={styles.skillTag}>Pandas</span>
                    <span className={styles.skillTag}>Scikit-learn</span>
                    <span className={styles.skillTag}>SciPy</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Robotics programming</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Forward/Inverse Kinematics and Dynamics</span>
                    <span className={styles.skillTag}>Path Planning</span>
                    <span className={styles.skillTag}>ROS</span>
                    <span className={styles.skillTag}>Robotics-Toolbox-Python</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Simulation</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Gazebo</span>
                    <span className={styles.skillTag}>Swift</span>
                    <span className={styles.skillTag}>Mujoco</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Embedded Systems</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Arduino</span>
                    <span className={styles.skillTag}>Esp32</span>
                    <span className={styles.skillTag}>RP2040</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Mechatronics</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Gears</span>
                    <span className={styles.skillTag}>Linkages</span>
                    <span className={styles.skillTag}>DC Motors</span>
                    <span className={styles.skillTag}>Servo Motors</span>
                    <span className={styles.skillTag}>Stepper Motors</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Control system</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>PID Controllers</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Networking</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>TCP/IP</span>
                    <span className={styles.skillTag}>HTTP/HTTPS</span>
                    <span className={styles.skillTag}>MQTT</span>
                    <span className={styles.skillTag}>WebSocket</span>
                    <span className={styles.skillTag}>I2C</span>
                    <span className={styles.skillTag}>SPI</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>EDA</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Kicad</span>
                    <span className={styles.skillTag}>Flux</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>CAD</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Fusion360</span>
                    <span className={styles.skillTag}>Build123d</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>3D modelling</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Blender</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Digital fabrication</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>SLA and FDM 3D printing</span>
                    <span className={styles.skillTag}>Laser Cutter</span>
                    <span className={styles.skillTag}>CNC</span>
                    <span className={styles.skillTag}>Molding and Casting</span>
                    <span className={styles.skillTag}>Vacuum Casting</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Linux</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>A lot of bash scripting and a lot of different distro including real time one</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Computer vision</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Ultralytics</span>
                    <span className={styles.skillTag}>roboflow</span>
                    <span className={styles.skillTag}>openCV</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>3D reconstruction</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Photogrametry</span>
                    <span className={styles.skillTag}>Gaussian Splatting</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Embedded machine learning</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Edge impulse</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Machine Learning fundations</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>VAE</span>
                    <span className={styles.skillTag}>GAN</span>
                    <span className={styles.skillTag}>transformer</span>
                    <span className={styles.skillTag}>GPT models</span>
                    <span className={styles.skillTag}>Diffusion models</span>
                    <span className={styles.skillTag}>CNN</span>
                    <span className={styles.skillTag}>LSTM</span>
                    <span className={styles.skillTag}>SSM</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Cloud Services</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Google Cloud Service</span>
                    <span className={styles.skillTag}>Azure</span>
                    <span className={styles.skillTag}>Digital Ocean</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Digital twin</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Gis</span>
                    <span className={styles.skillTag}>Cesium</span>
                    <span className={styles.skillTag}>CityJson</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Version Control</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Git</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Containerisation</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Docker</span>
                    <span className={styles.skillTag}>Kubernetes</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Databases</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>SQL</span>
                    <span className={styles.skillTag}>NoSQL</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>API</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Rest</span>
                    <span className={styles.skillTag}>GraphQL (Graphene)</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Web development</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Three.js</span>
                    <span className={styles.skillTag}>WebAssembly</span>
                    <span className={styles.skillTag}>Django</span>
                    <span className={styles.skillTag}>Flask</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>CI-CD</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>Github actions</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Additional</h4>
                  <div className={styles.skillsList}>
                    <span className={styles.skillTag}>LATEX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="My awesome portfolio">
      <HomepageHeader />
    </Layout>
  );
}
