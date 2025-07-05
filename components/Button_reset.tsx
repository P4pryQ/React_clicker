interface Props{
    onClick: () => void;
}

const Button_reset = ({onClick}: Props) => {
  return (
    <button type="button" className="btn btn-secondary" onClick={onClick}>Reset</button>
  )
}

export default Button_reset