import { useState } from "react";
import FormFeald from "../FormField/FormField";

const ivitialValues = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const ContactForm = ({ submit }) => {
  const [state, setState] = useState(ivitialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(state);
    setState(ivitialValues);
  };

  const handleChangeName = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormFeald value={state.name} onChange={handleChangeName} name="Name" />
      <br />
      <FormFeald
        value={state.number}
        onChange={handleChangeName}
        name="Number"
      />
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
