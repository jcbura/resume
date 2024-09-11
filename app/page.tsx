import Education from "./ui/Education";
import Involvement from "./ui/Involvement";
import Links from "./ui/Links";
import Projects from "./ui/Projects";
import Skills from "./ui/Skills";
import Summary from "./ui/Summary";

const Home = () => {
  return (
    <div className="w-full h-full py-8 flex flex-col justify-center items-center">
      <div className="w-[80%] h-full flex flex-col gap-4 justify-center items-center">
        <div className="text-4xl font-bold">Jason Bura</div>
        <Links />
        <Summary />
        <Projects />
        <Skills />
        <Education />
        <Involvement />
      </div>
    </div>
  );
};

export default Home;
