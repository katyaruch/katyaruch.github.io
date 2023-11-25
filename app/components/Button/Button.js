import "./Button.scss";

const Button = ({ onClick, children, as: Component = 'button', primary = false, color, ...rest }) => {
  return (
    <Component onClick={onClick} 
    className={`button 
      ${primary ? 'button--accent' : ''}
      ${color === 'white' ? 'button--white': ''}`} {...rest}>
      {children}
    </Component>
  )
}

export default Button
