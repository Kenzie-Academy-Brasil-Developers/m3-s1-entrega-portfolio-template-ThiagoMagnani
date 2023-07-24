import style from "./style/style.module.css";

export const ContactsCard = ({ img }) => {
  return (
    <li className={style.listContact}>
      <img src={img} className={style.contactImg} />
    </li>
  );
};
