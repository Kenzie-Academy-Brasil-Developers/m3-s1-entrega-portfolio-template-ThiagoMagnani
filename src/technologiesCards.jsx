import style from './style/style.module.css';

export const TechnologieCard = ({ title, img }) => {
    return (
      <li className={style.liTech}>
        <img src={img} className={style.imgTech} alt={title} />
        <h3 className={style.nameTech}>{title}</h3>
      </li>
    );
};