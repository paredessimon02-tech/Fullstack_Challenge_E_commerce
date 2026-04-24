const Button = ({ children, onClick, variant = "primary", disabled }) => {
    const styles = {
      primary: "bg-blue-600 hover:bg-blue-700 text-white",
      secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
      danger: "bg-red-500 hover:bg-red-600 text-white",
    }
  
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 rounded font-medium transition ${styles[variant]} disabled:opacity-50`}
      >
        {children}
      </button>
    )
  }
  
  export default Button