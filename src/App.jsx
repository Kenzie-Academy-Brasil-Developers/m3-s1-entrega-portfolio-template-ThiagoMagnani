import style from './style/style.module.css';
import styleBanner from './style/banner.module.css';
import styleButtons from './style/styleButtons.module.css';
import banner from './assets/banner-img.png';
import { user } from './data/user.js';
import { username } from './data/user.js';
import { projects } from './data/projects.js';
import { ProjectCard } from './projectCards.jsx';
import { technologies } from './data/technologies.js';
import { TechnologieCard } from './technologiesCards.jsx';
import { contacts } from './data/contacts.js';
import { ContactsCard } from './contacts.jsx';


function App() {

  return (
    <div className={style.page}>
      <header className={style.header}>
        <h1>Portfólio</h1>
        <div className={styleButtons.headerButtons}>
          <button className={styleButtons.buttonHeader}>Sobre</button>
          <button className={styleButtons.buttonHeader}>Stack</button>
          <button className={styleButtons.buttonHeader}>Projetos</button>
        </div>
        <button className={styleButtons.buttonContact}>Contato</button>
      </header>

      <section className={styleBanner.secBanner}>
        <div className={styleBanner.divBanner}>
          <p className={style.name}>{username}</p>
          <h2 className={style.title}>Bem vindo ao meu portfólio</h2>
          <p className={styleBanner.frase}>Sou uma pessoa muito carismática</p>
          <button className={styleButtons.butSaiba}>Saiba mais</button>
        </div>
        <img src={banner} alt="imagem principal" className={style.imgBanner}/>
      </section>

      <section className={style.secSobre}>
        <h2 className={style.title}>Sobre mim</h2>
        <p className={style.frase}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.
        </p>
      </section>

      <section className={style.secTech}>
        <h2 className={style.title}>Tecnologias</h2>
        <ul className={style.listTech}>
          {technologies.map(technologie => {
            return <TechnologieCard key={technologie.id} title={technologie.name} img={technologie.img} />;
          })}
        </ul>
      </section>

      <section className={style.secProj}>
        <h2 className={style.title}>Projetos</h2>
        <ul className={style.listProjects}>
          {projects.map(project => {
            return <ProjectCard key={project.id} title={project.name} text={project.description} />;
          })}
        </ul>
      </section>

      <section className={style.fotContact}>
        <div className={style.divFot}>
          <h2 className={style.title}>Contato</h2>
          <ul className={styleButtons.listButtonFot}>
            <button className={styleButtons.buttonFotter}>
              {contacts.map(contact => {
              return <ContactsCard key={contact.id} img={contact.img} />;
              })}
            </button>
          </ul>
        </div>
        <p className={style.textFot}>Todos os direitos reservados - {user}</p>
      </section>
    </div>
  )
}
export default App