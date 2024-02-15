import "./Button";

function Button({onClick, children, type}) {
    
    return (
        <button type={type} className="button" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;