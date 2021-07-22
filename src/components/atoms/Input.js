const Input = ({ type, placeholder, onChange, value, className }) => {
    return(
        <input type={type} value={value} className={`border-1 outline-none border-gray-300 text-md font-semibold px-5 h-14 rounded-md bg-gray-800 text-white outline-none focus:bg-gray-700 placeholder-gray-400 my-2 ${className}`} placeholder={placeholder} onChange={onChange} />
    )
}

export default Input