const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBox;
