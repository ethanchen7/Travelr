import { useSelector } from "react-redux";
import Footer from "../Footer";
import SplashBody from "../SplashBody";
const HomePage = () => {
  const session = useSelector((state) => state.session.user);
  if (!session) {
    return (
      <>
        <SplashBody />
        <Footer session={session} />
      </>
    );
  } else {
    return <div></div>;
  }
};

export default HomePage;
