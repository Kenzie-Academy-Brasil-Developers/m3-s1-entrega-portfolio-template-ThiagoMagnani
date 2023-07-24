import styleButtons from "../style/styleButtons.module.css";
import style from "../style/style.module.css";

export const HeaderFun = () => {
  return (
    <header className={style.header}>
      <h1>Portfólio</h1>
      <div className={styleButtons.headerButtons}>
        <button className={styleButtons.buttonHeader}>Sobre</button>
        <button className={styleButtons.buttonHeader}>Stack</button>
        <button className={styleButtons.buttonHeader}>Projetos</button>
      </div>
      <button className={styleButtons.buttonContact}>Contato</button>
    </header>
  );
};
