import Education from "../../components/education/Education";
import Experienece from "../../components/experience/Experience";
import Presentation from "../../components/presentation/Presentation";
import Technologies from "../../components/technologies/Technologies";

const Home = () => {
  return (
    <main data-testid="home">
      <Presentation />
      <Experienece />
      <Education />
      <Technologies />
    </main>
  );
};

export default Home;
