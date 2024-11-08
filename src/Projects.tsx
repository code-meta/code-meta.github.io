import { useParams } from "react-router-dom";

const Projects = () => {
  const { name } = useParams();

  return <div>Project {name}</div>;
};

export default Projects;
