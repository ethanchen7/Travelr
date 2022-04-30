import "./SplashBody.css";
const SplashBody = () => {
  return (
    <>
      <div className="splash-body-container">
        <div className="splash-body-text-container">
          <h1>Find your inspiration.</h1>
          <p>
            Join the Travelr community, home to travel enthusiasts and
            explorists.
          </p>
        </div>
      </div>
      <ul className="slideshow">
        <li>
          <span>Image 01</span>
        </li>
        <li>
          <span>Image 02</span>
        </li>
        <li>
          <span>Image 03</span>
        </li>
        <li>
          <span>Image 04</span>
        </li>
      </ul>
    </>
  );
};

export default SplashBody;
