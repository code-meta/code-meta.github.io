import About from "./components/About";
import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./lib/context";

const App = () => {
  return (
    <div className="container mx-auto px-4 h-dvh">
      <Nav />

      <section className="mt-40">
        <h1 className="text-3xl lg:text-6xl font-bold font-oswald tracking-wide leading-normal lg:leading-relaxed">
          Web Apps, APIs, Frontend & Backend. <br />
          Streamlined, Optimized, <br />
          and Ready to Perform
        </h1>
      </section>

      <section className="py-24">
        {projects.map((project, i) => (
          <ProjectCard key={i + Date.now()} {...project} />
        ))}
      </section>

      <section className="py-10">
        <About />
      </section>

      <footer className="py-8">
        <p className="text-stone-400">© Code-Meta {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;
