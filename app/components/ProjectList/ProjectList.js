import style from "./ProjectList.module.scss";
import Project from "../Project/Project";

const ProjectList = (props) => {
  const {projects} = props;

  return (
    <div className={style.projects}>
        {projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
    </div>
  )
}

export default ProjectList
