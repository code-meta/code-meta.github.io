import React from "react";
import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";

const App = () => {
  return (
    <div className="container mx-auto px-4 h-dvh">
      <Nav />

      <div className="mt-40">
        <h1 className="text-3xl lg:text-6xl font-bold font-oswald tracking-wide leading-normal lg:leading-relaxed">
          Web Apps, APIs, Frontend & Backend. <br />
          Streamlined, Optimized, <br />
          and Ready to Perform
        </h1>
      </div>

      <div className="py-24">
        <ProjectCard
          name="Stride Journal"
          live="https://rumble.com"
          description="A no-nonsense journaling app built to keep you on track, amplify your habits, and push you toward your goals daily."
        />
      </div>
    </div>
  );
};

export default App;
