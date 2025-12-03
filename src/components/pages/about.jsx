import { Link } from "react-router";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-brand">
          <h3>BibleVersion</h3>
        </div>
        <div className="about-description">
          <p>
            We would like to thank the publishers, partners, volunteers, and
            donors who make it possible for the Bible to be freely distributed
            to all who long to read it. We are grateful for their generosity and
            dedication to the mission of making the Bible available to everyone.
          </p>
        </div>
        <div className="about-socials">
          <div className="about-socials-links">
            <Link to={"https://www.facebook.com/andrej.koller.18"}>
              <div>
                <i className="fa-brands fa-square-facebook"></i>
                <span>Facebook</span>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <Link to={"https://x.com/andrejkoller"}>
              <div>
                <i className="fa-brands fa-twitter"></i>
                <span>Twitter</span>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <Link to={"https://www.instagram.com/andrejkollerofficial"}>
              <div>
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram</span>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>
        <div className="about-cta">
          <Link>
            <span>Rate The Bible App</span>
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <Link>
            <span>Volunteer</span>
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <Link>
            <span>Giving</span>
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
