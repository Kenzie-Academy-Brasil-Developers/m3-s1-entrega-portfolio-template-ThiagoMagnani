import style from "../style/style.module.css";
import { projects } from "../data/projects.js";
import { ProjectCard } from "./projectCards";

export const ProjectFun = () => {
  return (
    <section className={style.secProj}>
      <h2 className={style.title}>Projetos</h2>
      <ul className={style.listProjects}>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.name}
              text={project.description}
            />
          );
        })}
      </ul>
    </section>
  );
};
