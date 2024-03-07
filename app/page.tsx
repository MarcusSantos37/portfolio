import Footer from "./components/Footer";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import TeckStack from "./components/TechStack";

export default function Home() {
  return (
    <div id="home" className="max-w-[1280px] mx-auto">
      <Header />
      <Presentation />
      <TeckStack />
      <Projects />
      <Footer />
    </div>
  );
}
