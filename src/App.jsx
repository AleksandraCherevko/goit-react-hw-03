import ContactForm from "./components/ContactForm/ContactForm";

import ContactList from "./components/ContactList/ContactList";
import Contact from "./components/Contact/Contact";
import contacts from "./components/ContactList/contacts.json";
import { Field, Form, Formik } from "formik";

function App() {
  const submit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm submit={submit} />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
