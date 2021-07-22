const Button = ({ text, disabled = false, onClick, onSubmit }) => {
    return(
        <button disabled={disabled} onClick={onClick} onSubmit={onSubmit} className="outline-none focus:outline-none transition-all relative whitespace-nowrap box-border rounded-md shadow-sm text-center h-14 font-medium leading-6 px-4 mt-2 bg-indigo-500 hover:bg-indigo-600 text-white">{text}</button>
    )
}

export default Button