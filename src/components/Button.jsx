const Button = ({ onClick, cls, children }) => {
	return <button onClick={onClick} className={cls}>{children}</button>;
};

export default Button;
