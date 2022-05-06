import "./index.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <h1 className="title">
        <span className="title-content">404</span>
        <span className="title-content title-second">Page not found!</span>
        <span className="title-content title-third">
          Looks like you landed on a page that doesn't exist. :(
        </span>
        <span className="title-content title-fourth">
          Thanks for visiting Travelr, though. 😊
        </span>
        <span className="title-content title-fifth">
          Check my other projects out on{" "}
          <span>
            <a href="https://github.com/ethanchen7">Github</a>
          </span>{" "}
          and connect with me on{" "}
          <span>
            <a href="https://www.linkedin.com/in/ethan-chen-3b7070127/">
              LinkedIn
            </a>
          </span>
          !
        </span>
        <img
          className="title-content title-sixth photo"
          src="/images/ethanseoul.JPG"
        />
      </h1>
    </div>
  );
};

export default PageNotFound;
