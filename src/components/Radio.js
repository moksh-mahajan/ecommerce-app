export default function Radio({ label, name, onChange, value }) {
  return (
    <div className="filter-option">
      <input type="radio" name={name} onChange={onChange} checked={value} />
      <label>{label}</label>
    </div>
  );
}
