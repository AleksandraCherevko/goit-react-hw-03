import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be less than 50 characters")
      .required("Required"),
    number: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be less than 50 characters")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div>
            <label htmlFor="name">Name</label>
            <Field className={css.field} type="text" name="name" />
            {errors.name && touched.name && <div>{errors.name}</div>}
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field className={css.field} type="text" name="number" />
            {errors.number && touched.number && <div>{errors.number}</div>}
          </div>
          <button className={css.formBtn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
