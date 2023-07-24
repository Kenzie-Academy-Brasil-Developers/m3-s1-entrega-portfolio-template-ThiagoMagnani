import styleButtons from "../style/styleButtons.module.css";
import style from "../style/style.module.css";
import { user } from "../data/user.js";
import { contacts } from "../data/contacts.js";
import { ContactsCard } from "../contacts";

export const FooterFun = () => {
  return (
    <section className={style.fotContact}>
      <div className={style.divFot}>
        <h2 className={style.title}>Contato</h2>
        <ul className={styleButtons.listButtonFot}>
          <button className={styleButtons.buttonFotter}>
            {contacts.map((contact) => {
              return <ContactsCard key={contact.id} img={contact.img} />;
            })}
          </button>
        </ul>
      </div>
      <p className={style.textFot}>Todos os direitos reservados - {user}</p>
    </section>
  );
};
