import css from "./FormField.module.css";

const FormField = ({ value, onChange, name }) => {
  return (
    <>
      <div className={css.field}>
        <label>
          {name}
          <input type="text" value={value} onChange={onChange} name={name} />
        </label>
      </div>
    </>
  );
};

export default FormField;
