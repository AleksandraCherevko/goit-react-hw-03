import css from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchBox}>
      <label className={css.searchBoxLabel}>
        Find contacts by name
        <input
          className={css.searchBoxInput}
          type="text"
          placeholder=""
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
