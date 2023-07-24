import style from "./style/style.module.css";
import { HeaderFun } from "./pagina/header";
import { BannerFun } from "./pagina/banner";
import { SobreFun } from "./pagina/sobre";
import { TechFun } from "./pagina/tech";
import { ProjectFun } from "./pagina/project";
import { FooterFun } from "./pagina/footer";

function App() {
  return (
    <div className={style.page}>
      <HeaderFun />

      <BannerFun />

      <SobreFun />

      <TechFun />

      <ProjectFun />

      <FooterFun />
    </div>
  );
}
export default App;
