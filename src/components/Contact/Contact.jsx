import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <>
      <div className={css.contactsCard}>
        <div className={css.contactsCardWrap}>
          <p className={css.contactsName}>{name}</p>
          <p>{number}</p>
        </div>
        <button className={css.contactsBtn}>Delete</button>
      </div>
    </>
  );
};

export default Contact;
