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
      <img src="/images/linkedinedited.png" alt="linkedin" />
      <img src="/images/githubedited.png" alt="github" />
    </div>
  );
};

export default Footer;
