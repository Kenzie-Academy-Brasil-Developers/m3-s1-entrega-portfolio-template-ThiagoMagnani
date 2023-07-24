import style from "../style/style.module.css";
import { technologies } from "../data/technologies.js";
import { TechnologieCard } from "./technologiesCards";

export const TechFun = () => {
  return (
    <section className={style.secTech}>
      <h2 className={style.title}>Tecnologias</h2>
      <ul className={style.listTech}>
        {technologies.map((technologie) => {
          return (
            <TechnologieCard
              key={technologie.id}
              title={technologie.name}
              img={technologie.img}
            />
          );
        })}
      </ul>
    </section>
  );
};
