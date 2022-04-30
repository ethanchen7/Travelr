import "./Footer.css";

const Footer = () => {
  const splashFooterTech = [
    "React",
    "Redux",
    "Express",
    "Node",
    "PostgreSQL",
    "Sequelize",
    "HTML",
    "CSS",
  ];

  return (
    <div className="splash-footer">
      {splashFooterTech.map((tech) => {
        return <div>{tech}</div>;
      })}

      <a href="https://www.linkedin.com/in/ethan-chen-3b7070127/">
        <img
          className="socials-btn"
          src="/images/linkedinedited.png"
          alt="linkedin"
        />
      </a>
      <a href="https://github.com/ethanchen7">
        <img
          className="socials-btn"
          src="/images/githubedited.png"
          alt="github"
        />
      </a>
    </div>
  );
};

export default Footer;
