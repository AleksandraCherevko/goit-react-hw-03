import FormField from "../FormField/FormField";
import { Field, Form, Formik } from "formik";
import css from "../ContactForm/ContactForm.module.css";

const ContactForm = ({ submit }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={(values, actions) => {
        submit(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor="name">Name</label>
          <Field className={css.field} type="text" name="name" />
        </div>{" "}
        <div>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" className={css.field} />
        </div>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
