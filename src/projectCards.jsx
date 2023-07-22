import style from './style/style.module.css';
import buttons from './style/styleButtons.module.css';
import img from './assets/git-icon.png'

export const ProjectCard = ({ title, text }) => {
    return (
      <li className={style.liProject}>
        <div className={style.divDesProj}>
          <h3 className={style.titleProjects}>{title}</h3>
          <p className={style.textProjects}>{text}</p>
          <button className={buttons.buttonProjects}>Saiba mais</button>
        </div>
        <div className={style.divImgProj}>
          <img src={img} className={style.imgProjects} alt={title} />
        </div>
      </li>
    );
  };