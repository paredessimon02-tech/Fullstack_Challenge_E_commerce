const Input = ({ placeholder, value, onChange, type = "text" }) => (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  )
  
  export default Input