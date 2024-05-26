import ContactForm from "./components/ContactForm/ContactForm";
import FormFeald from "./components/FormField/FormField";

function App() {
  const submit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm submit={submit} />
    </>
  );
}

export default App;
