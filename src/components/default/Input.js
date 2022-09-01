const Input = ({ name, value, label, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="inputTitle" className="form-label">
        {label}:
      </label>
      <input
        type="text"
        className="form-control"
        id={name}
        aria-describedby="titleHelp"
        value={value}
        onChange={onChange}
        name={name}
      />
      <div id="titleHelp" className="form-text">
        We'll never share your title with anyone else.
      </div>
    </div>
  );
};
export default Input;
