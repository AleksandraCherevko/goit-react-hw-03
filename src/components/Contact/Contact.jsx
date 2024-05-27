import css from "./Contact.module.css";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.contactsCard}>
      <div className={css.contactsCardWrap}>
        <p className={css.contactsName}>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.contactsBtn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
