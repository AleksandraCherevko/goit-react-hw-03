import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={() => onDelete(contact.id)} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
