import { useSelector } from "react-redux";
import Footer from "../Footer";
import SplashBody from "../SplashBody";
import ExplorePage from "../ExplorePage";
const HomePage = () => {
  const session = useSelector((state) => state.session.user);
  if (!session) {
    return (
      <>
        <SplashBody />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <ExplorePage />
      </>
    );
  }
};

export default HomePage;
