const input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      name={name}
      id={name}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
    />
  );
};
export default input;
