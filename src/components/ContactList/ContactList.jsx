import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <div className={css.contactsList}>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
          ></Contact>
        );
      })}
    </div>
  );
};

export default ContactList;
