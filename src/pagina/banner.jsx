import styleButtons from "../style/styleButtons.module.css";
import { username } from "../data/user.js";
import banner from "../assets/banner-img.png";
import styleBanner from "../style/banner.module.css";
import style from "../style/style.module.css";

export const BannerFun = () => {
  return (
    <section className={styleBanner.secBanner}>
      <div className={styleBanner.divBanner}>
        <p className={style.name}>{username}</p>
        <h2 className={style.title}>Bem vindo ao meu portfólio</h2>
        <p className={styleBanner.frase}>Uma frase interessante sobre mim</p>
        <button className={styleButtons.butSaiba}>Saiba mais</button>
      </div>
      <img src={banner} alt="imagem principal" className={style.imgBanner} />
    </section>
  );
};
