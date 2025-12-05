import { useNavigate } from 'react-router-dom';

type ButtonProps = {
    classes: string,
    choice: string,
    text: string
}

const ButtonNav = ({classes, choice, text}:ButtonProps) => {
  const nav = useNavigate()
  
  return (
    <button className={`${classes}`} onClick={() => nav(`/${choice}`)}>{text}</button>
  )
}

export default ButtonNav