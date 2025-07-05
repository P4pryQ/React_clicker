interface Props{
    onClick: () => void; 
}

const Button_minus = ({ onClick }: Props) => {
  return (
    <button type="button" className="btn btn-danger" onClick={onClick}>-</button>
  )
}

export default Button_minus